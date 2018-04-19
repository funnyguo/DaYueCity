<template lang="html">
  <section class="content">
    <div class="img-wrap" v-for="k in content">
      <img :src="k.imgSrc">
    </div>
  </section>

</template>

<script>
export default {
  computed:{
    content(){
      return this.$store.state.detail.productDatas.contentImgSrc
    }
  }
}
</script>

<style lang="less" scoped>
  .content {
    width: 100%;
    // margin-top: 10px;
    // border-top: 20px solid #F8FCFF;
    // margin: 5px;
    // border: 1px solid #000;
    background-color: #fff;
    .img-wrap {
    height: 120vw;

      img {
        display: block;
        width: 95%;
        height: 95%;
        margin: 0 auto;
      }
    }
  }
</style>
