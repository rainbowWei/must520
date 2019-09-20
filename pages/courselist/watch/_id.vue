<template>
  <div class="watch-pags">
    <div class="watch-video">
      <div class="video">
        <div class="video-con">
          <video :src="coursewatch.video_addr" controls="controls" autoplay></video>
        </div>
        <div class="video-btn" @click="showHide"></div>
        <div class="video-catalogue" ref="catalogue">
          <div class="header">课程目录</div>
          <div class="catalogue-con">
            <div class="courseList_box" v-for="(chapter) of chapterlist" :key="chapter.id">
              <div class="chapter-title clearfix">
                <div class="tit">{{chapter.chapter_name}}</div>
              </div>
              <ul class="list" ref="childList">
                <li v-for="catalog in chapter.catalog" :key="catalog.id">
                  <nuxt-link :to="`/courseList/watch/${catalog.id}`">
                    <span class="title">{{catalog.video_name}}</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="watch-comment">
      <div class="comment">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="评论列表" name="first">
            评论列表
            <div class="form">
              <el-form>
                <el-form-item>
                  <el-input type="textarea" placeholder="我的评论......"></el-input>
                </el-form-item>
              </el-form>
              <div class="star">
                <span>课程综合评分:</span>
                <el-rate v-model="value1"></el-rate>
              </div>
              <div class="login-reg">
                <span>你需要登录后才可以评论</span>
                <a href="javascript">登录</a> |
                <a href="javascript">注册</a>
              </div>
            </div>
            <ul class="comment-list">
              <li>
                <div class="list-con">
                  <div class="L_imag_head">
                    <img src alt />
                  </div>
                  <div class="L_coment_box">
                    <div class="artical">
                      <span>这是用户名</span>
                      <span>这是星星</span>
                      <span>点赞</span>
                      <span>回复</span>
                    </div>
                    <p>这是评论的内容</p>
                    <div>这是时间</div>
                  </div>
                </div>
              </li>
              <li>
                <div class="list-con">
                  <div class="L_imag_head">
                    <img src alt />
                  </div>
                  <div class="L_coment_box">
                    <div class="artical">
                      <span>这是用户名</span>
                      <span>这是星星</span>
                      <span>点赞</span>
                      <span>回复</span>
                    </div>
                    <p>这是评论的内容</p>
                    <div>这是时间</div>
                  </div>
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="最新评论" name="second">最新评论</el-tab-pane>
          <el-tab-pane label="最热评论" name="third">最热评论</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { getCourseWatch, getCommentAnswer } from "@/api/course/course";
export default {
  data() {
    return {
      chapterlist: [], //课程目录
      courseid: "",
      coursewatch: [], //视频资源
      commentanswer: [], //评论回复带分页
      activeName: "first",
      value1: null
    };
  },
  created() {
    if (process.browser) {
      this.chapterlist = JSON.parse(window.localStorage.getItem("chapter")); //获取课程目录
      this.courseid = window.localStorage.getItem("courseId"); //获取课程id
      this.getCourseWat();
      this.getCommentAnswer();
    }
  },
  mounted() {
    this.showHide();
  },
  methods: {
    //课程目录的显示隐藏
    showHide() {
      if (this.$refs.catalogue.style.display === "none") {
        this.$refs.catalogue.style.display = "block";
      } else {
        this.$refs.catalogue.style.display = "none";
      }
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    getCourseWat() {
      let str = window.location.href;
      let index = str.lastIndexOf("/");
      str = str.substring(index + 1, str.length); //截取地址栏的id值

      //获取播放地址
      getCourseWatch({ id: str }).then(res => {
        this.coursewatch = res.data;
      });
    },
    getCommentAnswer() {
      //获取课程的评价以及回复
      getCommentAnswer({ id: this.courseid }).then(res => {
        this.commentanswer = res.data;
      });
    }
  }
};
</script>
<style lang="scss">
.watch-pags {
  .el-form {
    width: 900px;
    height: 200px;
    margin: 0 auto;
  }
  .el-textarea__inner {
    height: 200px;
    font-size: 18px;
  }
  .el-rate {
    float: right;
    margin-left: 15px;
  }
  .el-rate__icon {
    font-size: 22px;
  }
}
</style>
<style lang="scss" scoped>
.watch-pags {
  width: 100%;
  height: 100%;

  .watch-video {
    width: 100%;
    height: 574px;
    background: #000;
    border-bottom: 6px solid #ef8201;
  }
  .video {
    width: 1010px;
    height: 100%;
    margin: 0 auto;
    background: red;
    position: relative;
  }
  .video-con {
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
    }
    video::-internal-media-controls-download-button {
      display: none;
    }
  }
  .video-btn {
    position: absolute;
    width: 68px;
    height: 120px;
    bottom: 0;
    right: -68px;
    @include imgurl("/sprite.png");
    background-position: 0 -266px;
    cursor: pointer;
  }
  .video-catalogue {
    padding: 0 20px 15px;
    display: none;
    width: 400px;
    height: 562px;
    overflow: auto;
    position: absolute;
    background: #fff;
    right: 0;
    bottom: 0;
  }
  .header {
    font-size: 24px;
    margin: 32px 0 12px;
  }
  .catalogue-con {
    width: 100%;
  }
  .courseList_box {
    padding-top: 30px;
    .chapter-title {
      border-bottom: 2px solid #e8e8e8;
      font-size: 24px;
      padding-right: 15px;
      cursor: pointer;
    }
    .list {
      li {
        line-height: 57px;
        font-size: 18px;
        padding-left: 22px;
        a {
          &:hover {
            color: #ef8200;
          }
        }
      }
    }
  }
  .watch-comment {
    width: 100%;
    height: 100%;
    border-top: 34px solid #01072b;
  }
  .comment {
    width: 1200px;
    height: 1350px;
    margin: 92px auto 52px;
    border: 1px solid #c6c6c6;
    padding: 0 20px;
    .form {
      position: relative;
      .star {
        position: absolute;
        left: 157px;
        bottom: 35px;
        height: 20px;
        line-height: 20px;
        font-size: 18px;
      }
      .login-reg {
        width: 350px;
        height: 40px;
        border: 1px solid #aaaaa8;
        border-radius: 4px;
        line-height: 40px;
        text-align: center;
        position: absolute;
        left: 405px;
        bottom: 75px;
        a {
          color: #ef8200;
        }
      }
    }
    .comment-list {
      width: 1135px;
      height: 100%;
      margin: 0 auto;
      li {
        width: 100%;
        height: 170px;
        border-bottom: 1px solid #c6c6c6;
      }
      .list-con{
        width: 900px;
        margin: 0 auto;
      }
    }
  }
}
</style>