<template>
  <el-dialog title="请填写您的联系方式" :visible.sync="dialogFormVisible">
      <el-form :model="dialogForm" :rules="dialogRule" ref="dialogForm">
        <div class="alert-from">
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
              type="number"
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
          <div class="submit" @click="onSubmit()">提交</div>
        </div>
      </el-form>
    </el-dialog>
</template>

<script>
import axios from '@/config/axios'
export default { 
  name: 'Dialog',
   data() {  
    return {
     dialogFormVisible: false,
      dialogForm: {
        name: "",
        phone: "",
        mailbox: "",
        remarks: ""
      },
      dialogRule: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        phone: [{ required: true, message: "请输入手机号码", trigger: "blur" }],
        mailbox: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        remarks: [{ required: true, message: "请输入备注", trigger: "blur" }]
      }
    }
  },
   methods: {
    onSubmit() {
      this.$refs.dialogForm.validate(valid => {
        if (valid) {
         axios({
            method: 'get',
            url: '/messageBoard',
            data: {
              name: this.dialogForm.name,
              phone: this.dialogForm.phone,
              mailbox: this.dialogForm.mailbox,
              remarks: this.dialogForm.remarks,
            }
        })
        }else {
          console.log('error submit');
          return false;
        }
      });
    }
  },
}
</script>
<style lang="scss">
.alertbox{
  .el-input__inner {
    font-size: 14px !important;
  }
  .name{
    position: absolute;
    top: 0;
    left: -60px;
    font-size: 18px;
  }
}
</style>
<style lang="scss" scoped>


 //弹窗
  #shelter{
    // display:none;
    position:fixed;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    background-color:black;
    opacity:0.6;
    z-index:1001;
  }
  .alertbox{
    // display: none;
    width: 490px;
    height: 410px;
    padding: 16px 73px 26px;
    background: #fff;
    border:5px solid #d5d3cf;
    position: fixed;
    top:50%;
    left: 50%;
    z-index:1002;
    margin-top: -205px;
    margin-left: -245px;
    border-radius: 8px;
    .alert-title{
      font-size: 18px;
      line-height: 24px;
      color: #646464;
    }
    .alert-close{
      width: 37px;
      height: 37px;
      @include imgurl("/sprite.png");
      background-position: -470px -230px;
      position: absolute;
      top:10px;
      right: 20px;
      cursor: pointer;
    }
    .alert-from {
      margin-top: 32px;
      margin-left: 60px;
      .submit{
        width: 120px;
        height: 40px;
        font-size: 24px;
        line-height: 40px;
        text-align: center;
        margin: 20px 0 0 65px;
        background: #f78b14;
        border-radius: 8px;
        color: #ffffff;
      }
    }
  }
</style>