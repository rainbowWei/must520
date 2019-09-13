<template>
  <div class="container">
    <el-carousel class="carousel" :interval="2000" arrow="always" :autoplay="true" trigger="click">
      <el-carousel-item v-for="item in carousel" :key="item.src">
        <!-- <img :src="item.src" alt=""> -->
        <img src="@/assets/img/banner2.jpg" alt />
      </el-carousel-item>
    </el-carousel>
    <!-- MUUST介绍 -->
    <div class="must-introduction">
      <h3>MUST介绍</h3>
      <p class="text">MUST是中国第一个具有独立自主知识产权的孤独症教育体系，通过MUST资格考试的孤独症教育师可以获得中国人力资源和社会保障部认可的MUST资格认证证书。</p>
      <div class="tab clearfix">
        <ul class="tab-content fl">
          <li class="tab-txt" style="display: block;">
            <div class="tab-conL fl">M</div>
            <div class="tab-conR fl">
              <h4>MUST是什么？</h4>
              <p>MUST是一种行为引导技术，被应用于孤独症教育领域。提出孤独症训练必须是家庭与孩子共同成长的体系，不仅引导孩子从M（动机）、U（理解力）、S（技能）三大领域17个维度上得到提升，从根本上解决孤独症孩子的核心问题；还教会家长T(专业技术）</p>
            </div>
          </li>
          <li class="tab-txt">
            <div class="tab-conL fl">U</div>
            <div class="tab-conR fl">
              <h4>MUST从何而来？</h4>
              <p>MUST理论技术由著名孤独症教育专家杜佳楣女士经过20余年行为引导实践教学、10多年一线孤独症教育训练教学、5000多个案例的实际接触与分析，并结合国内外教育学、心理学、行为学创立而成。</p>
            </div>
          </li>
          <li class="tab-txt">
            <div class="tab-conL fl">S</div>
            <div class="tab-conR fl">
              <h4>MUST培训的优势</h4>
              <p>无论家长还是康复教师，通过MUST培训都会取得收获，孤独症教育理论和实操水平得到实质性的提高，并开启专业孤独症教育之路；帮助家长用更规范的方法训练，更有效的减轻孩子的病情。</p>
            </div>
          </li>
          <li class="tab-txt">
            <div class="tab-conL fl">T</div>
            <div class="tab-conR fl">
              <h4>MUST认证是什么？</h4>
              <p>MUST认证是多位国内权威孤独症治疗和康复专家，凭借多年教学经验和对孤独症教育的理解和实践，推出的孤独症教育资格认证体系，包括MUST康复师、MUST督导和MUST专家三个层次。</p>
            </div>
          </li>
        </ul>
        <ul class="tab-list fr">
          <li
            v-for="(tab,index) in tabsName"
            :key="index"
            @click="tabsSwitch(index)"
            v-bind:class="{on:tab.isActive}"
          >{{tab.name}}</li>
        </ul>
      </div>
    </div>
    <!-- MUST优势 -->
    <div class="must-goodness">
      <h3>MUST优势</h3>
      <ul class="goodness-list">
        <li class="item1">
          <h3>实操性</h3>
          <p>
            50000+家长和康复师使用的
            <br />实操技巧，即学即用
          </p>
        </li>
        <li class="item2">
          <h3>全面性</h3>
          <p>
            18个维度全面涵盖
            <br />自闭症康复的各种方法技巧
          </p>
        </li>
        <li class="item3">
          <h3>有效性</h3>
          <p>
            96%的自闭症孩子接受
            <br />MUST训练3个月内进步明显
          </p>
        </li>
        <li class="item4">
          <h3>系统性</h3>
          <p>
            8个领域进行一体化综合培养
            <br />包含评估与训练
          </p>
        </li>
        <li class="item5">
          <h3>实用性</h3>
          <p>
            5000多个案例实证过的方式
            <br />具有很强的实用性
          </p>
        </li>
      </ul>
    </div>
    <!-- 培训、考试、认证 -->
    <div class="must-serve">
      <h3>MUST最权威的培训+考试+资格认证服务</h3>
      <ul class="serve-list">
        <li class="train">
          <dl>培训</dl>
          <dt>
            <i></i>教学针对性强：
          </dt>
          <dd>分为MUST康复师、督导和专家三个能力级别，有针对性的教学</dd>
          <dt>
            <i></i>课程内容精良：
          </dt>
          <dd>著名孤独症专家杜佳楣老师授课，多维度教学以确保教学质量</dd>
          <dt>
            <i></i>上课方式灵活：
          </dt>
          <dd>在线教学，随时随地上课，课后线上答疑解惑，节约时间成本</dd>
        </li>
        <li class="exam">
          <dl>考试</dl>
          <dt>
            <i></i>报名包办：
          </dt>
          <dd>参加MUST培训者即可同步报名相对应的线上MUST资格认证考试</dd>
          <dt>
            <i></i>考前辅导：
          </dt>
          <dd>MUST考试专家组会针对报考者的各类问题进行有针对性的答疑辅导</dd>
          <dt>
            <i></i>考试方式：
          </dt>
          <dd>MUST康复师和督导可进行线上考试，MUST专家需通过线下实操考试</dd>
        </li>
        <li class="seniority">
          <dl>资格认证</dl>
          <dt>
            <i></i>提升水平：
          </dt>
          <dd>拿到MUST资格认证的康复教师和家长，教学水平将获得业内高度认可</dd>
          <dt>
            <i></i>促进就业：
          </dt>
          <dd>认证人才将被推荐到MUST人才库，获得更多的孤独症康复就业机会</dd>
          <dt>
            <i></i>职位推荐：
          </dt>
          <dd>MUST就业部与数百家孤独症康复机构有合作，不间断地输送人才</dd>
        </li>
      </ul>
    </div>
    <!-- 人才库 -->
    <div class="must-talent">
      <h3>MUST人才库</h3>
      <div
        class="swiper-box"
        v-swiper:mySwiper="swiperOption"
        @someSwiperEvent="swiperCallback"
        v-if="teacherlist.length > 0"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="teacher in teacherlist" :key="teacher.id">
            <a :href="teacher.jumpUrl">
              <div class="teacher-pho">
                <img :src="teacher.cover" alt="teacher desp" />
              </div>
              <div class="teacher-name">{{teacher.name}}</div>
              <div class="teacher-address">
                <span>{{teacher.area}}</span>
                <strong>{{teacher.gradename}}</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- MUST认证机构 -->
    <div class="must-mechanism">
      <div class="content">
        <h3>MUST认证机构</h3>
      </div>
    </div>

    <!-- 新闻资讯、信息公告 -->
    <div class="must-news">
      <div class="information fl">
        <div class="inforhead clearfix">
          <h3 class="fl">
            <i></i>
            <b>新闻资讯</b>
          </h3>
          <nuxt-link :to="`/newlist/detail/`" class="more fr">>></nuxt-link>
        </div>
        <div class="inforcon clearfix">
          <div class="leftImg fl">
            <li v-for=" article in newsarticlelist.slice(0, 1)" :key="article.id">
              <nuxt-link :to="`/newlist/detail/${article.id}`">
                <img :src="article.cover" alt />
                <h2>{{article.title}}</h2>
              </nuxt-link>
            </li>
          </div>
          <ul class="rightText fr">
            <li v-for=" article in newsarticlelist.slice(1, 9)" :key="article.id">
              <nuxt-link :to="`/newlist/detail/${article.id}`">
                <h3>{{article.title.substring(0,28)}}</h3>
                <div class="time">{{article.created_at | formatDate}}</div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="notice fl">
        <div class="noticehead clearfix">
          <h3 class="fl">
            <i></i>
            <b>信息公告</b>
          </h3>
          <nuxt-link :to="`/newlist/detail/`" class="more fr">>></nuxt-link>
        </div>
        <ul class="noticecon">
          <li v-for="notice in newsnoticelist.slice(0, 8)" :key="notice.id">
            <nuxt-link :to="`/newlist/detail/${notice.id}`">
              <h3>
                <i></i>
                {{notice.title.substring(0,28)}}
              </h3>
              <div class="time">{{notice.created_at | formatDate}}</div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getTeacherList } from "@/api/home/home";
import { getNewsArticle } from "@/api/news/";
import { formatDate } from "@/assets/js/date";
import Swiper from "swiper";
export default {
  head: {
    title: "首页",
    meta: [{ content: "xxx", name: "rainbow" }]
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: { delay: 1000 },
        loopedSlides: 2,
        slidesPerView: 4
      },
      carousel: [
        { src: "@/assets/img/banner.jpg" },
        { src: "@/assets/img/banner2.jpg" },
        { src: "@/assets/img/banner3.jpg" }
      ],
      tabsName: [
        {
          name: "MUST是什么？",
          isActive: true
        },
        {
          name: "MUST从何而来？",
          isActive: false
        },
        {
          name: "MUST培训的优势",
          isActive: false
        },
        {
          name: "MUST认证是什么？",
          isActive: false
        }
      ],
      on: false,
      teacherlist: [], //人才库列表
      newsarticlelist: [], //新闻资讯列表
      newsnoticelist: [] //信息公告列表
    };
  },
  filters: {
    formatDate(time) {
      //将时间戳转化为日期格式
      time = time * 1000;
      let date = new Date(time);
      return formatDate(date, "MM-dd");
    }
  },
  mounted() {
    this.handlegetTeacherList();
    this.handlegetNewsArticle();
    this.handlegetNewsNotice(6);
  },
  methods: {
    // swiper 回调函数
    swiperCallback(x) {
      console.log(x, "=====xx");
    },
    //选项卡切换
    tabsSwitch(tabIndex) {
      var tabCardCollection = document.querySelectorAll(".tab-txt"),
        len = tabCardCollection.length;

      for (var i = 0; i < len; i++) {
        tabCardCollection[i].style.display = "none";
        this.tabsName[i].isActive = false;
      }
      this.tabsName[tabIndex].isActive = true;
      tabCardCollection[tabIndex].style.display = "block";
    },

    //渲染人才库数据
    handlegetTeacherList() {
      getTeacherList().then(res => {
        if (res.data) {
          this.teacherlist = res.data.data;
        }
      });
    },

    //渲染新闻资讯数据
    handlegetNewsArticle() {
      getNewsArticle().then(res => {
        if (res.data) {
          this.newsarticlelist = res.data.data;
        }
      });
    },

    //渲染信息公告数据
    handlegetNewsNotice(id) {
      getNewsArticle({
        cateid: id
      }).then(res => {
        if (res.data) {
          this.newsnoticelist = res.data.data;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.container .carousel {
  .el-carousel__button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    background-color: #333;
  }
}
</style>
<style lang="scss" scoped>
.container .carousel {
  img {
    width: 100%;
    height: 100%;
  }
}
//MUST介绍
.must-introduction {
  width: 100%;
  height: 560px;
  padding-top: 40px;
  h3 {
    font-size: 34px;
    line-height: 34px;
    font-weight: bold;
    text-align: center;
  }
  .text {
    width: 1093px;
    font-size: 18px;
    line-height: 30px;
    margin: 45px auto 0;
  }
  .tab {
    height: 280px;
    width: 1120px;
    margin: 0 auto;
    margin-top: 45px;
    .tab-content {
      width: 700px;
      height: 278px;
      box-shadow: 9px 0 $primary-color, -9px 0 $primary-color;
      border-radius: 8px;
      border: 1px solid #000;
      .tab-txt {
        width: 100%;
        height: 100%;
        display: none;
      }
      .tab-conL {
        width: 240px;
        height: 100%;
        text-align: center;
        line-height: 278px;
        font-size: 181px;
        color: $primary-color;
      }
      .tab-conR {
        width: 426px;
        padding-top: 34px;
        font-size: 18px;
        line-height: 36px;
        h4 {
          font-weight: bold;
        }
      }
    }
    .tab-list {
      width: 360px;
      height: 100%;
      li {
        width: 358px;
        height: 58px;
        margin-top: 13px;
        border: 1px solid #000;
        border-radius: 4px;
        font-size: 30px;
        line-height: 60px;
        text-align: center;
        cursor: pointer;
        &:first-child {
          margin-top: 0;
        }
      }
      .on {
        background: $primary-color;
        border-color: $primary-color;
        color: #fff;
      }
    }
  }
}
//MUST优势
.must-goodness {
  width: 100%;
  height: 510px;
  padding-top: 40px;
  h3 {
    font-size: 34px;
    line-height: 34px;
    font-weight: bold;
    text-align: center;
  }
  .goodness-list {
    max-width: 1200px;
    margin: 0 auto;
    height: 280px;
    margin-top: 70px;
    @include absCenter(false);
    li {
      width: 220px;
      height: 280px;
      h3 {
        font-size: 24px;
        line-height: 24px;
        font-weight: bold;
        color: #ffffff;
        margin-top: 185px;
      }
      p {
        font-size: 14px;
        line-height: 24px;
        margin-top: 10px;
        color: #ffffff;
        text-align: center;
      }
    }
    .item1 {
      @include imgurl("/goodness.png");
    }
    .item2 {
      @include imgurl("/goodness2.png");
    }
    .item3 {
      @include imgurl("/goodness3.png");
    }
    .item4 {
      @include imgurl("/goodness4.png");
    }
    .item5 {
      @include imgurl("/goodness5.png");
    }
  }
}

//培训、考试、认证
.must-serve {
  width: 100%;
  height: 560px;
  padding-top: 40px;
  background: $primary-color;
  h3 {
    font-size: 34px;
    font-weight: bold;
    line-height: 34px;
    color: #ffffff;
    text-align: center;
  }
  .serve-list {
    max-width: 1200px;
    margin: 0 auto;
    height: 380px;
    margin-top: 64px;
    @include absCenter(false);
    li {
      width: 380px;
      height: 100%;
      border-radius: 8px;
      padding: 65px 0 0 50px;
      background: #fff;
      position: relative;
      dl {
        position: absolute;
        top: -20px;
        left: 110px;
        width: 156px;
        height: 56px;
        border: 2px solid #fff;
        border-radius: 8px;
        font-size: 34px;
        color: #fff;
        text-align: center;
        line-height: 60px;
        background: #00b7e8;
        box-shadow: 5px 5px 5px #999;
      }

      dt {
        width: 295px;
        font-size: 18px;
        line-height: 24px;
        position: relative;
        i {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #00b7e8;
          border-radius: 50%;
          top: 6px;
          left: -16px;
        }
      }
      dd {
        width: 295px;
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 28px;
      }
    }
    .exam {
      dl {
        background: #ed4f00;
      }
    }
    .seniority {
      dl {
        background: #aacc03;
      }
    }
  }
}

////MUST人才库
.must-talent {
  width: 100%;
  height: 360px;
  padding-top: 40px;
  margin: 0 auto;
  h3 {
    font-size: 34px;
    font-weight: bold;
    line-height: 34px;
    text-align: center;
    span {
      letter-spacing: 2px;
    }
  }
  .swiper-box {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .must-talent2 {
    width: 1024px;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-item {
    position: relative;
    margin-top: 26px;
  }

  .teacher-pho {
    width: 140px;
    height: 140px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .teacher-name {
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    margin-top: 170px;
  }
  .teacher-address {
    text-align: center;
    font-size: 16px;
    line-height: 27px;
    color: #646464;
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 38px;
    height: 68px;
    @include imgurl("/sprite.png");
  }
  #right {
    background-position: 0px -150px;
  }
  #left {
    background-position: -38px -150px;
  }
}
//MUST认证机构
.must-mechanism {
  width: 100%;
  height: 360px;
  padding-top: 40px;
  background: #00b7e8;
  .content {
    max-width: 1200px;
    margin: 0 auto;
  }
  h3 {
    font-size: 34px;
    font-weight: bold;
    line-height: 34px;
    text-align: center;
    color: #fff;
  }
}
//新闻资讯、信息公告
.must-news {
  max-width: 1200px;
  height: 360px;
  padding-top: 50px;
  margin: 0 auto;
  .information {
    width: 780px;
    margin-right: 59px;
    .inforhead {
      height: 31px;
      border-bottom: 2px solid #646464;
      padding-bottom: 1px;
      h3 {
        height: 100%;
        font-size: 30px;
        position: relative;
        i {
          width: 30px;
          height: 31px;
          @include imgurl("/sprite.png");
          background-position: -446px -49px;
          position: absolute;
          bottom: 1px;
          left: 0;
        }
        b {
          width: 150px;
          line-height: 30px;
          position: absolute;
          bottom: 1px;
          left: 43px;
        }
      }
      .more {
        width: 24px;
        height: 24px;
        background: #dedee2;
        display: inline-block;
        border-radius: 4px;
        text-align: center;
        line-height: 24px;
      }
    }
    .inforcon {
      width: 100%;
      height: 246px;
      .leftImg {
        margin-top: 9px;
        width: 298px;
        img {
          width: 100%;
          height: 180px;
        }
        h2 {
          font-size: 13px;
          margin-top: 16px;
        }
      }
      .rightText {
        width: 450px;
        height: 100%;
        li {
          height: 31px;
          line-height: 31px;
        }
        h3 {
          float: left;
          font-size: 13px;
        }
        .time {
          float: right;
          font-size: 13px;
        }
      }
    }
  }

  .notice {
    width: 360px;
    .noticehead {
      height: 31px;
      border-bottom: 2px solid #646464;
      padding-bottom: 1px;
      h3 {
        font-size: 30px;
        height: 100%;
        position: relative;
        i {
          width: 30px;
          height: 31px;
          @include imgurl("/sprite.png");
          background-position: -505px -49px;
          position: absolute;
          bottom: 1px;
          left: 0;
        }
        b {
          width: 150px;
          line-height: 30px;
          position: absolute;
          bottom: 1px;
          left: 40px;
        }
      }
      .more {
        width: 24px;
        height: 24px;
        background: #dedee2;
        display: inline-block;
        border-radius: 4px;
        text-align: center;
        line-height: 24px;
      }
    }
    .noticecon {
      width: 100%;
      height: 246px;
      li {
        height: 31px;
        line-height: 31px;
      }
      h3 {
        float: left;
        font-size: 13px;
        i {
          width: 17px;
          height: 16px;
          @include imgurl("/sprite.png");
          background-position: -566px -54px;
          display: inline-block;
          margin-right: 4px;
        }
      }
      .time {
        float: right;
        font-size: 13px;
      }
    }
  }
}
</style>