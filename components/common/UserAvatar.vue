<template>
  <div>
    <ul v-if="!isLogin" class="register-login fr">
      <li>
        <a href="/register">注册</a>
      </li>
      <li>|</li>
      <li>
        <a href="/login">登录</a>
      </li>
    </ul>
    <section v-else class="register-login fr center">
      <p v-html="loginInfo.username"></p>
      <ul class="person-center">
        <li>
          <a href="">个人中心</a>
        </li>
        <li>
          <a href="">我的设置</a>
        </li>
        <li>
          <a href="">财务中心</a>
        </li>
        <li>
          <a href="">我的课程</a>
        </li>
        <li >
          <a href="" @click="logout">退出</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from "@/config/axios";
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
        this.loginInfo =
          JSON.parse(window.localStorage.getItem("loginInfo")) || {};
        console.log(this.loginInfo, "----->>>>>>");
      } else {
        this.isLogin = false;
      }
    }
  },
  methods: {
    logout() {
      if (process.browser) {
        // todo logout接口

        window.localStorage.removeItem("authKey");
        window.localStorage.removeItem("sessionId");
        window.localStorage.removeItem("loginInfo");
        this.isLogin = false;
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
  z-index: 2;
  li {
    width: 100%;
    line-height: 40px;
    border-bottom: 1px solid red;
  }
}
</style>
