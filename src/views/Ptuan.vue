<template lang="html">
  <section class="chose">
      <div class="wap">
          <span>￥</span>
          <span>80</span>
          <span><del>￥160</del></span>
          <span>已团人数：50人</span>
          <span>开始时间：2018年3月20日&nbsp;00:00:00</span>
          <span>结束时间：2018年3月26日&nbsp;00:00:00</span>
      </div>
      <!-- 轮播图 -->
      <v-swiper></v-swiper>

    <div class="chose-view">
      <h1 class="chose-view-title">
        <!-- {{view.title}} -->
        <p>2018夏 新款高圆圆 同款高腰短裤蓝色妞子港位热裤不规则裤边
             <i class="el-icon-share share1"></i>
        </p>
         <!-- 分享图标 -->
           
        <!-- <span>(已选 {{colText}} - {{sizeText}})</span> -->
           <!-- <div> 
               <span>￥</span>
               <span>80</span>
            </div> -->
            <div class="jage"> 
                <span><del>成团人数：500人</del></span>
                <span>库存：1000件</span>
            </div>
      </h1>
      <!-- {{view.price}}元 -->
      
      <!-- {{view.intro}} -->
      <p class="chose-view-intro"></p>
    </div>
    <router-link :to="{name:'详情页'}">
    <div class="chos_fw">
        <span>服务</span>
        <span>破选包赔*7天无,无理由退货*极速发货</span>
        <span class="el-icon-arrow-right"></span>
    </div>
    </router-link>
     <router-link :to="{name:''}">
    <div class="chos_fw2">
        <span>规格</span>
        <span>请选择颜色分类</span>
        <span class="el-icon-arrow-right"></span>
    </div>
    </router-link>
    <router-link :to="{name:''}">
    <div class="chos_fw3">
        <span>用户评价(100)</span>
        <span class="el-icon-arrow-right"></span>
    </div>
    </router-link>
     <router-link :to="{name:''}">
    <div class="chos_fw4">
        <span>
            <img src="../../img/mall_btn_coupon.png" alt="">
        </span>
        <span>名字</span>
        <span>2018.03.22 &nbsp;&nbsp;02.10</span>
        <span>物流很快，货物很新鲜，口感很好，下次再来</span>
    </div>
    </router-link>
        <h1 class="chose_h1">产品详情</h1>
    </router-link>
    <v-content></v-content>
  </section>
</template>

<script>
import { MessageBox } from "mint-ui";
import { mapState } from "vuex";

import Header from "@/common/_header.vue";
import Aside from "@/components/category/aside.vue";
import swiper from "../components/detail/swiper.vue";
import content from "../components/detail/content.vue";
export default {
  data() {
    return {
    particulars:[],
    };
  },
  components: {
    "v-swiper": swiper,
    "v-content": content
  },
  computed: mapState({
    view: state => state.detail.productDatas.view,
    colSelected: state => state.detail.colSelected,
    sizeSelected: state => state.detail.sizeSelected,
    // 返回当前选择颜色的值(innerText)
    colText() {
      return this.view.chose[this.colSelected].col;
    },
    // 返回当前选择规格的值(innerText)
    sizeText() {
      return this.view.chose[this.sizeSelected].size;
    }
  }),
  methods: {
    //点击后把i赋值给colSelected,再通过判断决定是否添加选中样式 (active)
    colChose(i) {
      this.$store.commit("CHANGE_COL_SELECTED", i);
    },
    sizeChose(i) {
      this.$store.commit("CHANGE_SIZE_SELECTED", i);
    },
    
     getptuan(){
      //  params:{commodityId:1,groupbuyingId:1}
      this.$http.post('/GroupBuying/queryGroupBuyingByid',{}).then(res=>{
        console.log(res)
        var ptuan=res.data;
        this.particulars=ptuan.data.map(function (params,i) {
          return params;
        })
      })
  },
  created(){
    this.getptuan()
  }   
  }
};
</script>

<style lang="less" scoped>
@import "../assets/fz.less";

.chose-view-title {
  background-color: #fff;
  // border: 1px solid #000;
  margin-bottom: 5px;
  padding-left: 10px;
  position: relative;
  width: 100%;
  height: 70px;
  font-size: 15px;
  p {
    width: 80%;
    height: 50px;
    // border: 1px solid #000;
  }
  span:nth-of-type(1) {
    font-size: 10px;
    color: red;
    // border: 1px solid #000;
    position: absolute;
  }
  span:nth-of-type(2) {
    font-size: 20px;
    color: red;
    position: absolute;
    // border: 1px solid #000;
    width: 20%;
    left: 60px;
  }
  .jage {
    > span:nth-of-type(1) {
      // border: 1px solid #000;
      color: #ccc;
    }
    > span:nth-of-type(2) {
      // border: 1px solid #000;
      color: #999;
      font-size: 10px;
      margin-left: 240px;
    }
  }
}
// 分享
.share1 {
  color: #ccc;
  font-size: 25px;
//   border: 1px solid #000;
  position: absolute;
  top: 5px;
  right: 30px;
  z-index: 9999;
  display: inline-block;
}
.chose {
  // padding: 3vw;
  // margin: 1vw;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  position: relative;
  .chos_fw {
    // border: 1px solid #000;
    background-color: #fff;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    color: #ccc;
    padding-left: 5px;
    position: relative;
    > span:nth-of-type(2) {
      //   border: 1px solid #000;
      font-size: 14px;
      color: #999;
    }
    > span:nth-of-type(3) {
      font-size: 18px;
      //    margin-left: 50px;
      //    border: 1px solid #000;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .chos_fw2 {
    // border: 1px solid #000;
    background-color: #fff;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    color: #ccc;
    padding-left: 5px;
    margin-top: 5px;
    position: relative;
    > span:nth-of-type(2) {
      font-size: 14px;
      color: #999;
    }
    > span:nth-of-type(3) {
      font-size: 18px;
      //    margin-left: 183px;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .chos_fw3 {
    // border: 1px solid #000;
    background-color: #fff;
    margin-top: 5px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    position: relative;
    // color:#ccc;
    padding-left: 5px;
    > span:nth-of-type(2) {
      //   border: 1px solid #000;
      font-size: 18px;
      color: #ccc;
      // margin-left: 210px;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .chos_fw4 {
    width: 100%;
    height: 100px;
    border: 1px solid #eee;
    background-color: #fff;
    position: relative;
    > span:nth-of-type(1) {
      display: inline-block;
      width: 50px;
      height: 50px;
      // border: 1px solid #000;
      border-radius: 30px;
      margin-left: 10px;
      margin-top: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    > span:nth-of-type(3) {
      // border: 1px solid red;
      font-size: 14px;
      position: absolute;
      right: 5px;
      top: 23px;
    }
    > span:nth-of-type(4) {
      // border: 1px solid #000;
      position: absolute;
      top: 70px;
      width: 100%;
      left: 10px;
      font-size: 12px;
    }
  }
  .chose_h1 {
    // border: 1px solid #000;
    background-color: #fff;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-indent: 1em;
    margin-top: 5px;
  }
  .wap {
    width: 100%;
    height: 50px;
    // border: 1px solid #000;
    position: absolute;
    top: 318px;
    background-color: #c7343c;
    opacity: 0.9;
    color: #fff;
    padding-left: 10px;
    padding-top: 5px;
    z-index: 999;
    > span:nth-of-type(1) {
      // border: 1px solid #000;
      font-size: 10px;
    }
    > span:nth-of-type(2) {
      // border: 1px solid #000;
      margin-left: -5px;
    }
    > span:nth-of-type(3) {
      // border: 1px solid #000;
      font-size: 8px;
      margin-left: 2px;
    }
    > span:nth-of-type(4) {
      // border: 1px solid #000;
      font-size: 11px;
      margin-left: 2px;
      position: absolute;
      top: 25px;
      left: 10px;
    }
    > span:nth-of-type(5) {
      // border: 1px solid #000;
      font-size: 10px;
      // margin-left: 2px;
      position: absolute;
      top: 10px;
      right: 20px;
    }
    > span:nth-of-type(6) {
      // border: 1px solid #000;
      font-size: 10px;
      // margin-left: 2px;
      position: absolute;
      top: 25px;
      // left: 20px;
      right: 20px;
    }
  }
}
.swiper[data-v-d5444a3e] {
  width: 100%;
  /* position: relative; */
}
</style>
