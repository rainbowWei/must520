<template>
  <div class="newsdetail">
    <div class="banner"></div>
    <div class="detail-con clearfix">
      <div class="detail">
        <div class="nav_bar">
          <b>当前位置：</b>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/newlist' }">新闻资讯</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/newlist' }">{{activeSeries.name}}</el-breadcrumb-item>
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
          <nuxt-link to class="btn">免费资讯MUST专家</nuxt-link>
          <nuxt-link to class="btn">康复师认证考试服务</nuxt-link>
        </div>
        <div class="pre-next">
          <nuxt-link :to="`/newlist/detail/${before.id}`" class="pre" v-if="before !== null">
            <i></i>
            上一篇：{{before.title}}
          </nuxt-link>
          <nuxt-link :to="`/newlist/detail/${after.id}`" class="next" v-if="after !== null">
            <i></i>
            下一篇：{{after.title}}
          </nuxt-link>
        </div>
      </div>
      <div class="sidebar">
        <div class="lunbo">
          <el-carousel
            class="carousel"
            :interval="2000"
            arrow="always"
            :autoplay="true"
            trigger="click"
          >
            <el-carousel-item v-for="item in carousel" :key="item.src">
              <img :src="$imgUrl('/banner2.jpg')" alt />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="information">
          <h3>相关资讯</h3>
          <ul class="info-list">
            <li>标题一</li>
            <li>标题二</li>
            <li>标题三</li>
            <li>标题四</li>
            <li>标题五</li>
          </ul>
        </div>
        <!-- 两部分都需要接口 -->
        <div class="news-hot">
          <h3>MUST热门标签</h3>
          <r-button plain round class="tag" size="small" href="http://www.xingxiwang.net">1</r-button>
          <r-button plain round class="tag" size="small" href="http://www.baidu.com">3</r-button>
          <r-button plain round class="tag" size="small" href="http://www.xinlang.com">xxw</r-button>
          <r-button plain round class="tag" size="small" href="http://www.xingxiwang.com">星希望教育</r-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleDetail, getNewsList } from "@/api/news/";
import { formatDate } from "@/assets/js/date";

export default {
  data() {
    return {
      articledetail: [], // 新闻详情
      activeSeries: [], // 当前新闻的分类
      before: [], // 新闻上一篇
      after: [], // 新闻下一篇
      carousel: [
        { src: "@/assets/img/banner.jpg" },
        { src: "@/assets/img/banner2.jpg" },
        { src: "@/assets/img/banner3.jpg" }
      ]
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
      const activeKey = +sessionStorage.getItem("activeKey") || 1;

      //获取新闻分类
      getNewsList().then(res => {
        this.activeSeries = res.data.find(item => item.id === activeKey); //返回数组中的添加满足的那个元素
      });

      let str = window.location.href;
      let index = str.lastIndexOf("/");
      str = str.substring(index + 1, str.length); //截取地址栏的id值
      //获取新闻详情
      getArticleDetail({ id: str }).then(res => {
        this.articledetail = res.data;
        this.before = res.data.before_id;
        this.after = res.data.after_id;

        console.log(res.data, "++++++++++++++++++++++");
      });
    }
  }
};
</script>
<style lang="scss">
.newsdetail {
  .el-breadcrumb {
    line-height: 38px;
    float: left;
  }
  .el-carousel__container {
    width: 300px;
    height: 200px;
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
  }
  .detail {
    width: 850px;
    float: left;
    .nav_bar {
      height: 38px;
      line-height: 38px;
      b {
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
    .news-btn {
      width: 614px;
      height: 60px;
      @include absCenter(false);
      margin-left: 76px;
      .btn {
        width: 254px;
        height: 100%;
        line-height: 60px;
        border: 1px dashed #f88b14;
        border-radius: 8px;
        text-align: center;
        font-size: 18px;
        &:hover {
          color: $primary-color;
        }
      }
    }
    .pre-next {
      margin: 63px 0 73px;
      padding: 35px 0 33px 75px;
      width: 100%;
      height: 158px;
      border: 1px dashed #dfdee3;
      font-size: 20px;
      .pre,
      .next {
        display: block;
        line-height: 40px;
        position: relative;
        text-indent: 58px;
        &:hover {
          color: $primary-color;
        }
      }
      i {
        display: inline-block;
        width: 40px;
        height: 40px;
        @include imgurl("/sprite.png");
        background-position: -380px -230px;
        position: absolute;
        top: 0;
        left: 0;
      }
      .next {
        margin-top: 8px;
        i {
          background-position: -420px -230px;
        }
      }
    }
  }
  .sidebar {
    float: right;
    width: 320px;
    height: 100%;
    border-left: 3px solid #f4f4f4;
    padding-left: 17px;
    margin-top: 100px;
    .lunbo {
      width: 300px;
      height: 200px;
      .carousel {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 200px;
        }
      }
    }
    .information {
      height: 210px;
      width: 100%;
      margin-top: 50px;
      h3 {
        font-size: 24px;
        line-height: 24px;
        padding-bottom: 6px;
        border-bottom: 4px solid #dfdee3;
      }
      .info-list {
        padding-top: 10px;
        li {
          line-height: 30px;
        }
      }
    }
    .news-hot {
      margin-top: 20px;
      height: 250px;
      h3 {
        font-size: 24px;
        line-height: 24px;
        padding-bottom: 6px;
        border-bottom: 4px solid #dfdee3;
      }
      .tag {
        background: none;
        border-radius: 10px;
        margin: 9px 5px;
        font-size: 14px;
      }
    }
  }
}
</style>