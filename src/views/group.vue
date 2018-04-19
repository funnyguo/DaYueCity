<template lang="html">
<!-- 拼团商城 -->
<div class="wrap"> 
    <!-- <v-header class="header" style="background:#000;">
      <h1 slot="title" style="color: #fff;">拼团商城</h1>
    </v-header> -->
    <!-- 搜索框 -->
<div class="seek">
  <img src="../../img/mall_icon_search.png" alt="" class="se">
    <input type="text" placeholder="搜索你想购买的商品">
</div>
 <!-- v-for="item in grou2" :key="item.grou2" -->
    <mt-navbar v-model="selected">
      <!-- @click="check(item.id) -->
  <mt-tab-item id="1" selected >综合</mt-tab-item>
  <mt-tab-item id="2">女装</mt-tab-item>
  <mt-tab-item id="3">家居家装</mt-tab-item>
  <mt-tab-item id="4">数码家电</mt-tab-item>
  <mt-tab-item id="5">母婴</mt-tab-item>
  <mt-tab-item id="6">食品</mt-tab-item>
  <mt-tab-item id="7">鞋子</mt-tab-item>
</mt-navbar>   
<!-- tab-container -->

<van-list
  v-model="loading" :finished="finished"  @load="onLoad">
  <van-cell v-for="item in list" :key="item" :title="item + ''" />
  <mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <!-- <mt-cell v-for="n in 10" :title="'content ' + n" /> -->
    
      <div class="group" v-for='item in grou' :key="item.grou">
      <div class="group-left"><img :src="item.imgurl" alt=""></div>
      <div class="group-right">
        <span>{{item.commodityname}}<br></span>
        <div class="price"><span ><del>原价：{{item.originalprice}}</del></span>
        <span>已成团：{{item.numberofpeople}}人</span></div>
        <div class="price2">
          <span>团</span>
          <span>{{item.joinpeople}}人团</span>
          <span>￥</span>
          <span>{{item.groupbuyingprice}}</span>
          <span>/1件</span>
          <router-link :to="{ name:'团购商品详情'}">
            <span class="pTuan">去拼团&nbsp;&nbsp;&nbsp;></span>  
          </router-link>
        </div>
      </div>
    </div> 
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'content ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'content ' + n" />
  </mt-tab-container-item>
</mt-tab-container>

</van-list>


<!-- <button class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined" ref="loadMoreBtn" @click="getgroupList">加载更多</button> -->
  </div>
  
</template>

<script>
import Header from "@/common/_header.vue";
import Aside from "@/components/category/aside.vue";
//import category from "@/http/mock.js"; //模拟数据
export default {
  components: {
    "v-header": Header,
    "v-aside": Aside
  },
  data: function() {
    return {
    // 定义下拉刷新
      list: [],
      loading: false,
      finished: false,

      selected:"1",
      grou:[],
      grou2:[],   
      };
  },
   created(){
    this.getGroup(),
    this.getGroup2()
    // this.getgroupList();
  } , 
  methods:{
    //获取团购列表
    getGroup(id){
      // id: res.data.message.orderid 
      this.$http.post('/GroupBuying/queryGroupBuyingByClassifyId/',{classifyId:4}).then(res=>{
        console.log(res);
         var g=res.data;
         this.grou=g.data.map(function (params,i) {
           return params;
        })
      })
    },
    // check(id){
    //   this.getGroup(id)
    // },
    getGroup2(){
      this.$http.get('/commodity/classify/querythirdclassifyname',{}).then(res=>{
       var group=res.data;
        this.group2=group.data.map(function (params,i) {
          return params;
        })
      })
    }
  },
   onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
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
  background-color: #eee;
  // border: 1px solid #000;
  .group {
    width: 100%;
    height: 18vh;
    border: 1px solid #ccc;
    margin-top: 5px;
    position: relative;
    background-color: #fff;
    
    .group-left {
      width: 33%;
      height: 100%;
      // border: 1px solid #000;
      position: absolute;
      > img {
        width: 100%;
        height: 100%;
        
      }
    }
    .group-right {
      width: 65%;
      height: 95%;
      // border: 1px solid #000;
      position: absolute;
      right: 0;
      font-size: 0.8rem;
     padding-top: 10px;
      .price {
        width: 100%;
        color: #ff6170;
        // border: 1px solid #000;
        font-size: 10px;
        position: absolute;
        // left: 10px;
        top: 50px;
        > span:nth-of-type(2) {
          margin-left: 40%;
          color: #999;
        }
      }
      .price2 {
        width: 96%;
        // border: 1px solid #000;
        position: relative;
        bottom: -40%;
        background-color: #ff6170;
        color: #fff;
        border-radius: 20px;
        height: 20px;
        > span:nth-of-type(1) {
          border-right: 2px dotted #fff;
          font-size: 12px;
          // margin-left: 5px;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          display: inline-block;
          width: 10%;
          height: 100%;
          text-align: center;
        }
        > span:nth-of-type(2) {
          // border: 1px solid #000;
          font-size: 10px;
          // margin-left: 5px;
        }
        > span:nth-of-type(3) {
          // border: 1px solid #000;
          font-size: 10px;
          margin-left: 10px;
        }
        > span:nth-of-type(4) {
          // border: 1px solid #000;
          font-size: 12px;
          margin-left: -5px;
        }
        > span:nth-of-type(5) {
          // border: 1px solid #000;
          font-size: 10px;
          // margin-left: 5px;
        }
        .pTuan{
          // border: 1px solid #000;
          font-size: 12px;
          right:1px;
          background: red;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          height: 100%;
          width: 30%;
          display: inline-block;
          color: #fff;
          position: absolute;
          text-indent: 0.5em;
          line-height: 19px;
        }
      }
    }
  }
}
.se{
  // border: 1px solid #000;
 position: absolute;
 left: 5%;
 top: 25%;
 width: 5%;

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
      border: 1px solid #fff;
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
  height: 50px;
  // border: 1px solid #000;
  background-color: #eee;
//  position: fixed;
 top: 0;
 left: 0;
//  z-index: 999;
  input {
    width: 93%;
    height: 80%;
    border: 1px solid #eee;
    margin-top: 0.5vh;
    margin-left: 1.5vh;
    border-radius: 5px;
    text-indent: 2em;
    font-size: 14px;
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
