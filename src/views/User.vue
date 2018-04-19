<template lang="html">

  <div class="car">
    <h1>会员中心</h1>
    <!-- 用户名 -->
      <header class="header"> 
        <router-link :to="{ name:'会员中心'}">      
          <div class="header-icon">
              <span class="icon2-user"></span>
              <span class="username">用户姓名</span>              
          </div>
          <!-- <span class="username">用户姓名</span> -->
          </router-link>
      </header>
      <div class="main">
        <!-- 订单信息 -->
          <router-link class="my-indent" :to="{ name:'查看全部订单'}">
              <span class="my-indent-left">订单信息</span>
              <div class="my-indent-right">
                  <span>查看全部订单</span>
                  <i class="icon-go"></i>
              </div>
          </router-link>
        <!--  -->
          <section class="my-pay">
              <router-link :to="{ name:'待付款'}">
                  <!-- <span class="icon2-money"></span> -->
                  <img src="../../img/个人中心/personal_icon_pendingpayment@2x.png" alt="">
                  <p>待付款</p>
              </router-link>
              <router-link :to="{ name: '待收货'}">
                  <!-- <span class="icon2-thecar"></span> -->
                  <img src="../../img/个人中心/personal_icon_pendingdelivery@2x.png" alt="">
                  <p>待收货</p>
              </router-link>
              <router-link :to="{ name:'待发货'}">
                  <!-- <span class="icon2-thecar"></span> -->
                   <img src="../../img/个人中心/personal_icon_goodstobereceived@2x.png" alt="">
                  <p>待发货</p>
              </router-link>
              <router-link :to="{ name: '完成'}">
                  <!-- <span class="icon2-fixed"></span> -->
                  <img src="../../img/个人中心/personal_icon_complete@2x.png" alt="">
                  <p>完成</p>
              </router-link>
          </section>
          <!-- 我的工具栏 -->
           <router-link class="my-indent2" :to="{ name: ''}">
              <span class="my-indent-left">我的工具栏</span>
          </router-link>
           <section class="my-pay2">            
              <router-link :to="{ name:'收货地址'}">
                  <!-- <span class="icon2-money"></span> -->
                  <img src="../../img/个人中心/personal_icon_rceivingaddress@2x.png" alt="">
                  <p>收货地址</p>
              </router-link>
              <router-link :to="{ name: '优惠券'}">
                  <!-- <span class="icon2-thecar"></span> -->
                   <img src="../../img/个人中心/personal_icon_coupon@2x.png" alt="">
                  <p>优惠券</p>
              </router-link>
              <router-link :to="{ name: '会员充值'}">
                  <!-- <span class="icon2-money"></span> -->
                   <img src="../../img/个人中心/personal_bg_waitingforpayment@2x.png" alt="">
                  <p>钱包</p>
              </router-link>
              <router-link :to="{ name: '购物车'}">
                  <!-- <span class="icon2-fixed"></span> -->
                   <img src="../../img/个人中心/personal_icon_collection@2x.png" alt="">
                  <p>购物车</p>
              </router-link>             
          </section>
           <section class="my-pay">             
              <router-link :to="{ name: '收藏夹'}">
                  <!-- <span class="icon2-money"></span> -->
                  <img src="../../img/个人中心/personal_icon_collection@2x.png" alt="">
                  <p>收藏夹</p>
              </router-link>
              <router-link :to="{ name: '关注'}">
                  <!-- <span class="icon2-thecar"></span> -->
                  <img src="../../img/个人中心/personal_icon_follow@2x.png" alt="">
                  <p>关注的店铺</p>
              </router-link>
              <router-link :to="{ name: ''}">
                  <!-- <span class="icon2-thecar"></span>
                  <p>待发货</p> -->
              </router-link>
              <router-link :to="{ name: ''}">
                  <!-- <span class="icon2-fixed"></span>
                  <p>完成</p> -->
              </router-link>

          </section>

      </div>
      <v-baseline></v-baseline>
      <v-footer></v-footer>
    </div>
</template>

<script>
  // import * as mockData from '@/http/mock.js' //模拟数据

  import Baseline from '@/common/_baseline.vue'
  import Footer from '@/common/_footer.vue'
  export default {
    components: {
      'v-baseline': Baseline,
      'v-footer': Footer
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/fz.less';
  @import '../assets/index/style.css';
  @import '../assets/user/icon/carstyle.css';


  .car {
    width: 100%;
    padding-bottom: 14vw;
    background-color: #eee;
    h1{
      width: 100%;
      height: 8vh;
      background: #000;
      text-align: center;
      line-height: 8vh;
      color: #fff;
      // border: 1px solid #000;
    }
    .header {
      width: 100%;
      height: 40vw;
      background: url(../../static/carbg.png) center #ff6170;
      background-size: auto 100%;
      padding: 3.2vw 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      position: relative;
      // -webkit-box-align: center;
      // -ms-flex-align: center;
      // align-items: center;
    
      .header-icon {
        border: .4vw solid #ffffff;
        background-color: @cl;
        margin-left: 6vw; 
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 14vw;
        height: 14vw;
        line-height: 16vw;
        text-align: center;
        border-radius: 50%;
        margin-top: 2vw;
        // position: relative;
        span {
          .fz(font-size, 54);          
          &::before {
            color: #ffffff;
          }
        }
          .username{
          position: absolute;
          left: 85px;
          top: 18px;
          color: #fff;
          font-size: 14px;
  }
      }
      >span {
        margin-left: 3.2vw;
        .fz(font-size, 30);
        color: #ffffff;
        letter-spacing: .2vw;
        margin-top: 7vw;
        
      }
    }
    .main {
      width: 90%;
      // border: 1px solid #000;
      margin: 0 auto;
      border-radius: 10px;
      position: relative;
      top: -80px;
      .my-indent {
        width: 100%;
        display: block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #333;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0 5vw;
        height: 15vw;
        line-height: 15vw;
        background-color: #fff;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        // border: 1px solid #000;
        margin-bottom: -1px;
        .bd();
        &:active {
          background-color: rgb(224, 227, 230)
        }

        .my-indent-right {
          span {
            display: inline-block;
            .fz(font-size, 28);
            color: rgba(0, 0, 0, .4);
            position: relative;
            
          }
          i {
            position: relative;
            top: .8vw;
          }
        }
      }

      .my-pay {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        padding: 2vw 0;
        background-color: #fff;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        // border: 1px solid #fff;
        .bd();

        >a {
          display: block;
          width: 33.33%;
          color: #999;
          text-align: center;

          >span {
            .fz(font-size, 50);
            margin-top: 2.3vw;
            display: block;
            text-align: center;
            
          }
          >img{
            width: 20px;
            height: 20px;
          }
          p {
            padding: 2.3vw 0;
            text-align: center;
          }
        }
      }
      .my-indent2{
        width: 100%;
        display: block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #333;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0 5vw;
        height: 15vw;
        line-height: 15vw;
        background-color: #fff;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        margin-top: 10px;
        // border: 1px solid #000;
        }
      .my-pay2 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        padding: 2vw 0;
        background-color: #fff;
        // border: 1px solid #000;
        // margin-top: 10px;
        // height: 30vw;
        // line-height: 30vw;
        .bd();

        >a {
          display: block;
          width: 33.33%;
          color: #999;
          text-align: center;

          >span {
            .fz(font-size, 50);
            margin-top: 2.3vw;
            display: block;
            text-align: center;
            
          }
          >img{
            width: 20px;
            height: 20px;
          }

          p {
            padding: 2.3vw 0;
            text-align: center;
          }
        }
      }

      .my-vip,.my-service,.my-settle {
        width: 100%;
        // border: 1px solid #fff;
        background-color: #fff;
        .mt();
        .bd();
        .bt();
        >a {
          background-color: #fff;
          display: block;
          width: 100%;
          display: -ms-flex;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          height: 15vw;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          -webkit-box-pack: justify;
              -ms-flex-pack: justify;
                  justify-content: space-between;
          padding: 0 6vw;
          -webkit-box-sizing: border-box;
                  box-sizing: border-box;
          &:active {
            background-color: rgb(224, 227, 230);
          }
          >div {
            -ms-flex: 2;
            -webkit-box-flex: 2;
                    flex: 2;
                    padding-top: 1.3vw;
          }

          .my-vip-top-div {
            padding-top: 0;
          }
          >p {
            -ms-flex: 10;
            -webkit-box-flex: 10;
                    flex: 10;
            position: relative;

            &:active {
              background-color: rgb(224, 227, 230);
            }

            i {
              position: absolute;
              right: 0;
              top: .4vw;
            }
          }
        }

      }
    }
  }

  /*图标大小不一，重新定义*/

  .icon-go {
    .fz(font-size, 36);
    &::before {
      color: #aba8a8;
    }
  }

  [class^="icon2-"],
  [class*=" icon2-"] {
    .fz(font-size, 50);
  }

  .icon2-service {
    .fz(font-size, 34);
  }

</style>
