<template lang="html">
  <div class="wrap">
     <v-header class="header" style="background:#000;">
      <h1 slot="title" style="color: #fff;">关注的店铺</h1>
    </v-header>

    <div class="gz">
      <img src="../../img/mall_bg_brand.png" alt="">
      <span>店铺名称店铺是的但是vdsvcx</span>
      <button>取消关注</button>
    </div>
    <div class="gz">
      <img src="../../img/mall_bg_brand.png" alt="">
      <span>店铺名称店铺是的但是vdsvcx</span>
      <button>取消关注</button>
    </div>
  </div>
</template>

<script>
import Header from "@/common/_header.vue";
import Aside from "@/components/category/aside.vue";
export default {
  components: {
    "v-header": Header,
    "v-aside": Aside
  }
};
</script>

<style scoped lang="less">
  .gz{
    /* border: 1px solid #000; */
    width: 100%;
    height: 65px;
    line-height: 65px;
    background-color: #fff;
    padding-left: 10px;
    margin-bottom: 5px;
     display: flex;
  justify-content: center;
  // align-items: center;
     font-size: 12px;
     span{
      //  border: 1px solid #000;
       flex: 3;
     }
    img{
      /* border: 1px solid #000; */
      width: 45px;
      height: 45px;
      border-radius: 25px;
      display: inline-block;
      flex: 1;
     margin-top: 5px;
     margin-right: 5px;
    }
    button{
      /* border: 1px solid #000; */
      width:30%;
      height: 100%;
      background-color: #cd2a34;
      color: #fff;
      flex: 2;
      font-size: 14px;
  
    }
  }
</style>