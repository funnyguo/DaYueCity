<template>
  <div>
    <h1>店铺首页</h1>
    <div class="boxx">
    <div class="box">
      <span>
        <img src="../../../static/12.jpg" alt="">
      </span>
      <span>
        <p>店铺名称</p>
        <p style=" font-size: 12px;">店铺地址：广东省广州市天河区东圃大马路kfc..</p>
      </span>
      <span class="inconX">
        <!-- 心心图标 -->
        <van-icon name="like-o"  class="like"/>
        <button name="like-o">关注</button>
      </span>
    </div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全部商品</mt-tab-item>
      <span class="su">|</span>
      <mt-tab-item id="2">新品上架</mt-tab-item>
      <span class="su">|</span>
      <mt-tab-item id="3">店铺二维码</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <!-- 全部商品 -->
      <mt-tab-container-item id="1">
        <v-indexS1></v-indexS1>
      </mt-tab-container-item>
      <!-- 新品上架 -->
      <mt-tab-container-item id="2">
        <!-- <mt-cell v-for="n in 4" :title="'content ' + n" /> -->
        <v-indexS2></v-indexS2>
      </mt-tab-container-item>
      <!-- 二维码 -->
      <mt-tab-container-item id="3">
        <div class="boxE">
          <img src="../../../static/码.jpg" alt="">
          <p>手机微信扫一扫</p>
        </div>

      </mt-tab-container-item>
    </mt-tab-container>
  </div>
  </div>
</template>

<script>
import indexS1 from './indexS1.vue'
import indexS2 from './indexS2.vue'
export default {
  data: function() {
    return {
      selected: "1",
    };
  },
  // 定义组件（新品上架）
  components: {
    "v-indexS1": indexS1,
     "v-indexS2": indexS2,
  
  }
};
</script>

<style scoped lang="less">
h1 {
  width: 100%;
  height: 60px;
  background-color: #000;
  text-align: center;
  color: #fff;
  line-height: 60px;
}
.box {
  white-space: 100%;
  height: 120px;
  border: 1px solid #fff;
  border-bottom: 1px solid #ccc;
  display: flex;
  background-color: #f77076;
  font-size: 14px;
  color: #fff;
  align-items: center;
  position: relative;
  .inconX{
    // border: 1px solid #000;
    display: inline-block;
    display: flex;
    width: 80PX;
    height: 20PX;
    position: absolute;
    bottom: 0;
    right: 0;
    >button{
      // border: 1px solid #000;
      width: 75px;
      height: 20px;
      background-color: #fecd00;
      border-radius: 5px;
       color: #fff;
       text-indent: 1em;
    }
    >.like{
      position: absolute;
      left: 20px;
      top: 14px;
     color: #fff;
    }
  }
  > span {
    display: inline-block;
    // border: 1px solid #000;
    flex-grow: 1;
    padding: 10px;
    > img {
      width: 100px;
      height: 100px;
      border-radius: 5px;
    }
  }
}

.boxE {
  border: 1px solid #000;
  width: 100%;
  height: 500px;
  // height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding-top:10px;
  flex-direction: column;
  background-color: #f2f2f2;
  > img {
    width: 200px;
    height: 200px;
  }
  > p {
    width: 200px;
    height: 30px;
    // border: 1px solid #000;
    text-align: center;
    color: #000;
    line-height: 30px;
   
  }
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: none;
  color: #000;
  margin-bottom: -3px;
}
.su {
  font-size: 30px;
  //  border: 1px solid #000;
  line-height: 40px;
  color: #eee;
}
</style>