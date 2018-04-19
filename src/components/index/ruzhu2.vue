<template>
  <!-- 商家入驻信息 -->
  <div class="sMessage">
    <div class="sMessage2">
      <div>店铺头像</div>
      <div class="touxiang">
        <van-uploader :after-read="onRead">
          <van-icon name="photograph" />
        </van-uploader>
        <div>添加图片</div>
      </div>
    </div>
    <div>店铺名称：<input type="text" class="iP"></div>
    <div class="sMessage2">
      <div>店铺分类:</div>
      <div class="sMessage3">

        <div>
          <select>
            <option value="&nbsp;">&nbsp;&nbsp;&nbsp;&nbsp;</option>
            <option value="" selected="selected"></option>
            <option value=""></option>
          </select>一级分类</div>

        <div>
          <select>
            <option value="">&nbsp;&nbsp;&nbsp;&nbsp;</option>
            <option value="" selected="selected"> </option>
            <option value=""></option>
          </select>二级分类</div>

        <div>
          <select>
            <option value="">&nbsp;&nbsp;&nbsp;&nbsp;</option>
            <option value="" selected="selected"> </option>
            <option value=""></option>
          </select>三级分类</div>
      </div>
    </div>
    <div>店铺联系人：<input type="text" class="iP"></div>
    <div>联系电话：<input type="text" class="iP"></div>
    <div class="sMessage4">
      <div class="dp">店铺地址:</div>
      <div class="sMessage5">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="省、市、区" name="1">
            省、市、区
          </van-collapse-item>
          <van-collapse-item title="街道" name="2">
            街道
          </van-collapse-item>
          <van-collapse-item title="详细地址" name="3">
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
  border: 1px solid #000;
  width: 100%;
  height: 100%;
  text-indent: 1em;
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
    .touxiang {
      border: 1px solid #000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-indent: 0;
      width: 80px;
      height: 100%;
      margin-left: 5px;
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
    top: 78%;
    left: 5%;
  }
}
</style>