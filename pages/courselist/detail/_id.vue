<template>
  <div class="course-detail">
    <div class="detail-banner">
      <div class="buy-popup">
        <div class="left">
          <a href="javascript:">
            <img :src="$imgUrl('/course/banner.jpg')" alt />
          </a>
        </div>
        <div class="right">
          <div class="course-title">{{coursedetail.course_name}}</div>
          <div class="course-inf clearfix">
            <div class="speaker fl">
              <span>主讲人：</span>
              {{coursedetail.teacher_name}}
            </div>
            <div class="duration fl">
              <span>课程时长：</span>
              {{coursedetail.totlatime}}
            </div>
            <div class="price fr">￥{{coursedetail.price}}</div>
          </div>
          <div class="certificate">
            <i></i>
            <span>证书：</span>《孤独症康复教育上岗培训合格证书》
          </div>
          <div class="synopsis">
            <span>课程简介：</span>
            {{coursedetail.intro}}
          </div>
          <div class="tips">培训结束后，可以参加中国残疾人康复协会组织的孤独症康复教育上岗培训考试考试合格者获得中国残疾人康复协会承认的孤独症康复教育上岗培训合格证。</div>
          <div class="button">
            <a href="javascript:" class="audition">
              <i></i>免费试听
            </a>
            <a href="javascript:" class="buy">
              <i></i>我要购买
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="detail-con clearfix">
        <div class="catalogue">
          <div class="header">课程目录</div>
          <div class="catalogue-con">
            <div
              class="courseList_box"
              v-for="(chapter , index) of coursechapter"
              :key="chapter.id"
            >
              <div class="chapter-title clearfix" @click="chapterShrink(index)">
                <div class="tit">{{chapter.chapter_name}}</div>
                <div class="icon" ref="icon">
                  <i class="iconfont icon-jiantouxia"></i>
                </div>
              </div>
              <ul class="list" ref="childList">
                <li v-for="catalog in chapter.catalog" :key="catalog.id">
                  <nuxt-link :to="`/courseList/watch/${catalog.id}`">
                    <span class="title">{{catalog.video_name}}</span>
                    <span class="time">{{SecondToDate(catalog.video_time)}}</span>
                    <span class="study-status"></span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="lecturer">
          <div class="img-box">
            <div class="img-bg">
              <img :src="courseteacher.cover" alt />
            </div>
          </div>
          <div class="founder">
            <h3>讲师简介</h3>
            <div class="name">{{courseteacher.name}}</div>
            <div class="text" v-html="courseteacher.description"></div>
          </div>
          <div class="comment">
            <h3>课程点评</h3>
            <div class="comment-con">
              <div
                class="item clearfix"
                v-for="(comment , index) of  coursecomment.slice(0, 4)"
                :key="comment.id"
              >
                <nuxt-link :to="`/courseList/comment/${comment.id}`">
                  <div class="photo">
                    <img :src="comment.cover" alt />
                  </div>
                  <div class="text">{{comment.content}}</div>
                </nuxt-link>
                <div class="icon noStyle" @click="() => toggleLink(comment.id, index)">
                  <span>{{comment.praise}}</span>
                  <i></i>
                </div>
              </div>
            </div>
            <a href="javascript:" class="submit">我要点评</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getCourseTeacher,
  getCourseChapter,
  getCourseDetail,
  getCourseComment,
  getCommentPraise
} from "@/api/course/course";
export default {
  data() {
    return {
      courseteacher: [], //课程讲师
      coursedetail: [], //课程详情
      coursechapter: [], //课程目录带章节
      coursecomment: [], //点评列表
      praise: null //点赞数
    };
  },
  created() {
    if (process.browser) {
      this.getCourseInf();
    }
  },
  methods: {
    toggleLink(id, index) {
      getCommentPraise({ commentid: id }).then(res => {
        if (res.code === 200) {
          let comment = this.coursecomment;
          comment[index].praise++;
        }
      });
    },
    getCourseInf() {
      let str = window.location.href;
      let index = str.lastIndexOf("/");
      str = str.substring(index + 1, str.length); //截取地址栏的id值
      window.localStorage.setItem("courseId", str);
      //获取讲师信息
      getCourseTeacher({ id: str }).then(res => {
        this.courseteacher = res.data;
      });
      //获取课程详情
      getCourseDetail({ id: str }).then(res => {
        this.coursedetail = res.data;
      });
      //获取课程目录
      getCourseChapter({
        id: str,
        authKey: window.localStorage.getItem("authKey"),
        sessionId: window.localStorage.getItem("sessionId")
      }).then(res => {
        this.coursechapter = res.data;
        window.localStorage.setItem(
          "chapter",
          JSON.stringify(this.coursechapter)
        );
        console.log(res.data, "+++++++++++++++++++++");
      });
      //获取点评列表
      getCourseComment({ id: str }).then(res => {
        this.coursecomment = res.data;
      });
    },
    //课程目录的收缩
    chapterShrink(index) {
      if (this.$refs.childList[index].style.display === "none") {
        this.$refs.childList[index].style.display = "block";
        this.$refs.icon[index].style.transform = "rotateX(180deg)";
      } else {
        this.$refs.childList[index].style.display = "none";
        this.$refs.icon[index].style.transform = "rotateX(0deg)";
      }
    },
    //将秒转化成时分秒
    SecondToDate: function(msd) {
      var time = msd;

      if (null != time && "" != time) {
        if (time > 60 && time < 60 * 60) {
          time =
            parseInt(time / 60.0) +
            ":" +
            parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60);
        } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
          time =
            parseInt(time / 3600.0) +
            ":" +
            parseInt(
              (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
            ) +
            ":" +
            parseInt(
              (parseFloat(
                (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
              ) -
                parseInt(
                  (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
                )) *
                60
            );
        } else if (time >= 60 * 60 * 24) {
          time =
            parseInt(time / 3600.0 / 24) +
            ":" +
            parseInt(
              (parseFloat(time / 3600.0 / 24) - parseInt(time / 3600.0 / 24)) *
                24
            ) +
            ":" +
            parseInt(
              (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
            ) +
            ":" +
            parseInt(
              (parseFloat(
                (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
              ) -
                parseInt(
                  (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
                )) *
                60
            );
        } else {
          time = parseInt(time);
        }
      }

      return time;
    }
  }
};
</script>
<style lang="scss" scoped>
.course-detail {
  .content {
    max-width: 1200px;
    margin: 0 auto;
  }
  .detail-banner {
    width: 100%;
    height: 480px;
    @include imgurl("/course/banner.jpg");
    background-size: 100% 100%;
    position: relative;
    .buy-popup {
      width: 1168px;
      padding: 46px 50px;
      height: 392px;
      background: #fff;
      position: absolute;
      top: 180px;
      left: 50%;
      margin-left: -580px;
      box-shadow: 5px 5px 8px #b4b4b4;
    }
    .left {
      width: 544px;
      height: 305px;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      width: 490px;
      height: 100%;
      float: right;
      .course-title {
        font-size: 24px;
        line-height: 36px;
      }
      .course-inf {
        background: #01072a;
        width: 463px;
        padding: 0 18px 0 9px;
        height: 24px;
        line-height: 24px;
        margin: 10px 0 22px 0;
        font-size: 14px;
        color: #fff;
        .speaker {
          margin-right: 26px;
        }
        .price {
          font-size: 18px;
        }
      }
      .certificate {
        font-size: 18px;
        color: #ef8200;
        line-height: 36px;
        position: relative;
        text-indent: 22px;
        i {
          width: 20px;
          height: 36px;
          @include imgurl("/sprite.png");
          background-position: -570px -172px;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .synopsis {
        font-size: 12px;
        color: #646464;
        line-height: 24px;
        margin: 3px 0 14px 0;
      }
      .tips {
        font-size: 14px;
        line-height: 24px;
      }
      .button {
        height: 48px;
        margin-top: 14px;
        a {
          width: 160px;
          height: 100%;
          display: block;
          float: left;
          background: #ef8200;
          line-height: 48px;
          font-size: 18px;
          color: #fff;
          position: relative;
          text-indent: 64px;
          border-radius: 4px;
          i {
            position: absolute;
            top: 8px;
            left: 14px;
            @include imgurl("/sprite.png");
            width: 36px;
            height: 30px;
          }
        }
        .audition {
          margin: 0 40px 0 60px;
          background: #00b7e8;
          i {
            background-position: -449px -175px;
          }
        }
        .buy {
          i {
            background-position: -502px -175px;
          }
        }
      }
    }
  }
  .detail-con {
    width: 100%;
    min-height: 1600px;
    padding: 220px 0 120px;
    .catalogue {
      width: 800px;
      float: left;
      .header {
        width: 100%;
        height: 60px;
        background: #01072a;
        font-size: 24px;
        line-height: 60px;
        text-align: center;
        color: #fff;
      }
      .catalogue-con {
        width: 100%;
        padding: 0 52px 15px;
        border: 2px solid #f0f0f0;
      }
      .courseList_box {
        padding-top: 15px;
        .chapter-title {
          border-bottom: 2px solid #e8e8e8;
          font-size: 24px;
          padding-right: 15px;
          cursor: pointer;
          .tit {
            float: left;
          }
          .icon {
            float: right;
          }
        }
        .list {
          display: none;
          li {
            line-height: 57px;
            font-size: 18px;
            padding-left: 22px;
            span {
              display: inline-block;
            }
            .title {
              width: 410px;
            }
            .time {
              width: 100px;
              text-align: center;
            }
            .study-status {
              width: 120px;
            }
            a {
              &:hover {
                color: #ef8200;
              }
            }
          }
        }
      }
    }
    .lecturer {
      float: right;
      width: 384px;

      .img-box {
        width: 330px;
        height: 440px;
        background: #fff;
        box-shadow: 1px 1px 2px #b4b4b4;
        top: 0;
        left: 50%;
        margin-left: -165px;
        position: relative;
        margin-bottom: 28px;
      }
      .img-bg {
        width: 300px;
        height: 410px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -205px;
        margin-left: -150px;
        background: #ffefd5;
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
      .founder {
        line-height: 36px;
        margin-bottom: 49px;
        .name {
          font-size: 24px;
          margin-top: 7px;
        }
        .text {
          font-size: 18px;
        }
      }
      h3 {
        font-size: 30px;
        border-bottom: 3px solid #ef8200;
      }
      .comment-con {
        width: 100%;
        height: 100%;
        .item {
          width: 100%;
          height: 52px;
          margin-top: 37px;
        }
        .photo {
          width: 40px;
          height: 41px;
          float: left;
          margin: 5px 15px 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          width: 245px;
          font-size: 14px;
          line-height: 26px;
          float: left;
          @include ellipsis(2);
          overflow: hidden;
        }
        .icon {
          float: left;
          height: 100%;
          width: 60px;
          position: relative;
          cursor: pointer;
          span {
            font-size: 12px;
            line-height: 52px;
            position: absolute;
            left: 0;
            top: 0;
          }
          i {
            position: absolute;
            right: 0;
            top: 7px;
            width: 35px;
            height: 30px;
            @include imgurl("/sprite.png");
            background-position: -384px -104px;
          }
        }
        .on {
          .icon {
            span {
              color: #ef8200;
            }
            i {
              width: 35px;
              height: 30px;
              display: inline-block;
              @include imgurl("/sprite.png");
              background-position: -429px -104px;
            }
          }
        }
      }
      .submit {
        width: 100%;
        height: 50px;
        background: #ef8201;
        border-radius: 4px;
        text-align: center;
        line-height: 50px;
        color: #fff;
        display: block;
        font-size: 30px;
        margin-top: 25px;
      }
    }
  }
}
</style>

