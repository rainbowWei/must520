<template>
  <ul class="floatwindow">
    <li self-key="contact">
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
    <li self-key="telephone">
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
    <li self-key="wechat">
      <div class="box">
        <div class="floatLeft">
          <div class="wc">
            <div class="title">
              <span></span>官方微信
            </div>
            <img class="ewm" :src="$imgUrl('/ewm.png')" alt="">
          </div>
        </div>
      </div>
    </li>
    <li self-key="complaint">
      <div class="box">
        <div class="floatLeft">
          <div class="from">
            <div class="title">
              <span></span>投诉建议
            </div>
            <el-form ref="complaintForm" :model="formValues">
              <div class="name">
                <input v-model="formValues.name" type="text" placeholder="姓名" id="name">
              </div>
              <div class="name">
                <input v-model="formValues.phone" type="text" placeholder="电话" id="phone">
              </div>
              <div class="suggest">
                <textarea v-model="formValues.suggest" name="" placeholder="投诉建议：" id="suggest"></textarea>
              </div>
              <!-- 对比一下此处加了防抖函数后的区别，以及两种防抖引入方式的对比 -->
              <a href="javascript:" class="submit" @click="() => debounce(onSubmit, 500)()" id="r-submit">提交</a>
              <!-- <a href="javascript:" class="submit" @click="() => $utils.debounce(onSubmit, 500)()" id="r-submit">提交</a> -->
              <!-- <a href="javascript:" class="submit" @click="onSubmit" id="r-submit">提交</a> -->
            </el-form>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import { debounce as deb } from '@/config/utils'
export default {
  data() {
    return {
      formValues: {
        name: '',     // 姓名
        phone: '',    // 电话
        suggest: '',  // 投诉建议
      }
    };
  },
  mounted() {
    console.log(this.$utils.debounce, '=====>>> 挂在原型上的工具函数使用')
  },
  methods: {
    debounce(func, delay, params) {
      return deb(func, delay, params)
    },
    onSubmit() {
      console.log(this.formValues, '提交建议的数据')
    }
  }
};
</script>
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
          width: 120px;
          height: 28px;
          padding-left: 7px;
          line-height: 28px;
          border: 1px solid #888;
          border-radius: 4px;
          margin-top: 5px;
          input {
            width: 100%;
          }
        }
        .suggest {
          width: 120px;
          height: 60px;
          padding: 4px 0 0 7px;
          border: 1px solid #888;
          border-radius: 4px;
          margin-top: 5px;
          textarea {
            width: 100%;
            height: 40px;
          }
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
    .active {
      margin-right: 10px;
    }
  }
  li:hover .floatLeft {
    margin-right: 10px;
  }
  li .box:hover .floatLeft {
    margin-right: 10px;
  }
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