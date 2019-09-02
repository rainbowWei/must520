<template>
  <div class="footer">
    <div class="content">
      <div class="FriendLinks">友情链接：
        <a href="https://www.xingxiwang.net/">星希望网校 </a>
        <a href="https://www.xingxiwang.com/">星希望学校官网 </a>
      </div>
      <div class="links">
        <div class="linksL fl">
            <ul>
              <li><p>新手指南</p></li>
              <li><a href="javascript:">如何注册</a></li>
              <li><a href="javascript:">如何购买</a></li>
              <li><a href="javascript:">如何考试</a></li>
              <li><a href="javascript:">如何认证</a></li>
            </ul>
            <ul>
              <li><p>帮助中心</p></li>
              <li><a href="javascript:">找回密码</a></li>
              <li><a href="javascript:">在线支付</a></li>
              <li><a href="javascript:">发票事宜</a></li>
              <li><a href="javascript:">其他问题</a></li>
            </ul>
            <ul>
              <li><p>用户中心</p></li>
              <li><a href="javascript:">我的课程</a></li>
              <li><a href="javascript:">我的考试</a></li>
              <li><a href="javascript:">我的认证</a></li>
            </ul>
            <ul>
              <li class="fontSize14"><p>关于MUST</p></li>
              <li><a href="javascript:">联系我们</a></li>
              <li><a href="javascript:">机构加盟</a></li>
              <li><a href="javascript:">商务合作</a></li>
            </ul>
        </div>
        <div class="ewm fr">
           <div class="association fl">
             <img src="@/assets/img/ewm.png" alt="">
             <p>微信扫一扫<br/>加入社群</p>
           </div>
            <div class="xxw fl">
             <img src="@/assets/img/ewm.png" alt="">
             <p>微信扫一扫<br/>关注星希望</p>
           </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">备案号</div>
  </div>
  
</template>

<script>
// import RUserAvatar from '@/components/common/UserAvatar.vue';

export default {
  name: 'Feader',
  // components: {
  //   RUserAvatar
  // },
}
</script>
<style lang="scss" scoped>
.content{
  max-width: 1200px;
  margin: 0 auto;
}
.footer{
  width:100%;
  background: #01072a;
  color: #dedee2;
    a{
      color: #dedee2;
      &:hover{
          color: #f49211;
        }
    }
    .FriendLinks{
      width: 1150px;
      padding-left:50px;
      height: 40px;
      line-height: 40px;
      border-bottom:1px solid #646464;
      font-size: 18px;
      line-height: 36px;
    
    }
    .links{
      width: 1180px;
      height: 230px;
      padding: 40px 0 0 20px;
      .linksL{
        height: 100%;
        width: 480px;
        ul{
          float: left;
          margin: 0 20px;
          width: 80px;
          font-size: 14px;	
          line-height: 36px;
          p{
            font-size: 18px;
          }
          .fontSize14{
            p{
              font-size: 14px;
            }
          }
        }
      }
    }
    .ewm{
      div{
        width: 120px;
        margin: 0 50px;
        p{
          text-align: center;
          line-height: 21px;
          font-size: 14px;
          margin-top: 7px;
        }
      }
    }
}
.footer-bottom{
  width: 100%;
  height: 50px;
  background: #000;
  color: #b6b6b7;
  text-align: center;
  line-height: 50px;
}
</style>   



