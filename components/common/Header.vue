<template>
  <div class="xxw-header">
    <div class="slogo clearfix">
      <div class="content">
        <div class="slogoL fl">自闭症康复训练技术——MUST引导行为，行为改变命运</div>
        <r-user-avatar/>
      </div>
    </div>
    <div class="headerLogo">
      <div class="content">
        <div class="logo fl">
          <a href="/">
            <img src="@/assets/img/logo.png" alt="">
          </a>
        </div>
        <div class="search fl">
          <input type="text" name="" id="">
          <p>资格考试 MUST专家 杜佳楣 认证课程</p>
          <a href="javascript:" class="searchsumit"></a>
        </div>
        <div class="contact fl">
          <a href="tel:010-52668752">
            <span></span>
            <p>010-52668752</p>
          </a>
        </div>
      </div>
    </div>
    <div class="nav">
      <ul class="navcontent">
        <li
          v-for="catalogue in catalogues"
          :key="catalogue.toUrl"
          :class="url == catalogue.toUrl ? 'active' : ''"
          @click="()=>getUrl(catalogue.toUrl)"
        >
          <nuxt-link :to="catalogue.toUrl">{{catalogue.title}}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RUserAvatar from "@/components/common/UserAvatar.vue";
const catalogues = [
  { toUrl: "/", title: "首页" },
  { toUrl: "/courselist", title: "课程认证"},
  { toUrl: "/exam", title: "资格考试"},
  { toUrl: "/talentlist", title: "MUST人才库" },
  { toUrl: "/videocenter", title: "视频中心" },
  { toUrl: "/newlist", title: "新闻资讯" },
  { toUrl: "/cooperate", title: "合作加盟"},
  { toUrl: "/about", title: "关于MUST" }
];
export default {
  name: "Header",
  components: {
    RUserAvatar
  },
  data() {
    return {
      catalogues,
      url: ''
    };
  },
  created() {
    if (process.browser) {
      this.getQueryString(this.url)
      this.url = window.localStorage.getItem('url') || '/'
    }
  },
  // destroyed() {
  //   if (process.browser) {
  //     window.localStorage.removeItem('url')
  //   }
  // },
  methods: {
    getQueryString(url) {
      let qString = window.location.href;
      qString =  qString.indexOf('url') == -1 ? qString :'';
    },
    // 切换导航
    getUrl(url) {
      this.url = url;
      if (process.browser) {
        window.localStorage.setItem('url', url)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.xxw-header {
  .nav {
    width: 100%;
    background: #01072a;
    .navcontent {
      padding: 0 12px;
      width: 1176px;
      margin: 0 auto;
      @include absCenter(false);
    }
    li {
      font-size: 18px;
      line-height: 40px;
      color: #fff;
      &:hover {
        color: $primary-color;
      }
      &.active {
        color: $primary-color;
      }
    }
  }
}
.content {
  max-width: 1200px;
  margin: 0 auto;
}
.slogo {
  background: #f4f4f4;
  height: 40px;
  line-height: 40px;
  width: 100%;
  font-size: 18px;
  .RegisterLogin {
    width: 165px;
    text-align: center;
  }
}
.headerLogo {
  width: 100%;
  height: 120px;
  .logo {
    width: 216px;
    height: 85px;
    margin-top: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .search {
    width: 428px;
    margin: 38px 140px 0 170px;
    position: relative;
    input {
      width: 390px;
      height: 38px;
      border: 1px solid #ef8200;
      border-radius: 4px;
    }
    p {
      color: #aaaaa9;
      margin-top: 8px;
    }
    .searchsumit {
      width: 60px;
      height: 61px;
      @include imgurl("/sprite.png");
      background-position: -297px -34px;
      position: absolute;
      top: -10px;
      right: -10px;
    }
  }
  .contact {
    font-size: 24px;
    font-weight: bold;
    position: relative;
    span {
      width: 32px;
      height: 32px;
      position: absolute;
      left: 0;
      top: 45px;
      @include imgurl("/sprite.png");
      background-position: -386px -49px;
    }
    p {
      line-height: 120px;
      text-indent: 42px;
      color: #ef8200;
    }
  }
}
</style>


