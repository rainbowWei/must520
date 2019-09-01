<template>
  <div>
    <el-carousel :interval="2000" arrow="always" autoplay>
      <el-carousel-item v-for="item in newsSeries" :key="item.id">
        <h3>{{ item.name }}</h3>
      </el-carousel-item>
    </el-carousel>
    <section class="news-series">
      <div class="left-bar">
        <ul class="news-bar">
          <li
            v-for="title in newsSeries"
            :class="activeKey === title.id ? 'active': '' "
            :key="title.id"
            @click="() => handleTabs(title.id)"
          >{{title.name}}</li>
        </ul>
        <div class="hot-tags">
          <el-button plain round class="tag" size="small">1</el-button>
          <el-button plain round class="tag" size="small">3</el-button>
          <el-button plain round class="tag" size="small">xxw</el-button>
        </div>
      </div>
      <ul class="news-list">
        <li v-for="article in newsArticlesList" :key="article.id">{{article.title}}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import { getNewsList, getNewsArticle } from "@/api/news/";
export default {
  data() {
    return {
      newsSeries: [], // 新闻资讯分类列表
      activeKey: 1, // 当前活动的窗口
      newsArticles: [], // 新闻详情列表数据，带分页
    };
  },
  created() {
    this.handleGetNewsList()
    this.handleGetNewsArticle(1, 1)
  },
  computed: {
    newsArticlesList() {
      return this.newsArticles.data || []
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
    }
  }
};
</script>

<style lang="scss" scoped>
.news-series {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
  .left-bar {
    width: 244px;
    .news-bar {
      border: 1px solid #eee;
      li {
        border-bottom: 1px solid #eee;
        @include absCenter();
        cursor: pointer;
        color: #333;
        font-size: 16px;
        line-height: 30px;
        &:last-child {
          border: none;
        }
        &:hover {
          background-color: #8f7;
        }
        &.active {
          background-color: lightblue;
        }
      }
    }
    .hot-tags {
      margin-top: 16px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .tag {
        background: none;
        margin-right: 8px;
        margin-left: 0;
        margin-top: 6px;
      }
    }
  }
  .news-list {
    margin-left: 12px;
    flex: 1;
    height: 680px;
    li {
      height: 60px;
      background: red;
      margin-top: 8px;
      &:first-child {
        margin-top: 0;
      }
    }
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
