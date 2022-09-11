import { Component, onMount, createEffect, Match, Switch, For, Show } from 'solid-js';
import { createStore } from "solid-js/store";
import GIF from '@dhdbstjr98/gif.js'

import styles from './App.module.css';

type Status = 'preparing' | 'standby' | 'shooting' | 'setupgif' | 'generating' | 'done'
interface State {
  status: Status
  stream: MediaStream | null
  images: string[]
  imgDataList: ImageData[]
  intervalId?: number
  interval: number
  delay: number
  shootingTime: number
  devices: InputDeviceInfo[]
}

const App: Component = () => {
  let videoElement: HTMLVideoElement | undefined
  let canvasElement: HTMLCanvasElement | undefined
  const [store, setStore] = createStore<State>({
    status: 'preparing',
    stream: null,
    images: [],
    imgDataList: [],
    intervalId: undefined,
    devices: [],
    interval: 1,
    shootingTime: 0,
    delay: 200,
  })
  
  onMount(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment'
      }
    })
    setStore('stream', () => stream)
    const devices = await navigator.mediaDevices.enumerateDevices()
    setStore('devices', () => devices.filter((d => d.kind === 'videoinput')))
  })

  createEffect(() => {
    if (videoElement) {
      videoElement.srcObject = store.stream
    }
  })

  const shoot = async () => {
    setStore('status', () => 'standby')
    const take = () => {
      if (videoElement && canvasElement && store.stream) {
        const { width, height } = store.stream.getVideoTracks()[0].getSettings()
        if (!width || !height) return
        canvasElement.width = width 
        canvasElement.height = height
        const ctx = canvasElement.getContext('2d')
        if (!ctx) return
        ctx.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height)
        const img = canvasElement.toDataURL('image/png')
        const imgData = ctx.getImageData(0,0,canvasElement.width, canvasElement.height)
        setStore('images', (imgs) => [...imgs, img])
        setStore('imgDataList', (ims) => [...ims, imgData])
      }
    }
    setTimeout(() => {
      take()
      const intervalId = setInterval(() => {
        take()
      }, store.interval * 1000)

      if (store.shootingTime > 0) {
        setTimeout(() => {
          stopShooting()
        }, store.shootingTime * 1000)
      }
      setStore('intervalId', () => intervalId)
      setStore('status', () => 'shooting')
    }, 3000)

  }
  const stopShooting = () => {
    clearInterval(store.intervalId)
    setStore('status', () => 'setupgif')
  }
  const generateGIF = () => {
    setStore('status', () => 'generating')
    const gif = new GIF({
      quality: 10,
    })
    store.imgDataList.forEach((img) => {
      gif.addFrame(img, { delay: store.delay })
    })
    gif.render()
    gif.on('finished', (blob: any) => {
      window.open(URL.createObjectURL(blob))
      setStore('status', () => 'setupgif')
    })
  }

  const onChangeInterval = (ev: any) => {
    setStore('interval', () => Number(ev.target.value))
  }
  const onChangeShootingTime = (ev: any) => {
    setStore('shootingTime', () => Number(ev.target.value))
  }
  const onChangeDelay = (ev: any) => {
    setStore('delay', () => Number(ev.target.value))
  }
  const onChangeDevice = async (ev: any) => {
    const deviceId = ev.target.value
    store.stream?.getTracks().forEach((t) => t.stop())
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        deviceId
      }
    })
    setStore('stream', () => stream)
  }

  return (
    <div class={styles.App}>
      <div class={styles.VideoWrapper}>
        <video ref={videoElement} playsinline muted autoplay></video>
        <div class={styles.BottomNav}>
          <Switch>
            <Match when={store.status === 'preparing'}>
              <div class='columns'>
                <div class='column'>
                  <div class="select">
                    <select onChange={onChangeDevice}>
                      <For each={store.devices}>{
                        (item) => {
                          return <option value={item.deviceId}>{item.label}</option>
                        }
                      }</For>
                    </select>
                  </div>
                </div>
                <div class='column'>
                  <div class="field is-vertical">
                    <div class="field-label is-normal">
                      <label class="label">撮影間隔(秒)</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p class="control">
                          <input class="input is-danger" type="number" onInput={onChangeInterval} value={store.interval}/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='column'>
                  <div class="field is-vertical">
                    <div class="field-label is-normal">
                      <label class="label">撮影時間(秒・0は無限)</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p class="control">
                          <input class="input is-danger" type="number" onInput={onChangeShootingTime} value={store.shootingTime}/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='column pt-2'>
                  <button onClick={shoot} class={styles.ShootingBtn}>Let's shooting!</button>
                </div>
              </div>
            </Match>
            <Match when={store.status === 'standby'}>
              <div class='title'>
                準備中
              </div>
            </Match>
            <Match when={store.status === 'shooting'}>
              <div>
                <button onClick={stopShooting} class={styles.ShootingBtn}>Stop!!!</button>
              </div>
              <div class={styles.Gallery + ' pt-2'}>
                <For each={store.images}>{(im, i) => {
                  return <img src={im} width="100"></img>
                }}</For>
              </div>
            </Match>
            <Match when={store.status === 'setupgif' || store.status === 'generating'}>
              <div class='columns'>
                <div class='column'>
                  <div class="select">
                    <div class="field is-vertical">
                      <div class="field-label is-normal">
                        <label class="label">間隔(ミリ秒)</label>
                      </div>
                      <div class="field-body">
                        <div class="field">
                          <p class="control">
                            <input class="input is-danger" type="number" onInput={onChangeDelay} value={store.delay}/>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='column pt-2'>
                  <Show
                    when={store.status === 'setupgif'}
                    fallback={() => <progress class="progress is-small is-primary" max="100">15%</progress>}
                  >
                    <button
                      onClick={generateGIF}
                      class={styles.ShootingBtn}
                    >Get gif</button>
                  </Show>
                </div>
              </div>
              <div class={styles.Gallery + ' pt-2'}>
                <For each={store.images}>{(im, i) => {
                  return <img src={im} width="100"></img>
                }}</For>
              </div>
            </Match>
          </Switch>
        </div>
      </div>
      <canvas ref={canvasElement} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default App;
