<template lang="html">
  <section class="section4">
    <h2 class="section4-title">
      <span><img src="../../../img/mall_bg_guessyoulike.png" alt=""></span> 猜你喜欢
      <!-- <i class="icon-right"></i> -->
    </h2>
    <ul class="section4-list">
      <li v-for="item in grous" :key="item.id">
        <router-link :to="{name:'详情页'}" :key="item.grous">
          <img v-lazy="item.picUrl">
          <p>{{item.name}}</p>
        </router-link>
        <h3>{{item.title}}</h3>
        <span>￥{{item.price}}</span>
        <span>购买</span>
      </li>

    </ul>
    <router-link :to="{name:'分类页'}" class="section4-banner">
      <!-- <img v-lazy="section4.banner"> -->
    </router-link>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';
  export default {
    // props:['section4'],
    data(){
      return{
      grous:[],
      }
    },
    methods:{
      getguess(){
        this.$http.get('commodityUserenjoy/queryUserenjoyByPage',{params:{userId:1}}).then(res=>{
          let a=res.data;
          this.grous=a.data.map(function (params,i) {
            return params;
          })
            // console.log(res);
        })
      }
    },
    created(){
      this.getguess();
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/index/style.css';
  .section4 {
    width: 100%;
    overflow: hidden;
    border: 1px solid #000;
   position: relative;
   top: 10px;
    // .pt();
    .section4-title {
      .bt();
      text-align: center;
      .fz(font-size, 36);
      // padding: 4vw 0;
      color: #333;
      
      font-weight: 600;
      font-family: hzgb;
      background-color: #ffffff;
      // border: 1px solid #000;
      height:40px ;
      line-height: 35px;
      span{
        // display: inline-block;
        // line-height: 36px;
        width: 30px;
        height: 32px;
        // background-color: #CD2A34;
        // border: 1px solid #000;
        // margin-top: 4px;
        color: #fff;
      img{
         width: 30px;
        height: 30px;
      }
      i {
        position: absolute;
        right: 6vw;
        top: 50%;
        .fz(font-size, 36);
        .fz(margin-top,-16);
        &::before {
          color: #9f9f9f;
        }
      }
    }
}
    .section4-list {
      width: 100%;
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      overflow: hidden;
      
      li {
        width: 50%;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        padding:0 3vw;
        >a {
          display: block;
          width: 100%;
          position: relative;
          img {
            display: block;
            width: 100%;
          }
          p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: gold;
            -webkit-box-sizing: border-box;
                    box-sizing: border-box;
            padding:1.2vw 2vw;
          }
        }

        >h3 {
          padding-top: 3vw;
          .fz(font-size,40);
        }
        >span:nth-of-type(1){
          display: inline-block;
          padding-bottom: 3vw;
          color:#FFCC00;
        }
         >span:nth-of-type(2){
          display: inline-block;
          // padding-bottom: 3vw;
          width: 6vh;
          height: 3vh;
          text-align: center;
          border-radius: 5px;
          color:#CD2A34;
          border: 1px solid #CD2A34;
          margin-left: 10vh;
          font-size: 14px;
          line-height: 3.5vh;
        }
      }
    }

    .section4-banner {
      width: 100%;
      display: block;
      img {
        display: block;
        width: 100%;
      }
    }
  }
</style>
