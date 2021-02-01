# vue youtube 전용 plug-in 사용하기 - 2

vue plug-in을 이용해서 youtube를 재생 시킬때, 

원하는 위치(시간)에서 시작하는 함수는 **seekTo()** 함수를 사용했었다.



추가적으로 재생 시키는 위치의 시간을 알기 위해서는 **getCurrentTime()** 를 이용하면 된다.



하지만 지난번에 설치한 plug-in 에서는 getCurrentTime()함수를 읽을 수 없었다.

추가적으로 찾아 본 결과 Vue YouTube Embed 를 설치했더니 해결되었다.



참고한 사이트 주소 :

1.  https://developers.google.com/youtube/iframe_api_reference?csw=1#Requirements
2. https://github.com/kaorun343/vue-youtube-embed



**Install**

```
// NPM install
npm i -S vue-youtube-embednpm install vue-youtube
```



**store.index.js**

```
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
// if you don't want install the component globally
Vue.use(VueYouTubeEmbed, { global: false })
// if you want to install the component globally with a different name
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" })
```



**vue use**

```
<youtube :video-id="videoId"></youtube>
```



**example**

```
  methods:{
          
          onPlayerReady:function () {
            this.$refs.youtube.player.seekTo(60);
            
          setInterval(() => {
            console.log(this.$refs.youtube.player.getCurrentTime())
              }, 6000);
            
            }, 

      
     }
```

onPlayerReady 함수는 유투브를 재생하면 60초부터 시작이 되고

6초에 한번씩 유투브의 시간을 consol에 표시해준다 