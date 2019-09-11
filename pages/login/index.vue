<template>
  <div class="login">
    <div class="login-box">
      <el-form
        :model="loginForm"
        :rules="loginRule"
        ref="loginForm"
        label-position="center"
        class="demo-ruleForm login-container"
      >
        <h3 class="title">登录</h3>
        <div class="loginInfo">
          <el-form-item prop="account">
            <div class="name">用户名：</div>
            <el-input
              type="text"
              v-model="loginForm.account"
              auto-complete="off"
              placeholder="请输入用户名"
              style="float:right"
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <div class="pass">密 码：</div>
            <el-input
              type="password"
              v-model="loginForm.checkPass"
              auto-complete="off"
              placeholder="请输入密码"
              style="float:right"
            ></el-input>
          </el-form-item>
          <div class="forget-passwd-wrap">
            <div class="left">
              <el-checkbox v-model="checked" class="remember">记住我</el-checkbox>
            </div>
            <div class="right">
              <a href="javascript:;" @click="rememberClick()" class="">忘记密码？</a>
            </div>
          </div>
          <div class="button">
            <a href="javascript:" id="login" @click="handleLogin()" :loading="logining">登录</a>
            <a href="javascript:" class="register reg-btn" @click="zcClick()">注册</a>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { Base64 } from "js-base64/base64";
import { getLogin } from "@/api/login/";
export default {
  data() {
    return {
      logining: false,
      loginForm: {
        account: "",
        checkPass: ""
      },
      loginRule: {
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: false
    };
  },
  mounted() {
    document.onkeydown = this.keyEvents;
    this.getCookie();
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.logining = true;
          let loginParams = {
            username: this.loginForm.account,
            password: Base64.encode(this.loginForm.checkPass)
          };
          getLogin(loginParams)
            .then(res => {
              this.logining = false;
              if (res.code === 200) {
                if (res.data) {
                  console.log(res.data,"++++++++++++++++++")
                  //添加cookie
                  this.setCookie();
                  //这里设置缓存存储Token
                  localStorage.setItem("authKey", res.data.authKey);
                  localStorage.setItem("sessionId", res.data.sessionId);
                  //登录成功跳到首页
                  this.$router.replace('/');
                }
              } else if (res.code === 400) {
                this.$message({
                  message: "用户名或密码输入错误",
                  type: "error"
                });
              }
            })
            .catch(error => {
              console.log(error, "self error");
            });
        } else {
          console.log("error submit");
          return false;
        }
      });
    },
    //设置cookie
    setCookie() {
      let loginCode = this.loginForm.account; //获取用户名
      let pwd = this.loginForm.checkPass; //获取登录密码
      let checked = this.checked; //获取“是否记住密码”复选框
      if (checked) {
        //判断是否选中了“记住密码”复选框
        Cookies.set("login_code", loginCode, {
          expires: 7
        });
        Cookies.set("mcpwd", Base64.encode(pwd), {
          expires: 7
        });
        Cookies.set("remberme", checked, {
          expires: 7
        });
      } else {
        Cookies.set("mcpwd", null, {
          expires: -1
        });
      }
    },

    //获取cookie
    getCookie() {
      let loginCode = Cookies.get("login_code"); //获取cookie的用户名
      let pwd = Cookies.get("mcpwd"); //获取cookie中的密码
      const remberme = Cookies.get("remberme") === "true";
      if (remberme && loginCode && pwd) {
        this.loginForm.account = loginCode;
        this.loginForm.checkPass = Base64.decode(pwd);
        this.checked = remberme;
      }
    },
    rememberClick() {
      alert("这是忘记密码页面");
    },
    zcClick() {
      this.$router.replace('/register');
    },
    //键盘监听事件
    keyEvents: function(e) {
      let theEvent = e || window.event;
      let code = theEvent.keyCode || theEvent.which || theEvent.charCode;
      if (code === 13) {
        this.handleLogin(); //具体处理函数
        return false;
      }
      return true;
    }
  }
};
</script>
<style lang="scss">
.el-form-item {
  margin-bottom: 35px;
}
.el-input,
.el-checkbox__label {
  font-size: 22px;
}
.el-checkbox {
  font-size: 18px;
}
.el-checkbox__inner {
  width: 16px;
  height: 16px;
}
</style>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 550px;
  background: #fafafa;
  .login-box {
    width: 960px;
    padding: 38px 120px 0;
    height: 512px;
    background: #fff;
    margin: 0 auto;
    position: relative;
    .name,
    .pass {
      float: left;
      position: absolute;
      top: 0;
      left: -90px;
      font-size: 22px;
    }
    h3 {
      height: 90px;
      line-height: 90px;
      font-size: 22px;
      border-bottom: 3px solid #dddddd;
    }
    .loginInfo {
      width: 384px;
      height: 384px;
      padding-top: 25px;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -140px;
      font-size: 22px;
    }
    .forget-passwd-wrap {
      height: 30px;
      line-height: 30px;
      width: 100%;
      .left {
        float: left;
        input {
          width: 14px;
          height: 14px;
          margin-right: 15px;
        }
      }
      .right {
        float: right;
      }
    }
    .button {
      width: 380px;
      height: 40px;
      margin-top: 45px;
      a {
        float: left;
        width: 180px;
        height: 100%;
        text-align: center;
        line-height: 40px;
        color: #fff;
        display: block;
        background: #ef8201;
      }
      .reg-btn {
        background: #01b7e7;
        margin-left: 20px;
      }
    }
  }
}
</style>