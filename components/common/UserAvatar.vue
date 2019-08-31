<template>
  <div class="avatar">
    <p>{{'Rainbow'}}</p>
    <p class="pho">
      <!-- <img v-if="pho" :src="pho" alt=""> -->
    </p>
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
