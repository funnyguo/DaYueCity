<template lang="html">
<!-- 拼团商城 -->
<div class="wrap"> 
    <v-header class="header" style="background:#000;">
      <h1 slot="title" style="color: #fff;"></h1>
    </v-header>
    <h2>用户协议</h2>
    <p>一、总则</p>
    <p>二、服务内容</p>
    <p>三、用户账号</p>
    <p>四、使用规则</p>
    <p>五、隐私保护</p>
    <p>六、责任声明</p>
    <label class="mint-checklist-label">
              <span class="mint-checkbox"><input type="checkbox" class="mint-checkbox-input" value="选项A">
                <span class="mint-checkbox-core"></span>
              </span>
              <span class="mint-checkbox-label">我已阅读并同意《用户协议》</span>
            </label>
         <button class="numebtn" @click="ruzhu2">同意，下一步</button>

  </div>

</template>

<script>
import Header from "@/common/_header.vue";
import Aside from "@/components/category/aside.vue";
export default {
  components: {
    "v-header": Header,
    "v-aside": Aside
  },
     methods: {
    ruzhu2() {
      this.$router.push({ path: "/ruzhu2" });
    }
     }
};
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .header {
    height: 60px;
  }
  h2 {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    // border: 1px solid #000;
    font-weight: 900;
  }
  p {
    width: 100%;
    height: 30px;
    padding-left: 10px;
    font-size: 14px;
    color: #c9c9c9;
  }
  .mint-checklist-label{
    // border: 1px solid #000;
    text-align: center;
    font-size: 12px;
    color: #ccc;
   position: absolute;
    top: 75%;
    left: 20%;
  }
  .mint-checkbox-input:checked + .mint-checkbox-core {
  background-color: #cd2a34;
  border-color: #cd2a34;
}
  .numebtn{
    /* border: 1px solid #000; */
    width: 90%;
    height:8%;
    color: #fff;
    background-color: #cd2a34;
    border-radius: 25px;
    position: absolute;
    top: 80%;
    left: 5%;
  }
}
</style>
