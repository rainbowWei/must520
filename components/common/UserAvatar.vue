<template>
  <!-- <div class="avatar">
    <p>{{'Rainbow'}}</p>
    <p class="pho">
      <img v-if="pho" :src="pho" alt=""> 
    </p>
  </div> -->
  <div class="RegisterLogin fr">
    <a href="javascript:" class="register">注册 </a>|
    <a href="javascript:">登录</a>
  </div>
</template>

<script>
import axios from '@/config/axios'
export default {
  name: 'UserAvatar',
  data() {
    return {
    }
  },
  created() {
  }
}
</script>
