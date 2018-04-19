<template lang="html">
  <section class="section1" v-if='section1'>
    <h1 class="section1-title">
     <a href="#" style="color:red;">></a>
      <span style="color:#CD2A34;">热点&nbsp;&nbsp;|</span>
      <input type="text" placeholder="卫生间弄个夹子，小区业主炸开窝"><a href="#">></a>
    </h1>
    <!-- 优惠券 -->
   <ul class="section1-list1">
      <li v-for="item in coupon" :key="item.id">
        <router-link :to="{ name: '优惠券'}"  class="section1-banner">
            <span>￥</span>
            <span>{{item.amount}}</span>
            <span>优惠券{{item.explain}}</span>
            <button class="btn">点击领取</button>
            <i class="el-icon-arrow-right"></i>
        </router-link>         
      </li>
    </ul>
    
  </section>
</template>

<script>
import { Lazyload } from "mint-ui";
export default {
  data(){
    return{
      coupon:[],
    }
  },
  props: ["section1"],
  methods:{
    getcoupon(){
      this.$http.get('/coupon/mainPageCoupon',{}).then(res=>{
        var a=res.data;
        this.coupon=a.data.map(function (photo,i) {
          return photo;
        });
        //console.log(res)
      })
    }
  },
      created(){
    this.getcoupon()
  },
  
}
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.section1{
  width: 100%;
  background-color: rgb(238, 238, 238); 
   margin-bottom: 10px;
   height: 170px;
   display: flex;
  width: 100%;
  background-color: #eee;
   flex-direction: column;
  // margin-bottom: 5px;
  // border: 1px solid #000;
  .section1-title {
    background-color: #ffffff;
    color: #ccc;
    border-radius: 28px;
    height: 35px;
    width: 90%;
    margin: 0 auto;
    position: relative;
    line-height: 35px;
    text-indent: 1em;
    top: 6.5px;
    >input{
    height: 100%;
    width: 75%;
    position: absolute; 
    top: 0px;
    border-radius: 28px;
    font-size: 2vh;
    text-indent: 0.5em;
    }
    a{
      // border: 1px solid #000;
      position: absolute;
      // top: 4px;
      right: 10px;
      font-size: 20px;
      color:#CD2A34;
    }
    i {
      position: absolute;
      right: 6vw;
      // top: 50%;
      // .fz(font-size, 36);
      // .fz(margin-top,-16);
      &::before {
        color: rgb(159, 159, 159);
      }
    }    
  }
  //优惠券
   .section1-list1{
    display: flex;
    justify-content: space-around; 
    height:120px; 
    position: relative;
    // border: 1px solid #000;
    // font-size: 14px;
    top: 15px;   
    li {
      width: 33.3%;
      // padding: 1vw;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      // border: 1px solid #000;
      position: relative;
      display: flex;
      height: 120px;
      span{
        color: #CD2A34;
        position: absolute;
        &:nth-of-type(1){
          font-size: 2vh;
          font-family: PingFang-SC-Regular;
          // border: 1px solid #000;
          top: 22px;
          left: 0vh;
        }
        &:nth-of-type(2){
          font-size: 35px;
          font-family: ArialNarrow;
          // border: 1px solid #000;
          left:1.5vh;
          top: 18px;
        }
        &:nth-of-type(3){
          font-size: 12px;
          font-family: PingFang-SC-Regular;
          // border: 1px solid #000;
          left: 8vh;
          top: 5vh;
          line-height: 2vh;
          width: 60px;
          height: 40px;
        }
      }
      .su{
         display: inline-block;
          width: 100px;
          height: 10px;
          border: 1px solid #000;
      }
     .btn{
       position: absolute;
       bottom:10px;
       color: #fefefe;
       font-family: PingFang-SC-Regular;
       background-color: #CD2A34;
       width: 80%;
      //  margin-left: 1px;
      left: 15px;
       height: 35px;
       font-size: 14px;
        display: flex;
        // justify-content: center;
        text-indent: 1em;
     }
    }
    .el-icon-arrow-right{
      // border: 1px solid #000;
      width: 20px;
      height: 50px;
      position: absolute;
      // z-index: 999;
      top:86px;
      left: 90px;
      width: 20px;
      color: #fff;
      height: 20px;
    }
  }
  .section1-list {
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    padding: 0 2vw 4vw 2vw;
    li {
      width: 50%;
      padding: 1vw;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      a,
      img {
        width: 100%;
        display: block;
      }
    }
  }
  
}
</style>
