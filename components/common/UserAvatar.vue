<template>
  <div>
    <ul class="RegisterLogin fr">
      <li>
        <a href="/register">注册</a>
      </li>
      <li>|</li>
      <li>
        <a href="/login">登录</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "@/config/axios";
export default {
  name: "UserAvatar",
  data() {
    return {

    };
  },
  created() {
    if(process.browser){
      window.localStorage.getItem("authKey");
      window.localStorage.getItem("sessionId")
     
    }
  }
};
</script>
<style lang="scss" scoped>

  .RegisterLogin {
    width: 165px;
    text-align: center;
    margin-left: 20px;
    li{
      float: left;
      padding: 0 5px;
    }
  }
</style>
