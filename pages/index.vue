<template>
  <div class="container">
    <el-carousel class="carousel" :interval="2000" arrow="always" :autoplay="true">
        <el-carousel-item class="xxxx" v-for="item in carousel" :key="item.src">
          <!-- <img :src="item.src" alt=""> -->
          <img src="@/assets/img/banner2.jpg" alt="">
        </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  head: {
    title: '首页',
    meta: [
      { content: 'xxx', name: 'rainbow' }
    ]
  },
  data() {
    return {
      carousel: [
        { src: "@/assets/img/banner.jpg"},
        { src: "@/assets/img/banner2.jpg"},
        { src: "@/assets/img/banner3.jpg" },
        
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
  .container .carousel {
    .el-carousel__button{
      background-color: blue !important;
      width: 20px !important;
      height: 20px !important;
      border-radius: 50% !important;
    }
    img{
      width:100%;
      height: 100%;
    }
  }
  
</style>

