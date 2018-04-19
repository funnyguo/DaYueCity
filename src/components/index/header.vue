<template lang="html">
  <!-- <mt-header> -->
  <!-- <router-link :to="{name:''}" slot="right">
    <mt-button>12332</mt-button>
  </router-link> -->
  <!-- <router-link :to="{name:''}" slot="left"> -->
     <!-- cancel-text="搜索" -->
    <!-- <mt-search v-model="value" placeholder="搜索你想购买的商品">  -->
      <!-- <span>1231</span>          -->
    <!-- </mt-search> -->
    <!-- 头部 -->
    <div class="header">
      
      <span><img src="../../../img/mall_icon_search.png" alt="" class="sou"></span>
                                                        <!-- 跳转到热点资讯 -->
      <input type="text" placeholder="搜索你想购买的商品" @click="hotspot">
      <img src="../../../img/mall_btn_ruzhu.png" alt="" class="ruzhu" @click="ruzhu">
   <!-- <router-link>
      <img src="../../../img/mall_btn_ruzhu.png" alt="" class="ruzhu">
    </router-link> -->
  </div>

</mt-header>

</template>

<script>
export default {
  value: "",
  result: "a",
  data() {
    return {
      value: "",
      result: ""
    };
  },
  created(){
    this.getlistt()
  },
  methods: {
    
    getlistt(){
      // this.$http.get("/commodity/queryShopCommodityByPage?shopId=id",{params}).then(function(res){
        // this.$http.post("/shop/queryShops",{}).then(function(res){
          
        // console.log(res)
      // })
    },
    ruzhu() {
      this.$router.push({ path: "/ruzhu" });
    },
    hotspot(){
      this.$router.push({ path: "/hotspot" });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.header {
  width: 100%;
  height: 50px;
  position: relative;
  background-color: #f2f2f2;
  input {
    width: 80%;
    height: 80%;
    // border: 1px solid #000;
    border-radius: 10px;
    background-color: #fff;
    margin-top: 3px;
    text-indent: 2.5em;
    font-size: 14px;
  }
  .sou {
    // border: 1px solid #000;
    position: absolute;
    left: 20px;
    top: 11px;
    width: 5%;
    height: 45%;
  }
  .ruzhu {
    // border: 1px solid #000;
    width: 8%;
    height: 60%;
    display: inline-block;
    position: absolute;
    right: 5%;
    margin-top: 6px;
  }
}
.mint-header {
  width: 100%;
  height: 53px;
  padding: 4.8vw;
  // border: 1px solid #000;
  background: #d9d9d9;
}
.mint-search[data-v-20bfb24f] {
  height: 8vh;
  width: 167vh;
  position: absolute;
  left: 0px;
  width: 100%;
  top: 0;
}
.mint-searchbar-inner .mintui-search {
  font-size: 28px;
  color: #d9d9d9;
}
.mint-search[data-v-20bfb24f][data-v-20bfb24f] {
  height: 10vh;
}
.bba {
  width: 50px;
  height: 50px;
  background-color: red;
}
</style>
