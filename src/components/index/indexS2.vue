<template>
  <div>
    <mt-tab-container v-model="selected">
      <!-- 新品上架 -->
      <mt-tab-container-item id="1">
        <div class="boxq1">
          <p>3月20日</p>
         <div class="boxq">
            <div class="boxq_Left">
            <img src="../../../static/12.jpg" alt="">
            <p>2018新款牛仔短裤女夏季韩版牛仔短裤宽....</p>
            <p style="color:#fecd00">￥108</p>
            <button>购买</button>
          </div>
          <div class="boxq_right">
            <img src="../../../static/12.jpg" alt="">
            <p>2018新款牛仔短裤女夏季韩版牛仔短裤宽....</p>
            <button>购买</button>
            <p style="color:#fecd00">￥108</p>
          </div>
         </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selected: "1"
    };
  }
};
</script>

<style scoped lang="less">
.boxq1{
  display: flex;
  background-color: #fff;
   flex-direction: column; 
   >p{
     width: 100%;
     height: 30px;
     text-indent: 1em;
     color: #ccc;
    line-height: 30px;
    background-color: #f2f2f2;
   }
  .boxq {
  // border: 1px solid #000;
  width: 94.5%;
  height: 250px;
  display: flex;
  margin: 10px;
  justify-content: center;  
  font-size: 15px;
  > .boxq_right {
    width: 90%;
    display: flex;
     flex-direction: column; 
     position: relative;
    > img {
      width: 98%;
      height: 180px;
      margin: 2px;
    }
    >button{
      border: 1px solid #ce2a32;
      width: 50px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      border-radius: 10px;
      color: #ce2a32;
      background-color: #fff;
      position: absolute;
      right: 10px;
      bottom: 5px;
    }
  }
  > .boxq_Left{
    width: 90%;
     display: flex;
     flex-direction: column; 
     position: relative;
    > img {
      // border: 1px solid #000;
      width: 98%;
      height: 180px;
      margin: 2px;
    }
    >button{
      border: 1px solid #ce2a32;
      width: 50px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      border-radius: 10px;
      color: #ce2a32;
      background-color: #fff;
       position: absolute;
      right: 10px;
      bottom: 5px;
    }
  }
}
}
</style>