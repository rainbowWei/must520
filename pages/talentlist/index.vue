<template>
  <div class="talent-page">
    <div class="banner">
      <img :src="$imgUrl('/banner3.jpg')" alt />
    </div>
    <div class="expert">
      <h3>
        <i></i>MUST认证专家
      </h3>
      <div class="query">
        <el-form :inline="true" :model="paramsSelect" class="demo-form-inline">
          <dl class="area">
            <el-form-item label="地区:">
              <el-select v-model="paramsSelect.region" placeholder="请选择" class="sectionStyle">
                <el-option
                  :value="area.id"
                  :label="area.area"
                  v-for="area in talentarea"
                  :key="area.id"
                ></el-option>
              </el-select>
            </el-form-item>
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
          <el-form-item>
            <el-button @click="handleinquire">查询</el-button>
          </el-form-item>
        </el-form>

        <!-- <el-form :inline="true" :model="paramsSelect" class="demo-form-inline">
          <dl class="area">
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
          </dl>
          <el-form-item label="级别">
            <el-select v-model="paramsSelect.level" placeholder="请选择">
              <el-option
                v-for="grade in talentgrade"
                :key="grade.id"
                :value="grade.id"
                :label="grade.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button  @click="handleinquire" >查询</el-button>
          </el-form-item>
        </el-form>-->
      </div>
      <div class="expertInf">
        <ul class="expert-detil">
          <li v-for="teacher in talentTeacherList" :key="teacher.id">
            <div class="expert-img">
              <img :src="teacher.cover" alt />
              <div class="expert-con">
                <div class="expert-nl clearfix">
                  <div class="name fl">
                    <p class="fl">{{teacher.name}}</p>
                    <el-button type="text" @click="dialogFormVisible = true" class="contact fl">联系我</el-button>
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
                    {{teacher.created_at | formatDate('yyyy-MM-dd')}}
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
    <el-dialog title="请填写您的联系方式" :visible.sync="dialogFormVisible">
      <el-form :model="dialogForm" :rules="dialogRule" ref="dialogForm" class="alert-from">
        <el-form-item prop="name">
          <div class="name">姓名：</div>
          <el-input
            type="text"
            v-model="dialogForm.name"
            auto-complete="off"
            placeholder="请输入姓名"
            style="float:right"
          ></el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <div class="name">手机：</div>
          <el-input
            type="text"
            v-model="dialogForm.phone"
            auto-complete="off"
            placeholder="请输入手机号码"
            style="float:right"
          ></el-input>
        </el-form-item>
        <el-form-item prop="mailbox">
          <div class="name">邮箱：</div>
          <el-input
            type="text"
            v-model="dialogForm.mailbox"
            auto-complete="off"
            placeholder="请输入邮箱"
            style="float:right"
          ></el-input>
        </el-form-item>
        <el-form-item prop="remarks">
          <div class="name">备注：</div>
          <el-input
            type="textarea"
            v-model="dialogForm.remarks"
            auto-complete="off"
            placeholder="请输入备注"
            style="float:right"
          ></el-input>
        </el-form-item>
        <div class="submit" @click="() => $utils.debounce(onSubmit,500)()">提交</div>   
        <!-- 这里的防抖函数是全局挂载到vue原型上的工具函数使用 -->
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import {
  getAreaList,
  getGradeList,
  getTeacherList,
  submitMessage
} from "@/api/talent/";
import{isvalidPhone,isvalidMailbox} from '@/config/validate';

//定义一个全局变量
const validPhone= (rule,value,callback) =>{
  if(!value){
    callback(new Error('请输入电话号码'))
  }else if(!isvalidPhone(value)){
    callback(new Error('请输入正确的手机号码'))
  }else{
    callback()
  }
}
const validMailbox= (rule,value,callback) =>{
  if(!value){
    callback(new Error('请输入邮箱'))
  }else if(!isvalidMailbox(value)){
    callback(new Error('请输入正确的邮箱'))
  }else{
    callback()
  }
}

export default {
  data() {
    return {
      talentteacher: [], //人才列表数据，带分页
      talentarea: [], //地区数据
      talentgrade: [], //级别数据
      activeKey: null, // 当前活动的窗口的下标
      pageInfo: {
        // 分页器参数
        total: 0,
        pageSize: 6,
        currentPage: 1
      },
      paramsSelect: {
        // todo  搜索表头
        region: ""
      },
      dialogFormVisible: false,
      dialogForm: {
        name: "",
        phone: "",
        mailbox: "",
        remarks: ""
      },
      dialogRule: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        phone: [{ validator: validPhone , trigger: "blur" }], //这里需要全局变量
        mailbox: [{ validator: validMailbox , trigger: "blur"}],
        remarks: [{ required: true, message: "请输入备注", trigger: "blur" }]
      }
    };
  },
  created() {
    this.handleGetTeacherList();
    this.handleGetAreaList();
    this.handleGetGradeList();
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
      // this.handleGetTeacherList(key, "", 1);   //根据状态切换认证专家级别
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
      // this.handleGetTeacherList(this.paramsSelect.level, this.paramsSelect.region, 1);
      this.handleGetTeacherList(this.activeKey, this.paramsSelect.region, 1);
    },
    //分页
    handleCurrentChange(val) {
      this.handleGetTeacherList(this.activeKey, "", val);
    },
    onSubmit() {
      this.$refs.dialogForm.validate(valid => {
        if (valid) {
          submitMessage({
            name: this.dialogForm.name,
            phone: this.dialogForm.phone,
            mailbox: this.dialogForm.mailbox,
            remarks: this.dialogForm.remarks
          }).then(res => {
            (this.dialogForm.name = ""),
              (this.dialogForm.phone = ""),
              (this.dialogForm.mailbox = ""),
              (this.dialogForm.remarks = "");
          });
        } else {
          console.log("error submit");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.el-dialog {
  width: 490px;
  height: 430px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -245px !important;
  margin-top: -215px !important;
  .el-input__inner {
    font-size: 14px !important;
  }
  .el-dialog__body {
    padding: 16px 73px 26px;
  }
  .el-dialog__headerbtn {
    width: 37px;
    height: 37px;
    @include imgurl("/sprite.png");
    background-position: -470px -230px;
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
  }
  .el-dialog__headerbtn .el-dialog__close {
    display: none;
  }
  .name {
    position: absolute;
    top: 0;
    left: -60px;
    font-size: 18px;
  }
}
.alert-from {
  margin-top: 32px;
  margin-left: 60px;
  .submit {
    width: 120px;
    height: 40px;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    margin: 20px 0 0 65px;
    background: #f78b14;
    border-radius: 8px;
    color: #ffffff;
    cursor: pointer;
  }
}
.talent-page {
  .el-input__inner,
  .el-form-item__label {
    font-size: 24px;
  }

  .el-select .el-input .el-select__caret {
    font-size: 20px;
  }
  .el-form--inline .el-form-item__label {
    float: left;
  }
  .el-button {
    width: 140px;
    height: 41px;
    background: #ef8200;
    text-align: center;
    font-size: 24px;
    padding: 0;
    color: #fff;
  }
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
          width: 200px;
          height: 100%;
          border-radius: 8px;
          font-size: 24px;
        }
      }
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