<template>
  <div>
    <el-carousel :interval="2000" arrow="always" autoplay>
      <el-carousel-item v-for="item in newsSeries" :key="item.id">
        <h3>{{ item.name }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="new-con">
      <h3><i></i>新闻资讯</h3>
      <section class="news-series clearfix">
        <div class="left-bar fl">
          <ul class="news-bar">
            <div class="header"></div>
            <li
              v-for="title in newsSeries"
              :class="activeKey === title.id ? 'active': '' "
              :key="title.id"
              @click="() => handleTabs(title.id)"
            >{{title.name}}</li>
            <div class="footer"></div>
          </ul>
          <div class="hot-tags">
            <h4>MUST热门标签</h4>
            <r-button plain round class="tag" size="small" href="http://www.xingxiwang.net">1</r-button>
            <r-button plain round class="tag" size="small" href="http://www.baidu.com">3</r-button>
            <r-button plain round class="tag" size="small" href="http://www.xinlang.com">xxw</r-button>
            <r-button plain round class="tag" size="small" href="http://www.xingxiwang.com">星希望教育</r-button>
          </div>
        </div>
        <ul class="news-list fr">
          <li v-for="article in newsArticlesList" :key="article.id">
             <nuxt-link :to="`/newlist/detail/${article.id}`">
                <div class="item-img">
                  <img :src="article.cover" alt=""/>
                </div>
                <div class="item-text">
                    <div class="title">{{article.title}}</div>
                    <div class="txt"><span>导语：</span>{{article.abstract}}</div>
                    <div class="bottom clearfix">
                      <div class="contact fl"><i></i>{{article.form}}</div>
                      <div class="time fr"><i></i>{{article.updated_at | formatDate}}</div> 
                    </div>
                </div>
              </nuxt-link>
          </li>
        </ul>
      </section>
      <el-pagination
          v-show="newsListPageInfo.total > newsListPageInfo.pageSize"
          class="pagination"
          @current-change="handleCurrentChange"
          :current-page="newsListPageInfo.currentPage"
          :page-size="newsListPageInfo.pageSize"
          layout="slot, prev, pager, next"
          :total="newsListPageInfo.total"
          :background="true"
        >
          <slot>
            <span class="total">共{{newsListPageInfo.total}}条</span>
          </slot>
          <slot>
            <span class="current">第{{newsListPageInfo.currentPage}}页</span>
          </slot>
        </el-pagination>
    </div>
  </div>
</template>

<script>
import { getNewsList, getNewsArticle } from "@/api/news/";
import {formatDate} from '@/assets/js/date';

export default {
  data() {
    return {
      newsSeries: [], // 新闻资讯分类列表
      activeKey: 1, // 当前活动的窗口的下标
      newsArticles: [], // 新闻详情列表数据，带分页
       pageInfo: {
        // 分页器参数
        total: 0,
        pageSize: 12,
        currentPage: 1
      }
    };
  },
  filters: {
    formatDate(time) {  //将时间戳转化为日期格式
      time = time * 1000
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  created() {
    this.handleGetNewsList()
    this.handleGetNewsArticle(this.activeKey, 1)
  },
  computed: {
    //新闻列表数据
    newsArticlesList() {
      return this.newsArticles.data || []
    },

    // 新闻列表的分页信息
    newsListPageInfo() {
      const newsArticles = this.newsArticles;
      const pageInfo = {
        total: newsArticles.total,
        pageSize: newsArticles.per_page,
        currentPage: newsArticles.current_page
      };
      return pageInfo;
    }
  },
  methods: {
    handleTabs(key) {
      this.activeKey = key
      this.handleGetNewsArticle(key, 1)
    },
    //渲染新闻分类
    handleGetNewsList() {
      getNewsList()
        .then(res => {
          if (res.data) {
            this.newsSeries = res.data
          }
        })
        .catch(err => {
          throw new Error(err, "|||")
        });
    },
    //获取并渲染新闻列表数据
    handleGetNewsArticle(id, page) {
      getNewsArticle({
        cateid: id,
        page
      }).then(res => {
        if (res.data) {
          this.newsArticles = res.data
        }
      });
    },
    //分页器
    handleCurrentChange(val) {
      this.handleGetNewsArticle(this.activeKey, val);
    }
  }
};
</script>

<style lang="scss" scoped>
.new-con{
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
  h3{
    height: 41px;
    line-height: 41px;
    font-size: 34px;
    color: $primary-color;
    position: relative;
    margin: 45px 0 14px;
    text-indent: 54px;
    
    i{
      width: 41px;
      height: 42px;
      @include imgurl("/sprite.png");
      background-position: -297px -168px;
      position: absolute;
      top:0;
      left: 0;
    }
  }
}
.news-series {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  .left-bar {
    width: 244px;
    .news-bar {
      border: 1px solid #eee;
      .header{
          width: 100%;
          height: 30px;
          background: #01072A;
        }
        .footer{
          width: 100%;
          height: 100px;
          background: $primary-color;
        }
      li {
        border-bottom: 1px solid #f1f1f1;
        @include absCenter();
        cursor: pointer;
        color: #333;
        font-size: 22px;
        line-height:60px;
        &:last-child {
          border: none;
        }
        &:hover {
          color: $primary-color;
        }
        &.active {
          background-color: lightblue;
        }
      }
    }
    .hot-tags {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-top: 45px;
        h4{
          width: 100%;
          height: 36px;
          border-bottom: 4px solid #dedde2;
          font-size: 22px;
          line-height: 36px;
        }
      .tag {
        background: none;
        border-radius: 10px;
        margin: 9px 5px;
        font-size: 14px;
      }
    }
  }
  .news-list {
    width: 900px;
    height: 100%;
    li {
      width: 100%;
      height: 222px;
      margin-bottom: 30px;
      background: #f2f1ec;
      .item-img{
        float: left;
        width: 296px;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        }
      }
       .item-text{
          width: 560px;
          height: 100%;
          padding-right: 14px;
          float: right;
          font-size: 12px;
          line-height: 24px;
          color: #646464;
          position: relative;
        }
        .title{
          font-size: 22px;
          margin: 40px 0 14px 0;
          color: #000;
        }
        .bottom{
          width: 560px;
          padding-right: 14px;
          height: 14px;
          line-height:14px;
          position: absolute;
          left: 0;
          bottom: 14px;
          i{
            width: 12px;
            height: 11px;
            display: inline-block;
             @include imgurl("/sprite.png"); 
            background-position: -318px -145px;
            margin-right: 8px;
            margin-top: 2px;
          }
          .contact{
            margin-left: 315px;
            i{
              width: 11px;
              background-position: -306px -145px;
            }
          }
        }
    }
  }
}
 .pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 45px;
    .total,
    .current {
      margin-right: 8px;
    }
  }
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
