<template lang="html">
  <div class="wrap">
     <v-header class="header" style="background:#000;">
      <h1 slot="title" style="color: #fff;
}">收藏夹</h1>
    </v-header>
   <div class="collect">
      <img src="../../static/12.jpg" alt="">
      <div class="gz2">
        <span>2018夏 新款高圆圆 同款高腰短裤蓝色裤子港味热裤不规则裤边</span>
      <span>￥</span>
      <span>80</span></div>
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

<style scoped lang=less>
.wrap {
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
}
.collect {
  /* border: 1px solid #000; */
  width: 100%;
  height: 100px;
  background-color: #fff;
  padding-left: 10px;
  margin-bottom: 5px;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 5px;
  > img {
    border: 1px solid #000;
    display: block;
    width: 28%;
    height: 90%;
  }
  .gz2 {
    /* border: 1px solid #000; */
    width: 65%;
    height: 96%;
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 15px;
    padding-top: 5px;
    display: flex;
    span:nth-of-type(2) {
      color: #cd2a34;
      font-size: 11px;
      position: absolute;
      left: 0;
      bottom: 2px;
    }
    span:nth-of-type(3) {
      color: #cd2a34;
      font-size: 18px;
      position: absolute;
      left: 10px;
      bottom: 2px;
    }
  }
}
</style>