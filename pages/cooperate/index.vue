<template>
  <div class="coo-page">
    <div class="coo-banner">
      <img src="@/assets/img/cooperate/banner.png" alt />
    </div>
    <div class="coo-from">
      <h3 class="title">合作加盟宣传语</h3>
      <el-form :model="coopForm" ref="coopForm" :rules="coopRule" class="from">
        <div class="item">
          <el-form-item prop="name">
            <div class="name">姓名：</div>
            <el-input
              type="text"
              v-model="coopForm.name"
              placeholder="请输入姓名"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </div>
        <div class="item">
          <el-form-item prop="phone">
            <div class="name">电话：</div>
            <el-input
              type="text"
              v-model="coopForm.phone"
              placeholder="请输入电话号"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </div>
        <div class="item">
          <el-form-item prop="mailbox">
            <div class="name">邮箱：</div>
            <el-input
              type="text"
              v-model="coopForm.mailbox"
              placeholder="请输入邮箱"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </div>
        <div class="item">
          <el-form-item prop="remarks">
            <div class="name">备注：</div>
            <el-input
              type="text"
              v-model="coopForm.remarks"
              placeholder="填写备注"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </div>

        <div class="txt">我方将于3个工作日内联系您</div>
        <div class="submit" @click= "onSubmit()">加盟咨询</div>
      </el-form>
    </div>
  </div>
</template>
<script>
import{isvalidPhone,isvalidMailbox} from '@/config/validate';
import {submitCooperate} from '@/api/cooperate/';

//定义一个全局变量
var validPhone= (rule,value,callback) =>{
  if(!value){
    callback(new Error('请输入电话号码'))
  }else if(!isvalidPhone(value)){
    callback(new Error('请输入正确的手机号码'))
  }else{
    callback()
  }
}
var validMailbox= (rule,value,callback) =>{
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
      coopForm: {
        name: "",
        phone: "",
        mailbox: "",
        remarks: ""
      },
      coopRule: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        phone: [{ validator: validPhone , trigger: "blur" }], //这里需要全局变量
        mailbox: [{ validator: validMailbox , trigger: "blur"}],
        remarks: [{ required: true, message: "填写备注", trigger: "blur" }]
      }
    };
  },
  methods:{
    onSubmit(){
      this.$refs.coopForm.validate( valid =>{
        if(valid){
          submitCooperate({
            name: this.coopForm.name,
            phone: this.coopForm.phone,
            mailbox: this.coopForm.mailbox,
            remarks: this.coopForm.remarks
          }).then(res => {
            this.coopForm.name = '',
            this.coopForm.phone = '',
            this.coopForm.mailbox = '',
            this.coopForm.remarks = ''
          })
        }else{
          console.log("error submit");
          return false;
        }
      })
    }
  }
};
</script>
<style lang="scss">
.coo-page {
  .el-input {
    width: 720px;
    float: left;
  }
  .el-input__inner {
    border: none;
    padding: 0;
    background-color: #e7e8ed;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
  }
  .el-form-item {
    height: 60px;
    line-height: 60px;
    background: #e7e8ed;
  }
  .name {
    line-height: 60px;
    font-size: 24px;
    float: left;
  }
}
</style>
<style lang="scss" scoped>
.coo-page {
  width: 100%;
  height: 900px;
  .coo-banner {
    width: 100%;
    height: 600px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .coo-from {
    width: 960px;
    height: 575px;
    position: relative;
    left: 50%;
    margin-left: -480px;
    top: -425px;
    .title {
      font-size: 80px;
      line-height: 80px;
      color: #ef8200;
      text-align: center;
    }
    .from {
      width: 960px;
      padding: 48px 65px 0 80px;
      height: 500px;
      background: #fff;
      border-radius: 8px;
      margin-top: 44px;
      box-shadow: 7px 7px 5px #bababa;
      font-size: 24px;
      .item {
        padding-left: 16px;
        background: #e7e8ed;
      }
      .txt {
        font-size: 18px;
        line-height: 30px;
        text-align: center;
      }
      .submit {
        width: 390px;
        height: 60px;
        background: #ef8200;
        color: #fff;
        line-height: 60px;
        text-align: center;
        border-radius: 8px;
        margin: 12px 0px 0px 206px;
        cursor: pointer;
      }
    }
  }
}
</style>