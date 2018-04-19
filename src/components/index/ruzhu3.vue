<template>
  <!-- 审核通过 -->
  
  <div class="sMessage">
    <h1>恭喜！审核通过</h1>
    <div class="sMessage2">
      <div>店铺头像</div>
      <div class="touxiang">
        <!-- <van-uploader :after-read="onRead">
          <van-icon name="photograph" />
        </van-uploader> -->
        <!-- <div>添加图片</div> -->
        <img src="../../../img/mall_btn_coupon.png" alt="">
      </div>
    </div>
    <div>店铺名称：xxx服装店</div>
    <div class="sMessage2">
      <div>店铺分类:</div>
      <div class="sMessage3">

        <div>
          <select>
            <option value="服装">服装&nbsp;&nbsp;&nbsp;&nbsp;</option>
            <option value="女装" selected="selected">女装</option>
            <option value="连衣裙">连衣裙</option>
          </select>&nbsp;一级分类</div>

         <div>
          <select>
            <option value="服装">服装&nbsp;&nbsp;&nbsp;&nbsp;</option>
            <option value="女装" selected="selected">女装</option>
            <option value="连衣裙">连衣裙</option>
          </select>&nbsp;二级分类</div>

        <div>
          <select>
            <option value="服装">服装&nbsp;&nbsp;&nbsp;&nbsp;</option>
            <option value="女装" selected="selected">女装 </option>
            <option value="连衣裙">连衣裙</option>
          </select>&nbsp;三级分类</div>
      </div>
    </div>
    <div>店铺联系人：<input type="text" class="iP" placeholder="name"></div>
    <div>联系电话：<input type="text" class="iP" placeholder="phone"></div>
    <div class="sMessage4">
      <div class="dp">店铺地址:</div>
      <div class="sMessage5">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="广东省广州市天河区" name="1">
            广东省广州市天河区
          </van-collapse-item>
          <van-collapse-item title="东圃街道" name="2">
            街道
          </van-collapse-item>
          <van-collapse-item title="东圃大马路580号2006室" name="3">
            详细地址
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
    <button class="numebtn" @click="ruzhu3">提交</button>
  </div>

</template>

<script>
export default {
  methods: {
    onRead(file) {
      console.log(file);
    }
  },
  data() {
    return {
      activeNames: ['1']
    };
  },
   methods: {
    ruzhu3() {
      this.$router.push({ path: "/ruzhu3" });
    }
     }
};
</script>

<style scoped lang="less">
.sMessage {
  // border: 1px solid #000;
  width: 100%;
  height: 100%;
  text-indent: 1em;
  h1{
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: #b8dca1;
    background-color: #eee;
  }
  > div {
    // border-bottom: 1px solid #eee;
    height: 30px;
    background-color: #fff;
   margin-bottom: 2px;
   line-height: 30px;
  }
  .sMessage2 {
    // border: 1px solid #000;
    width: 100%;
    height: 90px;
    display: flex;
    background-color: #fff;
    padding-top: 5px;
    .touxiang {
      border: 1px solid #000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
       margin-left: 10px;
      >img{
        width: 100%;
        height: 100%;
       
      }
    }
  }
  // .iP{
  //   border: 1px solid #000;

  // }
  .sMessage3 {
    height: 120px;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
  }
  .sMessage4{
     width: 100%;
    height: 25%;
  display: flex;
  // justify-content: space-between;
    // border-bottom: 1px solid #000;
    background-color: #fff;
  }
  .sMessage5{
    // border: 1px solid #000;
    width: 70%;
    margin-left: 10px;
  }
  .dp{
    // border: 1px solid #000;
    padding-top: 10px;
  }
  .numebtn{
    /* border: 1px solid #000; */
    width: 90%;
    height:6%;
    color: #fff;
    background-color: #cd2a34;
    border-radius: 25px;
    position: absolute;
    top: 85%;
    left: 5%;
  }
}
</style>