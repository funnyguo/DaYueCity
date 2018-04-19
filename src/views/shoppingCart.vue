 <template>
  <!-- gouwu -->
  <div class="wrap">
    <v-header class="header" style="background:#000;">
      <h1 slot="title" style="color: #fff;"></h1>
    </v-header>
    <!-- <i class="van-icon van-address-list__edit van-icon-edit"></i> -->
     <div class="bj" @click="bjy"><span class="el-icon-edit-outline
"></span></div>
    <div class="mint-checklist page-part">
      <!-- 小星星服装店1 -->
      <label class="mint-checklist-label">
        <!-- 小圆点 -->
        <span class="mint-checkbox">
          <input type="checkbox" class="mint-checkbox-input" value="选项A">
          <span class="mint-checkbox-core"></span>
        </span>
        <span class="mint-checkbox-label">小星星服装店 &nbsp;进店&nbsp;></span>
      </label>
      <!-- 商品2 -->
      <label class="mint-checklist-label">
        <span class="mint-checkbox yuandian">
          <input type="checkbox" class="mint-checkbox-input" value="选项A">
          <span class="mint-checkbox-core"></span>
        </span>
        <span class="group">
          <img src="../../static/12.jpg" alt="">
          <div class="group-right">
            <span>2018夏 新款高圆圆 同款高腰港味半身裙不规则印花.....</span>
            <span>深蓝色,s</span>
            <div class="serve">
              <span>服务</span>
              <span>服务</span>
              <span>服务</span>
            </div>
            <div class="serve2">
              <span>￥</span>
              <span>80</span>
              <span>X1</span>
            </div>
           
          </div>
        </span>
      </label>
       
            
    </div>    
    <!-- 结算 -->
    <label class="mint-checklist-label gg">
      <!-- 小圆点 -->
      <span class="mint-checkbox">
        <input type="checkbox" class="mint-checkbox-input" value="选项A">
        <span class="mint-checkbox-core"></span>
      </span>
      <!-- <span class="mint-checkbox-label">小星星服装店 &nbsp;进店&nbsp;></span>        -->
    </label>
    <van-submit-bar :price="8000" button-text="结算" @submit="onSubmit">
      <van-checkbox v-model="checked" class="qx">全选</van-checkbox>
      <span slot="tip">
        您的收货地址不支持同城送,
        <span>修改地址</span>
      </span>
    </van-submit-bar>
  </div>

</template>

<script>
import Header from "@/common/_header.vue";
// import { SubmitBar } from 'vant';
// Vue.use(SubmitBar);
export default {
  components: {
    "v-header": Header
  },
  methods:{
    onSubmit(){
      this.$router.push({path:"/queren"})
    },
    bjy(){
       this.$router.push({path:"/bjy"})
    },
    getshopp(){
      this.$http.get('car/queryCarByUserId/6').then(res=>{
          // console.log(res)
      })
    }
  },
   created(){
    this.getshopp()
  },
};
</script>

<style lang="less" scoped>
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
  .header {
    width: 100%;
    height: 60px;
  }
  .group {
    display: inline-block;
    width: 91%;
    height: 18vh;
    // border: 1px solid red;
    left: -2px;
    position: absolute;
    background-color: #fff;
    /* margin-top: 5px; */
    padding-left: 15px;
    /* top: 0; */
    > img {
      /* border: 1px solid #000; */
      width: 30%;
      height: 90%;
      display: inline-block;
      margin-top: 5px;
      margin-left: 15px;
    }
    .group-left {
      width: 30%;
      height: 90%;
      /* border: 1px solid #000; */
      position: absolute;
      margin-top: 5px;
      /* margin-left: 20px; */
      top: 5px;
    }
    .group-right {
      width: 60%;
      height: 100%;
      /* border: 1px solid #000; */
      position: absolute;
      right: 0;
      font-size: 0.8rem;
      line-height: 130%;
      top: 5px;
      > span {
        /* border: 1px solid #000; */
        display: inline-block;
        width: 80%;
        font-size: 0.7rem;
      }
      > span:nth-of-type(2) {
        font-size: 10px;
      }
      .serve {
        // border: 1px solid #000;
        margin-top: 5%;
        > span {
          border: 1px solid #cd2a34;
          border-radius: 10px;
          display: inline-block;
          width: 20%;
          text-align: center;
          color: #cd2a34;
        }
      }
    }
  }
}
.bj{
  // border: 1px solid #000;
  position: absolute;
  width: 15px;
  height: 15px;
  top: 160px;
  right: 15px;
  z-index: 999;
  >img{
    width: 100%;
    height: 100%;
  }
}
.serve2 {
  // border: 1px solid #000;
  width: 50px;
  height: 40px;
  color: #ce2e37;
  position: absolute;
  right: -2px;
  top: 5px;
  > span:nth-of-type(1) {
    font-size: 0.5rem;
    /* border: 1px solid #000; */
    position: absolute;
    top: 0.5%;
    left: 15%;
  }
  > span:nth-of-type(2) {
    font-size: 18px;
    /* border: 1px solid #000; */
    position: absolute;
    top: 0.5%;
    left: 35%;
  }
  > span:nth-of-type(3) {
    font-size: 10px;
    position: absolute;
    left: 25px;
    bottom: 5px;
    color: #999;
    /* border: 1px solid #000; */
  }
  > span:nth-of-type(4) {
    font-size: 15px;
    position: absolute;
    left: 50%;
    top: 180%;
    color: #999;
    /* border: 1px solid #000; */
  }
}
.mint-checklist-label {
  /* border: 1px solid #000; */
  /* display: inline-block; */
  height: 30px;
  width: 100%;
  line-height: 30px;
  font-size: 12px;
  background-color: #fff;
  position: relative;
}
.mint-checklist {
  border-bottom: 1px solid #ccc;
  height: 30px;
  margin-top: 1px;
}
/* 修改圆点 */
.mint-checkbox-core {
  width: 15px;
  height: 15px;
}
.mint-checkbox-input:checked + .mint-checkbox-core {
  background-color: #cd2a34;
  border-color: #cd2a34;
}
.mint-checkbox-core::after {
  top: 1px;
  left: 5px;
}
.mint-cell-wrapper {
  padding: 0;
}
/* 修改 */

.yuandian {
  /* border: 1px solid #000; */
  position: absolute;
  top: -1.5px;
  z-index: 999;
}
.gg {
  /* border: 1px solid #000; */
  position: absolute;
  top: 625px;
  width: 20px;
  z-index: 999;
}
.qx {
  position: absolute;
  left: 50px;
}
.van-icon {
    right: -280px;
    top: 40px;
}
</style>