<template>
  <div>
    <ul v-if="!isLogin" class="register-login fr">
      <li>
        <nuxt-link to="/register">注册</nuxt-link>
      </li>
      <li>|</li>
      <li>
        <nuxt-link to="/login">登录</nuxt-link>
      </li>
    </ul>
    <section v-else class="register-login fr center">
      <p v-html="loginInfo.username"></p>
      <ul class="person-center">
        <li>
          <nuxt-link to>个人中心</nuxt-link>
        </li>
        <li>
          <nuxt-link to>我的设置</nuxt-link>
        </li>
        <li>
          <nuxt-link to>财务中心</nuxt-link>
        </li>
        <li>
          <nuxt-link to>我的课程</nuxt-link>
        </li>
        <li>
          <a href="javascript:" @click="logout">退出</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { loginOut } from "@/api/login/";
export default {
  name: "UserAvatar",
  data() {
    return {
      isLogin: false,
      loginInfo: {}
    };
  },
  created() {
    if (process.browser) {
      const authKey = window.localStorage.getItem("authKey");
      const sessionId = window.localStorage.getItem("sessionId");

      if (authKey && sessionId) {
        this.isLogin = true;
        this.loginInfo = JSON.parse(window.localStorage.getItem("loginInfo")) || {};
      } else {
        this.isLogin = false;
      }
    }
  },
  methods: {
    logout() {
      // todo logout接口
      if (process.browser) {
        loginOut({
          authKey: window.localStorage.getItem("authKey"),
          sessionId: window.localStorage.getItem("sessionId")
        }).then(res => {
          window.localStorage.removeItem("authKey");
          window.localStorage.removeItem("sessionId");
          window.localStorage.removeItem("loginInfo");
          this.isLogin = false;
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.register-login {
  width: 165px;
  text-align: center;
  margin-left: 20px;
  position: relative;
  > li {
    float: left;
    padding: 0 5px;
  }
}
.center {
  &:hover {
    .person-center {
      display: block;
    }
  }
}

.person-center {
  display: none;
  width: 160px;
  border: 1px solid red;
  background: gray;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 10;
  li {
    width: 100%;
    line-height: 40px;
    border-bottom: 1px solid red;
  }
}
</style>
