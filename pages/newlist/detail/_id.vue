<template>
  <div class="newsdetail">
    <div class="banner"></div>
    <div class="detail-con">
      <div class="detail">
        <div class="nav_bar">
          <b>当前位置：</b>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/newlist/' }">新闻资讯</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/newlist/' }">康复前言</el-breadcrumb-item>
            <el-breadcrumb-item>资讯详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="title">{{articledetail.title}}</div>
        <div class="writer-time">
          <span class="writer">
            <i></i>
            {{articledetail.form}}
          </span>
          <span class="time">
            <i></i>
            {{articledetail.created_at | formatDate}}
          </span>
        </div>
        <div class="content" v-html="articledetail.desc"></div>
        <div class="news-btn">
          <nuxt-link  to ='' class="btn">免费资讯MUST专家</nuxt-link>
          <nuxt-link  to ='' class="btn">康复师认证考试服务</nuxt-link>
        </div>
        <div class="pre-next">
          <nuxt-link  to ='' class="pre"><i></i>上一篇：</nuxt-link>
          <nuxt-link  to ='' class="next"><i></i>下一篇：</nuxt-link>
        </div>
      </div>
      <div class="sidebar">这里是侧边栏</div>
    </div>
  </div>
</template>

<script>
import { getArticleDetail ,getNewsList } from "@/api/news/";
import { formatDate } from "@/assets/js/date";

export default {
  data() {
    return {
      articledetail: [] ,//新闻详情
      newslist: [],   //新闻的分类
    };
  },
  filters: {
    formatDate(time) {
      //将时间戳转化为日期格式
      time = time * 1000;
      let date = new Date(time);
      return formatDate(date, "yyyy年MM月dd日");
    }
  },
  created() {
    if (process.browser) {
      this.getArticleId();
    }
  },
  methods: {
    getArticleId() {
 
      let str = window.location.href;
      let index = str.lastIndexOf("/");
      str = str.substring(index + 1, str.length); //截取地址栏的id值
      //获取新闻详情
      getArticleDetail({ id: str }).then(res => {
        this.articledetail = res.data;
      });
      //获取新闻分类
      getNewsList().then(res =>{
        this.newslist = res.data;
      })
    }
  }
};
</script>
<style lang="scss">
.newsdetail{
  .el-breadcrumb{
    line-height: 38px;
    float: left;
  }
}


</style>
<style lang="scss" scoped>
.newsdetail {
  .banner {
    width: 100%;
    height: 380px;
    @include imgurl("/banner4.jpg");
    background-size: 100% 100%;
  }
  .detail-con {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    @include absCenter(false);
  }
  .detail {
    width: 850px;
    .nav_bar {
      height: 38px;
      line-height: 38px;
      b{
        float: left;
      }
    }
    .title {
      font-size: 30px;
      line-height: 60px;
    }
    .writer-time {
      width: 100%;
      padding-left: 4px;
      height: 22px;
      background: #dfdee3;
      line-height: 22px;
      i {
        width: 12px;
        height: 11px;
        display: inline-block;
        @include imgurl("/sprite.png");
        background-position: -318px -145px;
        margin-right: 6px;
      }
      .writer {
        margin-right: 35px;
        i {
          width: 11px;
          background-position: -306px -145px;
        }
      }
    }
    .content {
      padding: 26px 0;
      font-size: 14px;
      line-height: 24px;
    }
    .news-btn{
      width: 614px;
      height: 60px;
      @include absCenter(false);
      margin-left: 76px;
      .btn{
        width: 254px;
        height: 100%;
        line-height: 60px;
        border:1px dashed #f88b14;
        border-radius: 8px;
        text-align: center;
        font-size: 18px;
         &:hover {
          color: $primary-color;
        }
      }
    }
    .pre-next{
      margin: 63px 0 73px;
      padding: 35px 0 33px 75px;
      width: 100%;
      height: 158px;
      border:1px dashed #dfdee3;
      font-size: 20px;
      .pre,.next{
        display: block;
        line-height: 40px;
        position: relative;
        text-indent: 58px;
         &:hover {
          color: $primary-color;
        }
      }
      i{
        display: inline-block;
        width: 40px;
        height: 40px;
        @include imgurl("/sprite.png");
        background-position:  -380px -230px;
        position: absolute;
        top:0;
        left: 0;
      }
      .next{
        margin-top: 8px;
        i{
           background-position:  -420px -230px;
        }
      }
    }
  }
  .sidebar {
    width: 320px;
    height: 100%;
    border: 1px solid green;
  }
}
</style>