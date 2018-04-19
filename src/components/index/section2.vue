<template>
  <section class="section2" v-if='section2'>
    <h1>
      <!-- <span><img src="../../../img/mall_bg_newarrival.png" alt=""></span>  -->
      <i><img src="../../../img/mall_bg_newarrival.png" alt=""></i>
      新品上市
    </h1>
    <div class="section2-list" style=" padding-top: 0;">

      <ul>
        <li v-for="k in commodity" :key="k.id">
          <router-link :to="{name:'列表页'}">
            <img v-lazy="k.picUrl">
          </router-link>
          <h2 class="section2-list-title ac">
            {{k.name}}
          </h2>
          <p class="section2-list-intro">
            {{k.brand}}
          </p>
          <p class="section2-list-price">
            ￥{{k.price}}
            <span>购买</span>
          </p>
        </li>
      </ul>
    </div>
    <!-- <router-link class="section2-banner" :to="{name:'详情页'}">
      <h1 class="Brand">
        <span >12</span> 
        品牌推荐
      </h1>     
    </router-link> -->
    <h1 style="margin-top:10px">
      <!-- <span><img src="../../../static/2.jpg" alt=""></span>  -->
      <i><img src="../../../img/mall_bg_brand.png" alt=""></i>
      品牌推荐
    </h1>
  </section>
</template>

<script>
import { Lazyload } from "mint-ui";

export default {
  props: ["section2"],
  data() {
    return {
     
      commodity: []
    };
  },
  created() {
    
    this.getcommodity();
  },
  methods: {
    //获取新品上市
    getcommodity() {
      this.$http
        .post("/commodity/queryThirdClassifyCommodity", {
          page: 1,
          rows: 10,
          sort: 3
        })
        .then(res => {
          var produ=res.data.data;
          this.commodity=produ.data.map(function (params,i) {
            return params;
            console.log(res.data)
          })
        });
    },
   
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.section2 {
  border: 1px solid #fff;
  background: #eee;
  // border: 1px solid #000;
}
h1 {
  .fz(font-size, 36);
  font-weight: 600;
  height: 35px;
  color: #333333;
  font-family: hzgb;
  line-height: 30px;
  width: 100%;
  // border: 1px solid red;
  text-align: center;
  background-color: #fff;
  // margin-top: 10px;
  // padding-top: 5px;
  // border: 1px solid #000;
  i {
    width: 30px;
    height: 32px;
    margin-top: 4px;
    color: #fff;
    padding-top: 10px;
    justify-content: center;
    // border: 1px solid #000;
    // border: 1px solid #000;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
.section2-list {
  overflow-x: auto;
  width: 100%;
  // text-align: center;
  // border: 1px solid #000;
  background-color: #fff;
  display: flex;
  // border: 1px solid #000;
  .pt();
  /*原生滑动*/
  -webkit-overflow-scrolling: touch;
  > ul {
    .bt();
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    // padding: 6vw;
    width: 380%;
    // border: 1px solid #000;
    li {
      // margin-right: 1vw;
      width:150px;
      // border: 1px solid #000;
      display: flex;
      flex-direction: column;
      // align-items: center;
      margin: 0 auto;
      margin: 5px;
      a,
      img {
        display: block;
        width: 150px;
        height: 150px;
        border: 1px solid #000;
      }
      h2,
      p {     
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        // border: 1px solid #000;
      }
      h2 {
        .fz(font-size, 32);
        // padding-top: 3vw;
        color: #333;
      }

      p.section2-list-intro {
        padding-top: 2vw;
        .fz(font-size, 26);
        color: rgb(150, 150, 150);
      }

      p.section2-list-price {
        color: #ffcc00;
        //  height: 4vh;
        line-height: 4vh;
        // border: 1px solid #000;
        position: relative;
        font-family: PingFang SC;
        > span {
          display: inline-block;
          border: 1px solid #cd2a34;
          width: 6vh;
          height: 2.5vh;
          margin-left: 8vh;
          position: absolute;
          top: 3px;
          border-radius: 5px;
          text-align: center;
          line-height: 2.5vh;
          font-size: 14px;
          color: #cd2a34;
        }
      }
    }
  }
}
.section2-banner {
  display: block;
  width: 100vw;
  img {
    display: block;
    height: 24vw;
    width: 100%;
  }
}

</style>
