<template>
  <div>

  <!-- 跳转到绑定手机 -->
  <button @click="bound" class="btn1">跳转到绑定手机</button>
  <button @click="search" class="btn1">跳转到搜索页</button>
  <button @click="search2"  class="btn1">商品列表帅选页</button>
  <button @click="search3"  class="btn1">收货地址</button>
   <button @click="search4"  class="btn1">交易成功</button>
    <button @click="search5"  class="btn1">查看物流</button>
     <button @click="daishouhuo"  class="btn1">微信支付</button>
      <button @click="search6"  class="btn1">店铺详情</button>
      <button @click="search7"  class="btn1">用户评价</button>
      <button @click="share"  class="btn1">配送方式弹层</button>
       <button @click="share2"  class="btn1">支付方式弹层</button>
      <button @click="indexS"  class="btn1">店铺首页</button>
      <button @click="indexS1"  class="btn1">店铺首页1</button>
      <button @click="indexS2"  class="btn1">店铺首页2</button>
     <button @click="Sku"  class="btn1">sku</button>
    <h1></h1>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">综合</mt-tab-item>
      <mt-tab-item id="2">资讯</mt-tab-item>
      <mt-tab-item id="3">资讯</mt-tab-item>
      <mt-tab-item id="4">资讯</mt-tab-item>
      <mt-tab-item id="5">资讯</mt-tab-item>
      <mt-tab-item id="6">资讯</mt-tab-item>
      <mt-tab-item id="7">资讯</mt-tab-item>
    </mt-navbar>
      
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- <mt-cell v-for="n in 10" :title="'content ' + n" /> -->
        <div class="hotspot">
          <div>
            <img src="../../../img/mall_bg_guessyoulike.png" alt="">
          </div>
          <div>
            <h1>蠢萌的外表，但它却是把温柔的...</h1>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;家里的日常小工具，什么螺丝刀、小起</span>
            <span>子啊之类的，基本都是家中哦铁直男的专属...</span>
            <div class="dianp">
              <span>xxx店铺</span>
                <span>4月1日</span>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!-- <mt-cell v-for="n in 4" :title="'content ' + n" /> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <!-- <mt-cell v-for="n in 6" :title="'content ' + n" /> -->
      </mt-tab-container-item>
    </mt-tab-container>

    <!-- 加载更多 -->
    <button class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined" ref="loadMoreBtn" @click="getList">加载更多</button>
  </div>
  
</template>

<script>
export default {
  data() {
     return {
       selected:"1",
       title: '商品列表',
        pageindex: 1,
        list: []
    };
  },
  methods:{
    
    // 跳转到绑定手机
    bound(){
      this.$router.push({path:'/bound'})
    },
    // 跳转到搜索页
     search(){
      this.$router.push({path:'/search'})
    },
    // 商品列表帅选页
    search2(){
      this.$router.push({path:'/search2'})
    } ,
    search3(){
      this.$router.push({path:'/search3'})
    },
    search4(){
       this.$router.push({path:'/search4'})
    },
    daishouhuo(){
      this.$router.push({path:'/daishouhuo'})
    },
    //查看物流
    search5(){
      this.$router.push({path:'/search5'})
    },
    search6(){
      this.$router.push({path:'/search6'})
    },
    search7(){
      this.$router.push({path:'/search7'})
    },
    // 商品详情分享页
    share(){
      this.$router.push({path:'/share'})
    },
    // 店铺首页
    indexS(){
      this.$router.push({path:'/indexS'})
    }, indexS1(){
      this.$router.push({path:'/indexS1'})
    },
     indexS2(){
      this.$router.push({path:'/indexS2'})
    },
     share2(){
      this.$router.push({path:'/share2'})
    },
     Sku(){
      this.$router.push({path:'/Sku'})
    },

    // 获取商品列表
     getList() {
         let url = config.goodsList + '?pageindex=' + this.pageindex;
         this.$http.get(url).then(rep => {
            let body = rep.body;
            // 因为有加载更多按钮，一页一页累加数据
            if(body.status == 0 && body.message.length > 0) {
              this.list.push(...body.message);
              this.pageindex++;
            }
            // 如果已经是最后一页数据了，那么把按钮disable掉
            else if(body.message.length == 0){
              this.$refs.loadMoreBtn.disabled = true;
            }
         });
       }
  }
};
</script>

<style scoped lang="less">
.btn1{
  border: 1px solid #000;
  background: chartreuse;
}
  .hotspot{
    // border: 1px solid #000;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #fff;
    margin-top: 5px;
    div{
      // border: 1px solid #000;
      justify-content: center;
       
    }
    >div:nth-of-type(1){
      flex-grow: 2;
      width: 40px;
      height: 100px;
      display: flex;
       justify-content:center;
      align-items: center;
   
      >img{
        width: 80%;
        height: 90%;
        border: 1px solid #000;
        display: inline-block;
      }
    }
    >div:nth-of-type(2){
      flex-grow:3;
      width: 150px;
      height: 100px;
      font-size: 14px;
      
      >h1{
        font-size: 16px;
        font-weight: 600;
      }
      >span{
        text-indent: 1em;
      }
    }
    .dianp{
        display: flex;
      width:100%;
      height: 100px;
      font-size: 14px;
       justify-content:space-between;
      >span{
        display: inline-block;
        // border: 1px solid #000;
        padding-right: 10px;
      }
  }
  }
  //修改颜色
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #cd2a34;
    color: #cd2a34;
}
</style>