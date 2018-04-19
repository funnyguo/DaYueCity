<template lang="html">
<div class="wrap">
    <v-header class="header">
      <h1 slot="title">优惠券</h1>
    </v-header>
    <mt-navbar v-model="selected">
  <mt-tab-item id="1">未使用</mt-tab-item>
  <mt-tab-item id="2">已过期</mt-tab-item>
</mt-navbar>    
<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <!-- 未使用 -->
    <div class="kfc" v-for="item in kfc" :key="item.kfc">
      <div class="kfc2">
         <div class="mask">未使用</div>
        <div class="kfc3"><span style="font-size:20px">优惠券</span><br>
        <span style="font-size:25px;color:#CD2A34">{{item.amount}}</span><span class="qian">￥</span></div>
        <div class="kfc4">
          <span style=" font-size:15px">无门槛卷</span><br>
          <span style=" font-size:10px">有效期至{{item.startDate|data}}</span>
        </div>
      </div>
    </div>
  </mt-tab-container-item>
  <!-- 已过期 -->
  <mt-tab-container-item id="2">  
     <div class="kfc" v-for="item2 in kfc2" :key="item2.kfc2">
      <div class="kfc2">
         <div class="mask" style="border-color:transparent transparent #ccc;">已过期</div>
        <div class="kfc3"><span style="font-size:20px">优惠券</span><br>
        <span style="font-size:25px;color:#CD2A34">{{item2.amount}}}</span><span class="qian">￥</span></div>
        <div class="kfc4">
          <span style=" font-size:15px">无门槛卷</span><br>
          <span style=" font-size:10px">有效期至20xx/12/31</span>
        </div>
      </div>    
    </div>
  </mt-tab-container-item>
</mt-tab-container>
  </div>
</template>

<script>
import Header from "@/common/_header.vue";
import Aside from "@/components/category/aside.vue";
import category from "@/http/mock.js"; //模拟数据
// import filter from "../filter/index";
export default {
  data() {
    return {
      //定义未使用
      kfc: [],
      //定义已过期
      kfc2: [],
      selected: "1",
      filter:'',
    };
  },
  components: {
    "v-header": Header,
    "v-aside": Aside
  },
  methods: {
    //获取未使用
    getKfcet() {
      this.$http
        .get("/coupon/queryUserValidCoupon", {
          params: { page: 1, rows: 10, userId: 6 }
        })
        .then(res => {
          // console.log(res)
          var Gkfc = res.data.data;
          this.kfc = Gkfc.data.map(function(params, i) {
            return params;
          });
        });
    },
    // 已过期
    getKfcet2() {
      this.$http
        .get("/coupon/queryUserInvalidCoupon", {
          params: { page: 1, rows: 1, userId: 8 }
        })
        .then(res => {
          // console.log(res);
          var Gkfc2 = res.data.data;
          this.kfc2 = Gkfc2.data.map(function(params2, i) {
            return params2;
          });
        });
    }
  },
  created() {
    this.getKfcet();
    this.getKfcet2();
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
  // border: 1px solid #000;
  background: #eee;
  .mask {
    width: 36.5px;
    height: 0;
    border-width: 0 34px 30px 26px;
    border-style: none solid solid;
    border-color: transparent transparent #7fc84d;
    transform: rotate(48deg);
    position: absolute;
    right: -33px;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    // border: 1px solid #000;
  }
  .kfc {
    width: 90%;
    height: 100px;
    border: 1px solid #eee;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
    background-color: #fff;
    .kfc2 {
      position: absolute;
      top: 10px;
      width: 95%;
      height: 80px;
      border: 1px solid #eee;

      // margin: 0 auto;
      left: 8px;
      .kfc3 {
        width: 48%;
        height: 80%;
        // border: 1px solid #000;
        position: absolute;
        left: 15px;
        top: 10px;
        .qian {
          // border: 1px solid #000;
          color: #cd2a34;
          font-size: 13px;
          position: absolute;
          top: 25px;
          left: 30px;
        }
        .qian2 {
          color: #cd2a34;
          font-size: 13px;
          position: absolute;
          top: 25px;
          left: 45px;
        }
      }
      .kfc4 {
        width: 30%;
        height: 80%;
        // border: 1px solid #000;
        position: absolute;
        right: 5px;
        top: 20px;
      }
    }
  }
}
</style>
