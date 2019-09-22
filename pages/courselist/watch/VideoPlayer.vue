<template>
  <div class="video-contain">
    <div
      class="video-player-box"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ready="playerReadied"
      @ended="onPlayerEnded($event)"
      @statechanged="playerStateChanged($event)"
      v-video-player:myVideoPlayer="options"
      @contextmenu.prevent
    ></div>
  </div>
</template>

<script>
import { imgUrl } from "@/config/utils";
import { getCourseChapter } from "@/api/course/course";
export default {
  name: "VideoPlayer",
  props: {
    videoSource: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      playerOptions: {
        autoplay: true, // 是否自动播放
        muted: true, // 是否静音
        language: "en", // 语言
        playbackRates: [0.7, 1.0, 1.5, 2.0] // 播放倍率
      },
      timer: null // 定时器
    };
  },
  computed: {
    // 添加视频资源
    options() {
      const o = {
        ...this.playerOptions,
        sources: [
          {
            type: "video/mp4",
            src: this.videoSource.video_addr
          }
        ],
        poster: imgUrl("/banner.jpg"), // 封面
        currentTime: this.videoSource.learn_time
      };
      return o;
    }
  },
  destroyed() {
    this.clearUpdate();
  },
  methods: {
    // 关闭更新播放状态
    clearUpdate() {
      clearInterval(this.timer);
      // todo
      getCourseChapter().then(res => {
        console.log("更新播放状态成功", 22222);
      });
    },
    // 更新播放状态
    updatePlayerStatus() {
      this.clearUpdate();
      this.timer = setInterval(() => {
        // todo
        getCourseChapter().then(res => {
          console.log("更新播放状态成功", 11111);
        });
      }, 10000);
    },
    // 播放视频
    onPlayerPlay(player) {
      console.log("player play!", player);
      this.updatePlayerStatus();
    },
    // 暂停播放
    onPlayerPause(player) {
      console.log("player pause!");
      this.clearUpdate();
    },
    // 播放结束
    onPlayerEnded(player) {
      console.log("player ended!");
      this.clearUpdate();
    },

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      console.log("example 01: the player is readied", player);
    }
  }
};
</script>

<style lang="scss">
.video-contain {
  @include size(100%);
  position: relative;
  .video-player-box {
    @include size(100%);
  }
  .video-js {
    width: 100% !important;
    height: 100% !important;
    position: relative;
  }
  .vjs-big-play-button {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .vjs-paused .vjs-big-play-button,
  .vjs-paused.vjs-has-started .vjs-big-play-button {
    display: block;
  }
}
</style>

