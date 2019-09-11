<template>
  <div class="coo-page">
    <div class="coo-banner">
      <img src="@/assets/img/cooperate/banner.png" alt />
    </div>
    <div class="coo-from">
      <h3 class="title">合作加盟宣传语</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="from">
        <el-form-item label="姓名：" prop="name">
          <el-input type="password" v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="电话：" prop="phone">
          <el-input type="password" v-model="ruleForm.phone" placeholder="请输入电话号"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：" prop="mailbox">
          <el-input type="password" v-model="ruleForm.mailbox" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="备注：" prop="remarks">
          <el-input type="password" v-model="ruleForm.remarks" placeholder="填写备注"></el-input>
        </el-form-item>

        <div class="txt">我方将于3个工作日内联系您</div>
        <div class="submit">加盟咨询</div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        phone: "",
        mailbox: "",
        remarks: ""
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        phone: [{ required: true, message: "请输入电话号码", trigger: "blur" }],
        mailbox: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        remarks: [{ required: true, message: "填写备注", trigger: "blur" }]
      }
    };
  }
};
</script>
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
      width: 815px;
      padding: 48px 65px 0 80px;
      height: 450px;
      background: #fff;
      border-radius: 8px;
      margin-top: 44px;
      box-shadow: 7px 7px 5px #bababa;
      font-size: 24px;
      .item {
        width: 779px;
        height: 60px;
        line-height: 60px;
        padding-left: 16px;
        margin-bottom: 10px;
        background: #e7e8ed;
      }
      input {
        width: 700px;
        height: 58px;
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