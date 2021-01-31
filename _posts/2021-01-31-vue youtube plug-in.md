# vue youtube 전용 plug-in 사용하기



vue 에서 jquery 를 사용하려고 했지만 자꾸 생기는 오류로 인해 

다른 방법을 생각 하던 중 vue 전용 youtube 플러그인 

[vue-youtube](https://www.npmjs.com/package/vue-youtube) is an wrapper of [YouTube IFrame Player API 를 사용하기로 했다.



**Install**

```
npm install vue-youtube
```



**store.index.js**

```
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
 
Vue.use(VueYoutube)
```



**vue use**

```
<youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
<button @click="playVideo">play</button>
```



**example**

```
export default {
  data() {
    return {
      videoId: 'lG0Ys-2d4MA',
      playerVars: {
        autoplay: 1
      }
    }
  },
  methods: {
    playing() {
      console.log('\o/ we are watching!!!')
    }
  }
}
```



**seekTo()**

```
<template>
  <div>play

<youtube :video-id="videoId" id="youtube" ref="youtube"  @ready="onPlayerReady"></youtube>

  </div>
</template>
```

```
    onPlayerReady:function () {
          this.$refs.youtube.player.seekTo(60);

    }
```

플레이어를 60초 에서 시작 시킴