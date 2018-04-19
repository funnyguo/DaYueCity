<template>
<!-- 会员中心页 -->
  <!-- <div class="vip"> -->
    <div class="wrap">
    <!-- <v-header class="header">
      <h1 slot="title">会员充值</h1>
    </v-header> -->
    <v-header class="header" style="background:#000;">
      <h1 slot="title" style="color: #fff;"></h1>
    </v-header>
      <!-- <h1>会员充值</h1> -->
      <div class="sum1"><span>账户余额:</span><span style="color:#cd2a34">999元</span></div>
     <div class="sum2">
       <input type="text" placeholder="请输入充值金额">
     </div>
     <div class="sum3">      
           <div>
             <span style="color:#cd2a34">100元</span>
              <span style="color:#cd2a34">到账：110元</span>
           </div>      
           <div>
             <span>100元</span>
              <span style>到账：110元</span>
           </div>
            <div>
             <span>100元</span>
              <span style>到账：110元</span>
           </div>
            <div>
             <span>100元</span>
              <span style>到账：110元</span>
           </div>
            <div>
             <span>100元</span>
              <span style>到账：110元</span>
           </div>
     </div>
     <div class="sum1"><button class="btn">充值</button></div>
  </div>
  
</template>

<script>
import Header from "@/common/_header.vue";

  export default {
    components: {
    "v-header": Header,

  }
  }
</script>

<style scoped lang=less>
.wrap {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
  border: 1px solid #ccc;
  background-color: #eee;
 h1{
    width: 100%;
    height:60px;
    /* background-color: #000; */
    /* border: 1px solid #000; */
    color: #fff;
    text-align: center;
    line-height: 50px;
   margin-left: 17vh;
  }
}
.sum1{
  /* border: 1px solid #000; */
  width: 100%;
  height: 80px;
   display: flex;
   justify-content: center;
  align-items: center;
  background-color: #fff;
  >span{
    display: inline-block;
    /* border: 1px solid #000; */    
  }
}
.sum2{
   /* border: 1px solid #000; */
  width: 100%;
  height: 45px;
    display: flex;
    flex-flow: row wrap;
    /* border-radius: 15px; */
    background-color: #fff;
    padding-left: 5px;
  >input{
    border: 1px solid #ccc;
    display: inline-block;
    width: 90%;
  height: 40px;
    border-radius: 15px;
    text-indent: 1em;
    font-size: 14px;
  }
}
.sum3{
  /* border: 1px solid #000; */
    display: flex;
    flex-flow: row wrap;
    padding-left: 10px;
    padding-top: 10px;
    background-color: #fff;
  >div{
    border: 1px solid #999;
    width: 90px;
    border-radius: 10px;
    height: 50px;
    margin: 5px;
    >span{
      display: inline-block;
      margin-left: 5px;
      font-size: 14px;
    }
  }
}
.btn{
  /* border: 1px solid #000; */
    width: 90%;
    height: 50%;
    border-radius: 20px;
    background-color: #cd2a34;
    color: #fff;
    margin-top: 50px;
}
</style>