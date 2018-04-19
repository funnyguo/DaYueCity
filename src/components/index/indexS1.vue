<template>
  <!-- 店铺首页->全部商品页面 -->
  <div>
    <!-- <div class="box">
      <span class="inconX">
        <button name="like-o">取消关注</button>
      </span>
    </div> -->
    <mt-tab-container v-model="selected">
      <!-- 全部商品 -->
      <mt-tab-container-item id="1">
        <div>
          <!-- <section class="swipe">
            <mt-swipe :auto="2000">
              <mt-swipe-item v-for="(item, i) in list" :key="i">
                <a :href="item.url">
                  <img :src="item.src" />
                </a>
              </mt-swipe-item>
            </mt-swipe>
          </section> -->
          <section class="swipe">
            <van-swipe :autoplay="3000">
              <van-swipe-item v-for="(image, index) in images" :key="index" class="swipe">
                <img v-lazy="image" />
              </van-swipe-item>
            </van-swipe>
          </section>
        </div>
        <div class="boxq1">
          <div class="boxq">
            <div class="boxq_Left">
              <img src="../../../static/12.jpg" alt="">
              <p>2018新款牛仔短裤女夏季韩版牛仔短裤宽....</p>
              <p style="color:#fecd00">￥108</p>
              <button>购买</button>
            </div>
            <div class="boxq_right">
              <img src="../../../static/12.jpg" alt="">
              <p>2018新款牛仔短裤女夏季韩版牛仔短裤宽....</p>
              <p style="color:#fecd00">￥108</p>
              <button>购买</button>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data: function() {
    return {
      selected: "1",
      images: [
        "../../../static/ss.jpg",
        "../../../static/12.jpg"
        // 'https://img.yzcdn.cn/2.jpg'
      ]
    };
  }
};
</script>

<style scoped lang="less">
.swipe {
  height: 220px;
  width: 100%;
  > img {
    width: 100%;
    height: 100%;
    border: 1px solid #000;
  }
}
.box {
  white-space: 100%;
  height: 120px;
  border: 1px solid #fff;
  border-bottom: 1px solid #ccc;
  display: flex;
  background-color: #f77076;
  font-size: 14px;
  color: #fff;
  align-items: center;
  position: relative;
  .inconX {
    // border: 1px solid #000;
    display: inline-block;
    display: flex;
    width: 80px;
    height: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    > button {
      border: 1px solid #fff;
      width: 75px;
      height: 20px;
      background-color: #f77076;
      border-radius: 5px;
      color: #fff;
      font-size: 12px;
    }
  }
}
.boxq1 {
  display: flex;
  background-color: #fff;
  flex-direction: column;
  // > p {
  //   width: 100%;
  //   height: 30px;
  //   text-indent: 1em;
  //   color: #ccc;
  //   line-height: 30px;
  //   background-color: #f2f2f2;
  //   border: 1px solid #000;
  // }
  .boxq {
    // border: 1px solid #000;
    width: 94.5%;
    height: 250px;
    display: flex;
    margin: 10px;
    justify-content: center;
    font-size: 15px;
    > .boxq_right {
      width: 90%;
      display: flex;
      flex-direction: column;
      position: relative;
      > p {
        // border: 1px solid #000;
        font-size: 14px;
      }
      > img {
        width: 98%;
        height: 180px;
        margin: 2px;
      }
      > button {
        border: 1px solid #ce2a32;
        width: 50px;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        border-radius: 10px;
        color: #ce2a32;
        background-color: #fff;
        position: absolute;
        right: 10px;
        bottom: 5px;
      }
    }
    > .boxq_Left {
      width: 90%;
      display: flex;
      flex-direction: column;
      position: relative;
      > p {
        // border: 1px solid #000;
        font-size: 14px;
      }
      > img {
        // border: 1px solid #000;
        width: 98%;
        height: 180px;
        margin: 2px;
      }
      > button {
        border: 1px solid #ce2a32;
        width: 50px;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        border-radius: 10px;
        color: #ce2a32;
        background-color: #fff;
        position: absolute;
        right: 10px;
        bottom: 5px;
      }
    }
  }
}
</style>