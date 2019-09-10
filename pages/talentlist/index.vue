<template>
  <div class="talent-page">
    <div class="banner">
      <img src="@/assets/img/banner3.jpg" alt="">
    </div>
    <div class="expert">
      <h3>
        <i></i>MUST认证专家
      </h3>
      <div class="query">
        <!-- <dl class="area">
          <dt>地区：</dt>
          <dd>
            <el-form :model="selectForm" ref="selectForm">
              
            </el-form>
          </dd>
        </dl>
        <dl class="level">
          <dt>级别：</dt>
          <dd
            v-for="grade in talentgrade"
            :key="grade.id"
            :class="activeKey === grade.id ? 'on' : '' "
            @click="() => handleTabs(grade.id)"
          >{{grade.name}}</dd>
        </dl>
        <dl class="inquiry" @click="handleinquire()">查询</dl>-->


        <el-form :inline="true" :model="paramsSelect" class="demo-form-inline">
          <el-form-item label="地区">
            <el-select v-model="paramsSelect.region" placeholder="请选择" class="sectionStyle">
              <el-option
                :value="area.id"
                :label="area.area"
                v-for="area in talentarea"
                :key="area.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="级别">
            <el-select v-model="paramsSelect.level" placeholder="请选择">
              <el-option
                v-for="grade in talentgrade"
                :key="grade.id"
                :value="grade.id"
                :label="grade.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleinquire111">查询</el-button>
          </el-form-item>
        </el-form>


      </div>
      <div class="expertInf">
        <ul class="expert-detil">
          <li v-for="teacher in talentTeacherList" :key="teacher.id">
            <div class="expert-img">
              <img :src="teacher.cover" alt="">
              <div class="expert-con">
                <div class="expert-nl clearfix">
                  <div class="name fl">
                    <p class="fl">{{teacher.name}}</p>
                    <div class="contact fl">联系我</div>
                  </div>
                  <div class="level fl">{{teacher.gradename}}</div>
                </div>
                <div class="synopsis">
                  <span>简介：</span>
                  {{teacher.abstract.substring(0,45)}}
                </div>
                <div class="expert-at clearfix">
                  <div class="address fl">
                    <span>地区：</span>
                    {{teacher.area}}
                  </div>
                  <div class="time fr">
                    <span>认证时间：</span>
                    {{teacher.created_at | formatDate}}
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <el-pagination
      v-show="talentListPageInfo.total > talentListPageInfo.pageSize"
      class="pagination"
      @current-change="handleCurrentChange"
      :current-page="talentListPageInfo.currentPage"
      :page-size="talentListPageInfo.pageSize"
      layout="slot, prev, pager, next"
      :total="talentListPageInfo.total"
      :background="true"
    >
      <slot>
        <span class="total">共{{talentListPageInfo.total}}条</span>
      </slot>
      <slot>
        <span class="current">第{{talentListPageInfo.currentPage}}页</span>
      </slot>
    </el-pagination>
  </div>
</template>
<script>
import { getAreaList, getGradeList, getTeacherList } from "@/api/talent/";
import { formatDate } from "@/assets/js/date";
export default {
  data() {
    return {
      talentteacher: [], //人才列表数据，带分页
      talentarea: [], //地区数据
      talentgrade: [], //级别数据
      activeKey: null, // 当前活动的窗口的下标
      areaKey: "",
      weekse: "",
      ite: "",
      pageInfo: {
        // 分页器参数
        total: 0,
        pageSize: 6,
        currentPage: 1
      },
      paramsSelect: { // todo  搜索表头
        region: '',
        level: ''
      }
    };
  },
  filters: {
    formatDate(time) {
      //将时间戳转化为日期格式
      time = time * 1000;
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  created() {
    this.handleGetTeacherList();
    this.handleGetAreaList();
    this.handleGetGradeList();
    this.handleinquire();
  },
  //监听select内容
  watch: {
    ite: function(val) {
      this.weekse = val;
    }
  },
  computed: {
    //人才列表数据
    talentTeacherList() {
      return this.talentteacher.data || [];
    },
    //人才列表的分页信息
    talentListPageInfo() {
      const talentteacher = this.talentteacher;
      const pageInfo = {
        total: talentteacher.total,
        pageSize: talentteacher.per_page,
        currentPage: talentteacher.current_page
      };
      return pageInfo;
    }
  },
  methods: {
    handleTabs(key) {
      this.activeKey = key;
      this.handleGetTeacherList(key, "", 1);
    },
    //获取并渲染人才列表数据
    handleGetTeacherList(id, areaId, page) {
      getTeacherList({
        gradeid: id,
        areaid: areaId,
        page: page || 1
      }).then(res => {
        if (res.data) {
          this.talentteacher = res.data;
        }
      });
    },
    //获取并渲染地区列表数据
    handleGetAreaList() {
      getAreaList().then(res => {
        if (res.data) {
          this.talentarea = res.data;
        }
      });
    },
    //获取并渲染教师级别列表数据
    handleGetGradeList() {
      getGradeList().then(res => {
        if (res.data) {
          this.talentgrade = res.data;
        }
      });
    },
    //点击查询
    handleinquire() {
      this.handleGetTeacherList(this.activeKey, 1);
    },
    handleinquire111() {  //   todo  
      console.log('=======>>> 查询哦, 这儿这个就是你要查询传递的参数, 看看对不对', this.paramsSelect)
      // 我看你接口要的字段是 gradeid 和 areaid  , 你在这儿也可以命名成这两个噻
      // this.paramsSelect = { gradeid: 'xxx', areaid: 'xxx'}
      // 用的时候就可以直接 {...this.paramsSelect} 了,方便一些
      // this.handleGetTeacherList(this.paramsSelect.gradeid, this.paramsSelect.areaid, 1);
      this.handleGetTeacherList(this.paramsSelect.level, this.paramsSelect.region, 1);
    },
    //分页
    handleCurrentChange(val) {
      this.handleGetTeacherList(this.activeKey, "", val);
    }
  }
};
</script>
<style lang="scss">
.el-input__inner {
  font-size: 24px;
}
.el-select .el-input .el-select__caret {
  font-size: 20px;
}
</style>
<style lang="scss" scoped>
.talent-page {
  padding-bottom: 50px;
  .banner {
    width: 100%;
    height: 380px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  //MUST认证专家
  .expert {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    h3 {
      height: 41px;
      line-height: 41px;
      font-size: 34px;
      color: #ef8200;
      position: relative;
      margin: 45px 0 40px;
      text-indent: 52px;

      i {
        width: 41px;
        height: 42px;
        @include imgurl("/sprite.png");
        background-position: -297px -168px;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .query {
      width: 100%;
      height: 42px;
      font-size: 24px;
      margin-bottom: 59px;
      dl {
        float: left;
        line-height: 42px;
        dt {
          float: left;
        }
        dd {
          float: left;
          height: 40px;
          line-height: 40px;
          border-radius: 8px;
        }
        .sectionStyle {
          border: 1px solid #f3f4f6;
          width: 200px;
          height: 100%;
          border-radius: 8px;
          font-size: 24px;
        }
      }
      // select {
      //   /*取消默认箭头开始*/
      //   appearance: none;
      //   -moz-appearance: none;
      //   -webkit-appearance: none;
      //   /*取消默认箭头结束*/
      //   text-align-last: center; /* 文本居中*/
      //   @include imgurl("/sprite.png");
      //   background-position: -510px -230px;
      // }

      .area {
        margin: 0 60px 0 20px;
      }
      .level {
        dd {
          width: 140px;
          border: 1px solid #e7e8ed;
          margin-right: 49px;
          text-align: center;
          cursor: pointer;
        }
        .on {
          background: #e7e8ed;
        }
      }
      .inquiry {
        width: 140px;
        height: 41px;
        background: #ef8200;
        line-height: 41px;
        text-align: center;
        border-radius: 8px;
        a {
          width: 100%;
          height: 100%;
          display: inline-block;
          color: #fff;
        }
      }
    }
    .expertInf {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .expert-detil {
      width: 1215px;
      height: 100%;
      padding-bottom: 60px;
      li {
        width: 390px;
        height: 440px;
        background: #eee;
        float: left;
        margin: 0 15px 30px 0;
        .expert-img {
          width: 100%;
          height: 280px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .expert-con {
          width: 370px;
          padding: 0 10px;
          height: 160px;
          .expert-nl {
            font-size: 24px;
            height: 64px;
            line-height: 64px;

            .name {
              margin-right: 75px;
              position: relative;
              height: 100%;

              .contact {
                width: 68px;
                height: 27px;
                @include imgurl("/sprite.png");
                background-position: -355px -176px;
                margin: 18px 0 0 5px;
                font-size: 14px;
                color: #fff;
                text-align: center;
                line-height: 27px;
                cursor: pointer;
              }
            }
          }
          .synopsis {
            font-size: 12px;
            line-height: 24px;
            color: #646464;
          }
          .expert-at {
            font-size: 12px;
            line-height: 12px;
            color: #646464;
            margin-top: 20px;
            .time {
              margin-left: 40px;
            }
          }
        }
      }
    }
    .demo {
      text-align: center;
      margin-bottom: 40px;
    }
  }
  .pagination {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 45px;
    .total,
    .current {
      margin-right: 8px;
    }
  }
}
</style>