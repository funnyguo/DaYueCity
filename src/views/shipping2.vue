<template>
  <div>
    <h1>收货地址</h1>
    <div class="box">
      <div>收货人姓名:<input type="text"></div>
      <div>手&nbsp;&nbsp;&nbsp;&nbsp;机&nbsp;&nbsp;&nbsp;号:<input type="text"></div>
      <div>省、市、区:<input type="text"><span class="el-icon-arrow-right icon1"></span></div>
      <div>
        <span class="el-icon-arrow-right icon2"></span>
        街&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;道:<input type="text"></div>
      <div>&nbsp;详&nbsp;细&nbsp;地&nbsp;址:<input type="text"></div>
    </div>
    <div class="box2">
      <button>确认修改</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
h1 {
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #fff;
  background-color: #000;
}
.box {
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
   background-color: #fff;
  // padding-left: 10px;
  text-indent: 1em;
  >div{
    border-bottom: 1px solid #ccc;
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: relative;
    >input{
      width:70%;
      // height: 100%;
      // border: 1px solid #000;
     position: absolute;
    }
  }
  .icon1{
  //  border: 1px solid #000; 
    position: absolute;
    right: 10px;
    top: 26%;
    font-size: 18px;
    color: #ccc;
  }
   .icon2{
  //  border: 1px solid #000; 
    position: absolute;position: absolute;
    right: 10px;
    top: 36%;
    font-size: 18px;
    color: #ccc;
    z-index: 999;
  }
}
.box2{
  // border: 1px solid #000;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  >button{
    width: 90%;
    height: 80%;
    background-color: #cd2a34;
    color: #fff;
    border-radius: 25px;
  }
}
</style>