<template>
  <div>
    <h2>店铺详情</h2>
    <div class="box">
      <div>
        <img src="../../../img/mall_bg_guessyoulike.png" alt="">
      </div>
      <div>
        <h1>店铺名称：店铺名称</h1>
        <span>店铺地址：广东省广州市天河区东圃大马路kfc...</span>

      </div>
    </div>
    <div class="box1">
      <h1>店铺简介</h1>
      <p>
        店铺地址广东省广州市天河区东圃大马路kfc...
        店铺地址广东省广州市天河区东圃大马路kfc...
        店铺地址广东省广州市天河区东圃大马路kfc...
      </p>
    </div>
    <div class="box1">
      联系电话：1213212212122
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style scoped lang="less">
h2 {
  width: 100%;
  height: 60px;
  background-color: #000;
  text-align: center;
  line-height: 60px;
  color: #fff;
}
.box {
  // border: 1px solid #000;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
  margin-top: 5px;
  div {
    // border: 1px solid #000;
    justify-content: center;
  }
  > div:nth-of-type(1) {
    flex-grow: 2;
    width: 40px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 80%;
      height: 90%;
      border: 1px solid #000;
      display: inline-block;
    }
  }
  > div:nth-of-type(2) {
    flex-grow: 3;
    width: 150px;
    height: 100px;
    font-size: 14px;

    > h1 {
      font-size: 16px;
      font-weight: 600;
    }
    > span {
      text-indent: 1em;
    }
  }
  .dianp {
    display: flex;
    width: 100%;
    height: 100px;
    font-size: 14px;
    justify-content: space-between;
    > span {
      display: inline-block;
      // border: 1px solid #000;
      padding-right: 10px;
    }
  }
}
.box1{
  // border: 1px solid #000;
  background-color: #fff;
  width: 100%;
  height: 100px;
  text-indent: 1em;
  padding: 10px;
  margin-top: 5px;
  >p{
    text-indent: 2em;
    width: 98%;
  }
}
</style>