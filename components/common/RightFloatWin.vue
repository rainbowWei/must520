<template>
  <ul class="floatwindow">
    <li>
      <div class="box">
        <div class="floatLeft">
          <div class="dianhua">
            <div class="title">
              <span></span>在线客服
            </div>
            <div class="txt">工作日：9:00-18:00</div>
          </div>
          <div class="problem">
            <a href="javascript:" class="title">
              <span></span>常见问题>>
            </a>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="box">
        <div class="floatLeft">
          <div class="phone">
            <div class="title">
              <span></span>联系电话
            </div>
            <div class="txt">010-88998855</div>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="box">
        <div class="floatLeft">
          <div class="wc">
            <div class="title">
              <span></span>官方微信
            </div>
            <img class="ewm" :src="$imgUrl('/ewm.png')" alt />
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="box">
        <div class="floatLeft">
          <div class="from">
            <div class="title">
              <span></span>投诉建议
            </div>
            <el-form ref="suggestForm" :model="suggestForm" :rules="suggestRule">
              <div class="name">
                <el-form-item prop="name">
                  <el-input
                    v-model="suggestForm.name"
                    type="text"
                    placeholder="姓名"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="name">
                <el-form-item prop="phone">
                  <el-input
                    v-model="suggestForm.phone"
                    type="text"
                    placeholder="电话"
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="suggest">
                <el-form-item prop="suggest">
                  <el-input
                    v-model="suggestForm.suggest"
                    type="textarea"
                    placeholder="投诉建议："
                    auto-complete="off"
                  ></el-input>
                </el-form-item>
              </div>
              <a
                href="javascript:"
                class="submit"
                @click="() => debounce(onSubmit, 500)()"
                id="r-submit"
              >提交</a>
            </el-form>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import { debounce as deb } from "@/config/utils";
import { isvalidPhone } from "@/config/validate";
import { submitSuggest } from "@/api/home/home";

//定义一个全局变量
const validPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error("请输入电话号码"));
  } else if (!isvalidPhone(value)) {
    callback(new Error("请输入正确的手机号码"));
  } else {
    callback();
  }
};

export default {
  data() {
    return {
      suggestForm: {
        name: "", // 姓名
        phone: "", // 电话
        suggest: "" // 投诉建议
      },
      suggestRule: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        phone: [{ validator: validPhone, trigger: "blur" }], //这里需要全局变量
        suggest: [
          { required: true, message: "请输入投诉建议", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    debounce(func, delay, params) {
      return deb(func, delay, params);
    },
    onSubmit() {
      this.$refs.suggestForm.validate(valid => {
        if (valid) {
          submitSuggest({
            name: this.suggestForm.name,
            phone: this.suggestForm.phone,
            suggest: this.suggestForm.suggest
          }).then(res => {
            (this.suggestForm.name = ""),
            (this.suggestForm.phone = ""),
            (this.suggestForm.suggest = "");
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
.floatwindow {
  .el-input__inner {
    padding: 0 7px;
    height: 30px;
    line-height: 30px;
    border-color: #888;
  }
  .el-textarea__inner {
    padding: 0 7px;
    height: 60px;
    border-color: #888;
  }
  .el-form-item__content {
    line-height: 30px;
  }
}
</style>
<style lang="scss" scoped>
.floatwindow {
  position: fixed;
  right: 10px;
  top: 50%;
  margin-top: -100px;
  width: 50px;
  height: 200px;
  z-index: 1000;
  li {
    width: 100%;
    height: 50px;
    @include imgurl("/sprite.png");
    cursor: pointer;
    position: relative;
    .box {
      position: absolute;
      right: 50px;
      top: 0;
      overflow: hidden;
    }
    .floatLeft {
      height: 100%;
      color: #888;
      margin-right: -180px;
      transition: margin-right 0.3s;
      width: 176px;
      padding: 15px 8px 8px 8px;
      background: #fff;
      box-shadow: 2px 2px 6px #888;
      margin-bottom: 6px;
      cursor: default;
      .title {
        font-size: 14px;
        line-height: 18px;
        position: relative;
        span {
          position: absolute;
          width: 18px;
          height: 19px;
          @include imgurl("/sprite.png");
          background-position: 0px -112px;
          top: -2px;
          left: -24px;
        }
      }
      .txt {
        font-size: 12px;
        line-height: 12px;
        margin: 6px 0 15px 0;
      }
      .ewm {
        width: 80px;
        height: 80px;
        margin: 6px 0 0 0;
      }
      .dianhua {
        border-bottom: 1px solid #888;
        padding-left: 24px;
      }
      .problem {
        margin-top: 8px;
        padding-left: 24px;
        .title {
          color: #888;
          span {
            width: 18px;
            height: 19px;
            background-position: -18px -112px;
          }
        }
      }
      .phone {
        padding-left: 24px;
        .title {
          span {
            width: 18px;
            height: 19px;
            background-position: -36px -112px;
          }
        }
        .txt {
          font-size: 12px;
          line-height: 12px;
          margin: 6px 0 0 0;
        }
      }
      .wc {
        padding-left: 24px;
        .title {
          span {
            width: 18px;
            height: 19px;
            background-position: -54px -112px;
          }
        }
      }
      .from {
        padding-left: 24px;
        .title {
          span {
            width: 18px;
            height: 19px;
            background-position: -72px -112px;
          }
        }
        .name {
          margin-top: 5px;
        }
        .submit {
          width: 50px;
          height: 25px;
          border: 1px solid #888;
          border-radius: 4px;
          line-height: 25px;
          text-align: center;
          color: #888;
          display: block;
          margin: 8px 0 0 40px;
        }
      }
    }
  }
  li:hover .floatLeft {
    margin-right: 10px;
  }
  // li .box:hover .floatLeft {
  //   margin-right: 10px;
  // }
  li:nth-child(1) {
    background-position: 0px -50px;
    &:hover {
      background-position: 0px 0px;
    }
  }
  li:nth-child(2) {
    background-position: -50px -50px;
    &:hover {
      background-position: -50px 0px;
    }
  }
  li:nth-child(3) {
    background-position: -100px -50px;
    &:hover {
      background-position: -100px 0px;
    }
  }
  li:nth-child(4) {
    background-position: -150px -50px;
    &:hover {
      background-position: -150px 0px;
    }
  }
}
</style>