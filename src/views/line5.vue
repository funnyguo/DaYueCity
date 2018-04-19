<template>
  <div>
    <!-- 发表评价 -->
    <div class="evaluate">
      <!-- 描述开始 -->
      <div class="describe">
        <div><img src="../../img/mall_bg_guessyoulike.png" alt="">
        </div>
        <div class="box">
          <span style="margin-top:10px;">描述相符</span>
          <el-rate v-model="value3" show-text class="xing">
          </el-rate>

        </div>
      </div>
      <!-- 描述结束 -->
      <div class="hp">
        <!-- <el-rate v-model="value4" :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']" void-icon-class="icon-rate-face-off" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate> -->
        <el-rate
          v-model="value4"
          :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
          void-icon-class="icon-rate-face-off"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
        <span>好评</span>
            <span>中评</span>
                <span>好评</span>
      </div>
      <div class="describe2">
        <input type="text" placeholder="宝贝满足你的期待吗？说说它的优点和美中不足的地方吧！">
      </div>
      <div class="describe3">
        <button @click='UserFf2'>提交</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      value3: null,
      value4: null,
      // colors:'{}'
    };
  },
  methods: {
    UserFf2() {
      this.$router.push({ path: "/UserFf2" });
    }
  }
};
</script>

<style scoped lang="less">
.hp{
  border: 1px solid #000;
  
}
.evaluate {
  width: 100%;
  height: 100%;
  > div {
    border: 1px solid #000;
    width: 100%;
    height: 100px;
    background-color: #fff;
  }


  > img {
    display: inline-block;
    width: 100px;
    height: 100px;
  }
  //描述
  .describe {
    border: 1px solid #000;
    display: flex;
    line-height: 25px;
      align-items: center;
    > div:nth-of-type(1) {
      border: 1px solid #000;
      width: 80px;
      height: 80px;
      margin: 10px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .describe2 {
    border: 1px solid #000;
    display: flex;
    height: 150px;
    display: flex;
    // justify-content:center;
    align-items: center;

    > input {
      border: 1px solid #000;
      width: 85%;
      height: 80%;
      margin: 0 auto;
      font-size: 11px;
      color: #ccc;
      text-indent: 1em;
      // line-height: 20px;
    }
  }
  .describe3 {
    // border: 1px solid #000;
    display: flex;
    align-items: center;
    > button {
      // border: 1px solid #000;
      width: 90%;
      height: 50px;
      background-color: #cd2a34;
      color: #fff;
      border-radius: 25px;
      margin: 0 auto;
    }
  }
}
</style>