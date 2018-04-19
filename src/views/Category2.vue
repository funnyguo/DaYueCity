<template lang="html">
<!-- 商品列表页 -->

<div class="wrap">
  
    <v-header class="header" style="background:#000;">
      <h1 slot="title" style="color: #fff;">列表页</h1>
    </v-header>
    <!-- 搜索框 -->
<div class="seek">
  <span class="el-icon-search icons"></span>
    <input type="text" placeholder="搜索你想购买的商品">
    <span class="el-icon-arrow-down icon4"></span>
    <span class="el-icon-caret-top icon5"></span>
    <span class="el-icon-caret-bottom icon6"></span>
</div>
<!-- 1 -->
<mt-navbar v-model="selected">
  <mt-tab-item id="1">综合</mt-tab-item>
  <mt-tab-item id="2">价格</mt-tab-item>
  <mt-tab-item id="3">最新</mt-tab-item>
  <mt-tab-item id="4">筛选</mt-tab-item> 
</mt-navbar>  
<!-- tab-container -->
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <p><mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <!-- <mt-cell v-for="n in 10" :title="'content ' + n" /> -->
    <div class="group">
      <div class="group-left"><img src="../../static/12.jpg" alt=""></div>
      <div class="group-right">
        <span class="zt">2018夏 新款高圆圆 同款高腰雪纺中长款碎花港味半身裙不规则印花</span>
        <div class="serve">
          <span>服务</span>
          <span>服务</span>
          <span>服务</span>
        </div>
        <div class="serve2">
          <span>￥</span>
          <span>80</span>
          <span class="el-icon-arrow-right"></span>
        </div>
      </div>
    </div>
     <!-- <div class="group">
      <div class="group-left"><img src="../../static/12.jpg" alt=""></div>
      <div class="group-right">
        <span>2018夏 新款高圆圆 同款高腰雪纺中<br>长款碎花港味半身裙不规则印花</span>
        <div class="serve">
          <span>服务</span>
          <span style="border: 1px solid green;">服务</span>
          <span>服务</span>
        </div>
        <div class="serve2">
          <span>￥</span>
          <span>80</span>
          <span>></span>
        </div>
      </div>
    </div> -->
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'content ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 4" :title="'content ' + n" />
    最新
  </mt-tab-container-item>
  <!-- 帅选 -->
  <mt-tab-container-item id="4">
    <!-- <mt-cell v-for="n in 6" :title="'content ' + n" /> -->
    <v-search2></v-search2>
  </mt-tab-container-item>
</mt-tab-container>
</p>
</van-pull-refresh>

  </div>

</template>

<script>
import Header from "@/common/_header.vue";
import Aside from "@/components/category/aside.vue";
import category from "@/http/mock.js"; //模拟数据
import search2 from "../components/index/search2.vue";
export default {
  components: {
    "v-header": Header,
    "v-aside": Aside,
    "v-search2": search2
  },

  data: function() {
    return {
      selected: "1",
      count: 0,
      isLoading: false
    };
  },
   methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/fz.less";
@import "../assets/index/style.css";
@import "../assets/user/icon/carstyle.css";

.wrap {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
  .icons {
    // border: 1px solid #000;
    position: absolute;
    top: 13px;
    left: 20px;
  }
  .icon4 {
    // border: 1px solid #000;
    position: absolute;
    right: 13px;
    top: 57px;
  }
  .icon5{
    // border: 1px solid #000;
    position: absolute;
    left: 155px;
    top: 56px;
    font-size: 10px;
  }
   .icon6{
    // border: 1px solid #000;
    position: absolute;
    font-size: 10px;
    left: 155px;
    top: 62px;
  }
  .group {
    width: 100%;
    height: 120px;
    // border: 1px solid #000;
    display: flex;
    margin-top: 5px;
    position: relative;
    background-color: #fff;
    align-items: center;
    // justify-content: center;
    .group-left {
      width: 33%;
      height: 100%;
      // border: 1px solid #000;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      > img {
        width: 90%;
        height: 90%;
        // border: 1px solid #000;
      }
    }
    .group-right {
      width: 65%;
      height: 100%;
      // border: 1px solid #000;
      position: absolute;
      right: 0;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      //  align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 5px;
      > .zt {
        border: 1px solid #fff;
        font-size: 14px;
      }
      .serve {
        // border: 1px solid #000;
        // margin-top: 15px;
        width: 200px;
        height: 35px;
        display: flex;
        align-items: center;
        > span {
          border: 1px solid #cd2a34;
          border-radius: 10px;
          display: inline-block;
          width: 40px;
          height: 15px;
          font-size: 14px;
          line-height: 15px;
          text-align: center;
          color: red;
          margin: 2px;
        }
      }
    }
  }
}
.serve2 {
  border: 1px solid #fff;
  display: flex;
  height: 22px;
  // margin-top: 18px;
  position: relative;
  color: rgb(211, 16, 16);
  > span:nth-of-type(1) {
    font-size: 11px;
  }
  > span:nth-of-type(2) {
    font-size: 18px;
    // border: 1px solid #000;
    position: absolute;
    left: 10px;
  }
  > span:nth-of-type(3) {
    font-size: 18px;
    position: absolute;
    right: 10px;
    color: #ccc;
  }
}
.car {
  width: 100%;
  padding-bottom: 14vw;
  background-color: #eee;
  h1 {
    width: 100%;
    height: 8vh;
    background: rgb(129, 123, 123);
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
    .header-icon {
      border: 0.4vw solid #ffffff;
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

      span {
        .fz(font-size, 54);
        &::before {
          color: #ffffff;
        }
      }
    }
    > span {
      margin-left: 3.2vw;
      .fz(font-size, 30);
      color: #ffffff;
      letter-spacing: 0.2vw;
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
        background-color: rgb(224, 227, 230);
      }

      .my-indent-right {
        span {
          display: inline-block;
          .fz(font-size, 28);
          color: rgba(0, 0, 0, 0.4);
          position: relative;
        }
        i {
          position: relative;
          top: 0.8vw;
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

      > a {
        display: block;
        width: 33.33%;
        color: #999;
        text-align: center;

        > span {
          .fz(font-size, 50);
          margin-top: 2.3vw;
          display: block;
          text-align: center;
        }

        p {
          padding: 2.3vw 0;
          text-align: center;
        }
      }
    }
    .my-indent2 {
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

      > a {
        display: block;
        width: 33.33%;
        color: #999;
        text-align: center;

        > span {
          .fz(font-size, 50);
          margin-top: 2.3vw;
          display: block;
          text-align: center;
        }

        p {
          padding: 2.3vw 0;
          text-align: center;
        }
      }
    }

    .my-vip,
    .my-service,
    .my-settle {
      width: 100%;
      // border: 1px solid #fff;
      background-color: #fff;
      .mt();
      .bd();
      .bt();
      > a {
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
        > div {
          -ms-flex: 2;
          -webkit-box-flex: 2;
          flex: 2;
          padding-top: 1.3vw;
        }

        .my-vip-top-div {
          padding-top: 0;
        }
        > p {
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
            top: 0.4vw;
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
.seek {
  width: 100%;
  height: 40px;
  // border: 1px solid #000;
  background-color: #eee;
  // text-align: center;
  //  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  input {
    width: 100%;
    height: 80%;
    border: 1px solid #ccc;
    // margin-top: 0.5vh;
    // margin-left: 2.5vh;
    border-radius: 5px;
    text-indent: 2em;
    font-size: 14px;
    margin-right: 10px;
  }
  .mintui-search {
    font-size: 25px;
    color: #d9d9d9;
    border: 1px solid #eee;
    position: absolute;
    left: 25px;
    top: 52px;
  }
}
.mint-navbar {
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  /* display: flex; */
  /* text-align: center; */
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid red;
  color: red;
  margin-bottom: -3px;
}
</style>
