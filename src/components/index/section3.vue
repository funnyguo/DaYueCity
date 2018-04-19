<template lang="html">
  <section class="section3">
    <ul class="section3-list">
      <li v-for="k in brand" :key="k.id">
        <router-link :to="{name:'分类页'}" class="section3-list-right">
          <!-- <img v-lazy="k.imgUrl"> -->
        </router-link>
      </li>
       <!-- <li v-for="k in brand">
        <router-link :to="{name:'分类页'}" class="section3-list-right">
          <img v-lazy="k.imgUrl">
        </router-link> -->
      </li>
    </ul>
  </section>
</template>

<script>
import { Lazyload } from "mint-ui";

export default {
  data() {
    return {
       brand: [],
       section3: "",
       commodity:[]
      // dom: [
      //   {
      //     num1: "",
      //     num2: "",
      //     num3: ""
      //   },
      //   {
      //     num1: "",
      //     num2: "",
      //     num3: ""
      //   },
      //   {
      //     num1: "",
      //     num2: "",
      //     num3: ""
      //   },
      //   {
      //     num1: "",
      //     num2: "",
      //     num3: ""
      //   }
      // ]
    };
  },
  mounted() {
    this.$api({
      url: "/index"
    })
      .then(response => {
        // 将拿到的时间数据处理成倒计时
        let setTime = (ending, dom) => {
          let endTime = ending;
          let timeMsg = endTime.toString();
          let end = new Date(timeMsg).getTime();
          setInterval(() => {
            let now = new Date().getTime();
            let sy = parseInt((end - now) / 1000);
            let minute = parseInt((sy % 3600) / 60);
            let second = parseInt(sy % 60);

            minute < 10 ? (minute = "0" + minute) : minute;
            second < 10 ? (second = "0" + second) : second;
            let ms = (
              100 -
              Number(
                parseInt(now / 10)
                  .toString()
                  .substr(-2)
              )
            ).toString();

            if (end - now <= 0) {
              minute = "00";
              second = "00";
              ms = "00";
              dom.num2 = ms;
              return;
            }
            dom.num1 = minute;
            dom.num2 = second;
            dom.num3 = ms;
          }, 40);
        };
        this.section3 = response.data.section3;
        for (let i of this.dom.keys()) {
          setTime(response.data.section3.list[i].end, this.dom[i]);
          this.section3.list[i].dom = this.dom[i];
        }
        // this.section3.dom = this.dom;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods:{
   //获取品牌推荐
    getbrand(){ 
      this.$http.post('/brand/queryBrand',{params:{page:1,rows:10}},{"isRecommend":true}).then(res=>{
          this.brand=res.data.data.data         
      })
      }
    },
    created(){
      this.getbrand()
    }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.section3 {
  width: 100%;
  background-color: #fff;
  // border: 1px solid red;
  .pt();
  .section3-list {
    width: 100%;
    margin-top: -3.5vh;
    border: 1px solid #000;
    .bt();
    > li {
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 25%;
      // border: 1px solid #000;
      float: left;     
      .section3-list-right {
        width: 100%;
        display: block;       
        position: relative;
        border: 1px solid #ccc;
        height: 13vh;
        text-align: center;
        line-height: 13vh;
        img {
          // display: block;
          width: 100%;
          // background-color: gold;
          border: 1px solid #000;
        }
        span {
          padding: 0.3vw 1.2vw;
          border-radius: 1vw;
          text-align: center;
          position: absolute;
          bottom: 0.4vw;
          right: 0.2vw;
          background-color: @cl;
          color: #fff;
          .fz(font-size,24);
        }
      }
    }
  }
}
</style>
