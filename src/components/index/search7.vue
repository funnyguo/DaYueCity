<template>
  <div>
    <h1>用户评价</h1>
    <div class="box">
      <span><img src="../../../static/12.jpg" alt=""></span>
      <span class="span2">名字</span>
      <span class="span3">2018.04.09</span>
      <span class="span4">质量很好，很满意，下次再来</span>
    </div>
  
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="less">
h1{
  width: 100%;
  height: 60px;
  background-color: #000;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.box{
  width: 100%;
  height:100px;
  border-bottom: 1px solid #999;
  display: flex;
  //  align-items: center;
   background-color: #fff;
    // justify-content: center;
    padding: 5px 10px;
    position: relative;
  >span{
    display: inline-block;
    // border: 1px solid #000;

  }
   >span:nth-of-type(1){
    width: 60px;
    height: 60px;
   border-radius: 100%; 
   margin-right: 15px;
   border: 1px solid #000;
     >img{
    width: 100%;
    height: 100%;
    border-radius: 100%; 
  }
}
.span2{
  position: absolute;
  top: 27px;
  left: 87px;
}
.span3{
  // border: 1px solid #000;
  position: absolute;
  right: 30px;
  top: 27px;
}
.span4{
  position: absolute;
  // right: 30px;
  top: 80px;
  font-size: 15px;
  // padding-top: 5px;
}
}
</style>