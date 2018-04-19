<template lang="html">
    <div class="swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="i in swiper" :key="i.id">
           <img :src="i.imgUrl">
        </mt-swipe-item>
      </mt-swipe>
      <div class="back" @click="$router.go(-1)">
        <span class="icon-go"></span>
      </div>
    </div>

</template>

<script>
export default {
  data(){
    return{
      swiper:[],
    }
  },
  // computed:{
  //   swiper(){
  //       return this.$store.state.detail.productDatas.swiper
  //   },
    methods:{
      getSwiper(){
        this.$http.post('/sysImg/insertSysImg',{params:{"imgUrl": "D:/", "commodityId": 3, "isShow": true, "shopId":2}}.then(res=>{
          console.log(res)
          // var swip=res.data;
        }))
      }
    }
  }

</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
@import '../../assets/index/style.css';

.swiper {
  width: 100%;
  position: relative;

  .mint-swipe {
    width: 100%;
    height:100vw;
    img {
      display: block;
      width: 100%;
      height:100%;
    }
  }

  .back {
    width: 7vw;
    height: 7vw;
    position: absolute;
    left: 4vw;
    top: 2vw;
    background-color: rgba(0,0,0,.4);
    border-radius: 50%;
    text-align: center;
      span {
        display: inline-block;
        line-height: 7vw;
        .fz(font-size,40);
        transform: rotate(-180deg);
        &::before {
          color:#fff;
        }
      }

      &:active {
        transform: scale(1.3);
      }
  }

}
</style>
