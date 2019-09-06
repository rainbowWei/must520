<template>
  <ul class="floatwindow" id="floatwindow">
    <li class="contact">
      <div class="box">
        <div class="floatLeft">
          <div class="dianhua">
            <div class="title"><span></span>在线客服</div>
            <div class="txt">工作日：9:00-18:00</div>
          </div>
          <div class="problem">
            <a href="javascript:" class="title"><span></span>常见问题>></a>
          </div>
        </div>
      </div>
    </li>
    <li class="telephone">
      <div class="box">
        <div class="floatLeft">
          <div class="phone">
            <div class="title"><span></span>联系电话</div>
            <div class="txt">010-88998855</div>
          </div>
        </div>
      </div>
    </li>
    <li class="wechat">
      <div class="box">
        <div class="floatLeft">
          <div class="wc">
            <div class="title"><span></span>官方微信</div>
            <img class="ewm" src="" alt="">
          </div>
        </div>
      </div>
    </li>
     <li class="complaint">
      <div class="box">
        <div class="floatLeft" >
          <div class="from">
            <div class="title"><span></span>投诉建议</div>
            <div class="name">
              <input type="text" placeholder="姓名" id="name">
            </div>
            <div class="name">
              <input type="text" placeholder="电话" id="phone">
            </div>
            <div class="suggest">
              <textarea name="" placeholder="投诉建议：" id="suggest"></textarea>
            </div>
            <a href="javascript:" class="submit" id="r-submit">提交</a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return{

    }
  },
  methods:{
      //  changeActive(){
      //     this.find('.floatLeft').addClass('active').siblings().removeClass('active');
      // },
      // removeActive(){
      //     this.find('.floatLeft').removeClass('active');
      // }
  }
}
</script>
<style lang="scss" scoped>
.floatwindow {
  position: fixed;
  right: 10px;
  top:50%;
  margin-top: -100px;
  width: 50px;
  height: 200px;
  z-index: 1000;
  li{
    width: 100%;
    height: 50px;
    @include imgurl("/sprite.png");
    cursor: pointer;
    position: relative;
    .box {
      position: absolute;
      right: 50px;
      top:0;
      overflow: hidden;
    }
    .floatLeft{
      height: 100%;
      color: #888;
      margin-right: -180px;
      transition: margin-right .3s;
      width: 160px;
      padding: 15px 8px 8px 8px;
      background: #fff;
      box-shadow: 2px 2px 6px #888;
      margin-bottom: 6px;
      cursor: default;
      .title{
        font-size: 14px;
        line-height: 18px;
        position: relative;
        span{
          position: absolute;
          width: 18px;
	        height: 19px;
          @include imgurl("/sprite.png");
          background-position:0px  -112px ;
          top:-2px;
          left: -24px;

        }
      }
      .txt{
        font-size: 12px;
        line-height: 12px;
        margin: 6px 0 15px 0;
      }
      .ewm{
        width: 80px;
        height: 80px;
        margin: 6px 0 0 0;
      }
      .dianhua{
        border-bottom:1px solid #888;
        padding-left: 24px;
      }
      .problem{
        margin-top: 8px;
        padding-left: 24px;
        .title{
          color: #888;
          span{
            width: 18px;
	          height: 19px;
            background-position:-18px  -112px ;
          }
        }
      }
      .phone{
        padding-left: 24px;
        .title{
          span{
            width: 18px;
	          height: 19px;
            background-position:-36px  -112px ;
          }
        }
        .txt{
          font-size: 12px;
          line-height: 12px;
          margin: 6px 0 0 0;
        }
      }
      .wc{
        padding-left: 24px;
        .title{
          span{
            width: 18px;
	          height: 19px;
            background-position:-54px  -112px ;
          }
        }

      }
      .from{
        padding-left: 24px;
        .title{
          span{
            width: 18px;
	          height: 19px;
            background-position:-72px  -112px ;
          }
         
        }
        .name{
          width: 120px;
          height: 28px;
          padding-left: 7px;
          line-height: 28px;
          border:1px solid #888;
          border-radius: 4px;
          margin-top: 5px;
          input{
            width: 75px;
            height: 100%;
          }
        }
        .suggest{
          width: 120px;
          height: 60px;
          padding:4px 0 0 7px;
          border:1px solid #888;
          border-radius: 4px;
          margin-top: 5px;
          textarea{
            width: 100%;
            height: 40px
          }
        }
        .submit{
          width: 50px;
          height: 25px;
          border:1px solid #888;
          border-radius: 4px;
          line-height: 25px;
          text-align: center;
          color: #888;
          display: block;
          margin:8px 0 0 40px;
        }
      }
      
      
    }
    .active {
      margin-right: 10px;
    }
  }
  .contact{
    background-position:0px  -50px ;
    &:hover{
      background-position:0px  0px ;
    }
  }
  .telephone{
    background-position: -50px -50px;
    &:hover{
      background-position: -50px 0px;
    }
  }
  .wechat{
    background-position: -100px -50px;
    &:hover{
      background-position: -100px 0px;
    }
  }
  .complaint{
    background-position: -150px -50px;
    &:hover{
      background-position: -150px 0px;
    }
  }
}
</style>