<template lang="html">
<!-- 商品详情页 -->
  <section class="chose" v-if="view">    
    <div class="chose-view">
      <h1 class="chose-view-title">
        <!-- {{view.title}} -->
       <div class="title"> 2018夏 新款高圆圆 同款高腰短裤蓝色妞子港位热裤不规则裤边
            <!-- 分享图标 -->
            <i class="el-icon-share share1 share_hide" @click="share_show=true"></i>
       </div>
       <!-- 分享弹出层 -->
         <van-popup v-model="share_show" position="bottom" :overlay="true">
          <div class="share_box">
            <h1>
              分享到
              <span class="el-icon-circle-close-outline share_hide" @click="share_show=false"></span>
            </h1>
            <div class="share_box2">
              <div class="box22">
                <img src="../../../img/分享/share_bg_wechat@2x.png" alt=""> 微信
              </div>
              <div class="box22">
                <img src="../../../img/分享/share_bg_circleoffriends@2x.png" alt=""> 朋友圈
              </div>
              <div class="box22">
                <img src="../../../img/分享/share_bg_qq@2x.png" alt=""> QQ
              </div>
              <div class="box22">
                <img src="../../../img/分享/share_bg_microblog@2x.png" alt=""> 微博
              </div>
              <div class="box22">
                <img src="../../../img/分享/share_bg_message@2x.png" alt=""> QQ
              </div>
              <div class="box22">
                <img src="../../../img/分享/share_bg_copylink@2x.png" alt=""> 微博
              </div>
            </div>      
          <div class="share_box3"> <button class="btn">取消</button></div>
          </div>
    </van-popup>
        <!-- <span>(已选 {{colText}} - {{sizeText}})</span> -->
           <div> 
               <span>￥</span>
               <span>80</span>
            </div>
            <div class="jage"> 
                <span><del>价格160</del></span>
                <span>库存：100件</span>
            </div>
      </h1>
      <!-- {{view.price}}元 -->
      
      <!-- {{view.intro}} -->
      <p class="chose-view-intro"></p>
    </div>
    <router-link :to="{name:'详情页'}">
    <div class="chos_fw"  @click="show2=true">
        <span>服务</span>
        <span>7天无无理由退货*破选包赔*极速发货</span>
        <span class="el-icon-arrow-right"></span>
    </div>
    <!-- 服务弹层 -->
    <van-popup v-model="show2" position="bottom" :overlay="true">
      <div class="boxf">
        <h1>服务</h1>
        <label class="mint-checklist-label boxf2">         
          <span class="mint-checkbox"><input type="checkbox" class="mint-checkbox-input" value="选项A">
            <span class="mint-checkbox-core"></span>
            <span class="mint-checkbox-label ">7天无理由
              <p class="p">满足7天无理由退换货申请前提下，包邮商品需要卖家承担退货邮费，非包邮商品需要买家承担发货和退货邮费。</p>
            </span>           
          </span>
        </label>
        <label class="mint-checklist-label">         
          <span class="mint-checkbox"><input type="checkbox" class="mint-checkbox-input" value="选项A">
            <span class="mint-checkbox-core"></span>
            <span class="mint-checkbox-label">破损包赔</span>
          </span>
        </label>
        <label class="mint-checklist-label">         
          <span class="mint-checkbox"><input type="checkbox" class="mint-checkbox-input" value="选项A">
            <span class="mint-checkbox-core"></span>
            <span class="mint-checkbox-label">极速发货</span>
          </span>
        </label>
        <button class="btn" @click="show2=false">完成</button>
      </div>
    </van-popup>
    </router-link>
     <router-link :to="{name:'详情页'}">
       <!-- 颜色分类 -->
    <div class="chos_fw2 " @click="yardage_show=true">
        <span>规格</span>
        <span>请选择颜色分类</span>
        <span class="el-icon-arrow-right"></span>       
    </div>
     <!-- 颜色分类弹出层 -->
     <van-popup v-model="yardage_show" position="bottom" :overlay="true">
       <div class="yardage" v-for="">
         <div class="yardage2">
            <div>
              <img src="../../../static/12.jpg" alt="">
            </div>
            <div>
            <span>￥</span>
            <span style=" text-indent: 3em;">80</span>
            <span>库存:100件</span>
            <span>已选："深蓝色""S"</span>
            <span class="el-icon-circle-close-outline share_hide" @click="yardage_show=false"> </span>
            </div>
         </div> 
          <div class="yardage3">
           <h2>颜色</h2>
           <button>深蓝色</button>
           <button>浅蓝色</button>
         </div> 
         <div class="yardage4">
           <h2>尺寸</h2>
           <button  >s</button>
           <button  >M</button>
            <button >L</button>
         </div>  
          <div class="yardage5">
           <h2>购买数量</h2>
          <van-stepper v-model="value" class="counter"/>
           <div class="yardage_btn">
          <button>加入购物车</button>
          <button>立即购买</button>
         </div>  
         </div>   
                       
       </div>
        
        
         
       </div>
       
    </van-popup>
    </router-link>
    <router-link :to="{name:'用户评价'}">
    <div class="chos_fw3">
        <span>用户评价(100)</span>
         <span class="el-icon-arrow-right"></span>
    </div>
    </router-link>
     <router-link :to="{name:'详情页'}">
    <div class="chos_fw4">
        <span>
            <img src="../../../img/mall_btn_coupon.png" alt="">
        </span>
        <span>名字</span>
        <span>2018.03.22 &nbsp;&nbsp;02.10</span>
        <span>物流很快，货物很新鲜，口感很好，下次再来</span>
    </div>
    </router-link>
        <h1 class="chose_h1">产品详情</h1>
    </router-link>
  </section>


</template>

<script>
import { MessageBox } from "mint-ui";
import { mapState } from "vuex";

import Header from "@/common/_header.vue";
import Aside from "@/components/category/aside.vue";
export default {
  data() {
    return {
      showshare: true,
      show2: false,
      share_show: false,
      yardage_show: false,
      num7: 1,
      ins:0,
      // 步进器
       value: 1
    };
  },
  computed: mapState({
    view: state => state.detail.productDatas.view,
    colSelected: state => state.detail.colSelected,
    sizeSelected: state => state.detail.sizeSelected,
    // 返回当前选择颜色的值(innerText)
    colText() {
      return this.view.chose[this.colSelected].col;
    },
    // 返回当前选择规格的值(innerText)
    sizeText() {
      return this.view.chose[this.sizeSelected].size;
    }
  }),
  methods: {
    //点击后把i赋值给colSelected,再通过判断决定是否添加选中样式 (active)
    colChose(i) {
      this.$store.commit("CHANGE_COL_SELECTED", i);
    },
    sizeChose(i) {
      this.$store.commit("CHANGE_SIZE_SELECTED", i);
    },
    // show() {
    //   this.showshare = false;
    // },
    // ctive(num){
    //   this.ins=num;
    // },
    // active1(){
    //   this.active1=1;
    // },
    //  active2(){
    //   this.active1=2;
    // }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
//标题
.title {
  //   border: 1px solid #000;
  display: flex;
  width: 95%;
}
// 分享
.share1 {
  color: #999;
  font-size: 22px;
  // border: 1px solid #000;
}
.chose-view-title {
  background-color: #fff;
  //   border: 1px solid #000;
  margin-bottom: 5px;
  padding-left: 10px;

  span:nth-of-type(1) {
    font-size: 10px;
    color: #cd2a34;
  }
  span:nth-of-type(2) {
    font-size: 20px;
    color: #cd2a34;
    margin-left: -5px;
  }
  .jage {
    width: 98%;
    // border: 1px solid #000;
    display: flex;
    height: 15px;
    position: relative;
    > span:nth-of-type(1) {
      // border: 1px solid #000;
      color: #c0c0c0;
      width: 50px;
      height: 15px;
      display: inline-block;
      position: absolute;
    }
    > span:nth-of-type(2) {
      // border: 1px solid #000;
      font-size: 10px;
      margin-left: 240px;
      width: 60px;
      height: 15px;
      display: inline-block;
      position: absolute;
      right: 8px;
      color: #c0c0c0;
    }
  }
}
.chose {
  // padding: 3vw;
  // margin: 1vw;
  .chos_fw {
    // border: 1px solid #000;
    background-color: #fff;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    color: rgba(172, 169, 169, 0.925);
    padding-left: 5px;
    display: flex;
    position: relative;
    > span:nth-of-type(2) {
      //   border: 1px solid #000;
      font-size: 15px;
      color: #000;
    }
    > span:nth-of-type(3) {
      font-size: 15px;
      //    margin-left: 50px;
      //    border: 1px solid #000;
      position: absolute;
      right: 10px;
      top: 11px;
    }
  }
  .chos_fw2 {
    // border: 1px solid #000;
    background-color: #fff;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    color: rgba(172, 169, 169, 0.925);
    padding-left: 5px;
    margin-top: 5px;
    position: relative;
    > span:nth-of-type(2) {
      font-size: 14px;
      color: #000;
    }
    > span:nth-of-type(3) {
      font-size: 18px;
      //    margin-left: 183px;
      position: absolute;
      right: 10px;
      top: 11px;
    }
  }
  .chos_fw3 {
    // border: 1px solid #000;
    background-color: #fff;
    margin-top: 5px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #000;
    padding-left: 5px;
    position: relative;
    > span:nth-of-type(2) {
      //   border: 1px solid #000;
      font-size: 18px;
      color: #ccc;
      // margin-left: 210px;
      position: absolute;
      right: 10px;
      top: 11px;
    }
  }
  .chos_fw4 {
    width: 100%;
    height: 100px;
    border: 1px solid #eee;
    background-color: #fff;
    position: relative;
    > span:nth-of-type(1) {
      display: inline-block;
      width: 50px;
      height: 50px;
      // border: 1px solid #000;
      border-radius: 30px;
      margin-left: 10px;
      margin-top: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    > span:nth-of-type(3) {
      // border: 1px solid red;
      font-size: 14px;
      position: absolute;
      right: 5px;
      top: 23px;
    }
    > span:nth-of-type(4) {
      // border: 1px solid #000;
      position: absolute;
      top: 70px;
      width: 100%;
      left: 10px;
      font-size: 12px;
    }
  }
  .chose_h1 {
    // border: 1px solid #000;
    background-color: #fff;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-indent: 1em;
    margin-top: 5px;
  }
  // .chose-view {
  //     > h1 {
  //         .fz(font-size,36);
  //         color: #2c3e50;
  //         > span {
  //             color: rgb(238, 113, 80);
  //         }
  //     }
  //     > span {
  //         line-height: 10vw;
  //         color: @cl;
  //         .fz(font-size,34);
  //         font-weight: 600;
  //     }

  // }

  // .chose-mychosed {

  //     background-color: #fff;
  //     > div {
  //         padding-top: 20px;
  //         display: -ms-flex;
  //         display: -webkit-box;
  //         display: -ms-flexbox;
  //         display: flex;

  //         span {
  //             .fz(font-size,26);
  //             padding: 6px 10px;
  //             border: 1px solid rgb(111, 111,111);
  //             margin-right: 6vw;
  //             color: rgb(111, 111, 111);
  //             &.active,
  //             &:active {
  //                 color: @cl;
  //                 border-color: @cl;
  //                 -webkit-transform: scale(1.1);
  //                 transform: scale(1.1);
  //             }

  //         }
  //     }
  // }

  // .footer {
  //     width: 100%;
  //     display: -webkit-flex;
  //     display: -ms-flex;
  //     display: flex;
  //     height: 14vw;
  //     position: fixed;
  //     bottom: 0;
  //     left: 0;
  //     background-color: #ffffff;
  //     -moz-user-select: none;
  //     -webkit-user-select: none;
  //     .bt();
  //     .footer-addcar,
  //     .footer-gocar,
  //     .footer-index {
  //         text-align: center;
  //     }

  //     .footer-index {
  //         -webkit-flex: 3;
  //         -ms-flex: 3;
  //         flex: 3;
  //         line-height: 14vw;
  //         height: 14vw;
  //         padding-top: 1.5vw;
  //         border-right-color: #f7f7f7;
  //         border-right-style: solid;
  //         .fz(border-right-width,1);

  //         i {
  //             .fz(font-size,45);
  //         }
  //         &:active {
  //             background-color: #f1f1f1;
  //         }
  //     }

  //     .footer-gocar {
  //         position: relative;
  //         -webkit-flex: 3;
  //         -ms-flex: 3;
  //         flex: 3;
  //         height: 14vw;
  //         line-height: 14vw;
  //         padding-top: 1.6vw;
  //         span {
  //             height: 5.5vw;
  //             width: 5.5vw;
  //             line-height: 5.5vw;
  //             position: absolute;
  //             top: 0.5vw;
  //             right: 5.5vw;
  //             background-color: @cl;
  //             border-radius: 50%;
  //             color: #fff;
  //             .fz(font-size,24);
  //         }
  //         &:active {
  //             background-color: #f1f1f1;
  //         }
  //         i {
  //             .fz(font-size,48);
  //         }
  //     }

  //     .footer-addcar {
  //         -webkit-flex: 6;
  //         -ms-flex: 6;
  //         flex: 6;
  //         line-height: 14vw;
  //         height: 14vw;

  //         color: #fff;
  //         background-color: @cl;
  //         letter-spacing: 0.2vw;
  //         &:active {
  //             background-color: #ff7d00;
  //         }
  //     }
  // }
}
//分享弹出层
.share_box {
  // width: 100%;
  height: 400px;
  border: 1px solid #000;
  width: 99%;
  height: 350px;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 15px;
  border-top-right-radius: 10px;

  h1 {
    width: 100%;
    height: 50px;
    // text-align: center;
    line-height: 50px;
    // border: 1px solid red;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    text-indent: 1em;
    position: relative;
    .share_hide {
      // border: 1px solid #000;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .share_box3 {
    width: 100%;
    height: 50px;

    display: flex;
    position: relative;
    top: 120px;
    align-items: center;
    justify-content: center;
    .btn {
      width: 90%;
      height: 50px;
      // background-color: #e24e56;
      color: #000;
      // margin-top: 50px;
      border-radius: 25px;
      position: absolute;
      bottom: 0;
      border: 1px solid #ccc;
    }
  }
  .share_box2 {
    // border: 1px solid #000;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    // justify-content: center;
    flex-wrap: wrap;
    //  flex-direction: column;
    .box22 {
      // border: 1px solid #000;
      text-align: center;
      > img {
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 30px;
        margin: 15px;
        // border: 1px solid #000;
      }
    }
  }
}
//服务弹出层
.van-popup--bottom {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.boxf {
  width: 100%;
  height: 400px;
  // border: 1px solid #000;
  width: 99%;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 15px;
  border-top-right-radius: 10px;
  h1 {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    // border: 1px solid red;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  .boxf2 {
    height: 120px;
    // border: 1px solid #000;
    line-height: 23px;
    width: 97%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .p {
    padding-left: 25px;
    font-size: 14px;
  }
  .btn {
    width: 100%;
    height: 50px;
    background-color: #e24e56;
    color: #fff;
    margin-top: 50px;
  }
}
//颜色分类弹出层
.yardage {
  border: 1px solid #000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > div {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #ccc;
  }
  > .yardage2 {
    display: flex;
    align-items: center;
    margin: 10px;
    
    > div {
      // border: 1px solid #000;
      &:nth-of-type(1) {
        border: 1px solid #000;
        width: 80px;
        height: 80px;
        flex-grow: 1;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      &:nth-of-type(2) {
        //  border: 1px solid #000;
        display: flex;
        flex-direction: column;
        flex-grow: 3;
        //  width: 150px;
        font-size: 12px;
        height: 30px;
        position: relative;
        text-indent: 2em;
        // top: 30px;
        > span {
          // position: absolute;
          // border: 1px solid #000;
          &:nth-of-type(1) {
            // border: 1px solid #000;
            position: absolute;
            top: 3px;
            left: 1px;
            color: #cd2a34;
            font-size: 8px;
          }
          &:nth-of-type(2) {
            // border: 1px solid #000;
            color: #cd2a34;
          }
          &:nth-of-type(5) {
            position: absolute;
            top: -35px;
            right: 20px;
          }
        }
      }
    }
  }
  .yardage3 {
    // border: 1px solid #000;
    text-indent: 1em;
    height: 60px;
    > button {
      // border: 1px solid #000;
      width: 50px;
      height: 20px;
      border-radius: 12.5px;
      margin-left: 25px;
      margin-top: 5px;
      font-size: 10px;
       &:active {
               background-color: #cd2a34;
               color: #fff;
      }
    }
  }
  .yardage4 {
    // border: 1px solid #000;
    text-indent: 1em;
    height: 60px;
    > button {
      // border: 1px solid #000;
      width: 50px;
      height: 20px;
      border-radius: 12.5px;
      margin-left: 25px;
      margin-top: 5px;
      font-size: 10px;
    }
  }
  .yardage5 {
    border-top: 1px solid #ccc;
    text-indent: 1em;
    display: flex;
    position: relative;
    padding-top: 20px;
    > .counter {
      // border: 1px solid #000;
      position: absolute;
      right: 10px;
    }
    .yardage_btn{
      // border: 1px solid #000;
      width: 100%;
      height: 60px;
      position: absolute;
      bottom: 0px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      >button{
        // border: 1px solid #000;
        width: 140px;
        height: 50%;
        color:#fff;
        font-size: 14px;
        &:nth-of-type(1){
          border-top-left-radius: 15px;
          border-bottom-left-radius: 15px;
          background-color: #ff6565;
        }
        &:nth-of-type(2){
          border-top-right-radius: 15px;
          border-bottom-right-radius: 15px;
          background-color: #cd2a34;
        }
      }

    }
  }
}
//  单选按钮修改
label {
  border-bottom: 1px solid #ccc;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
}
.mint-checkbox-core::after {
  top: 0px;
  left: 5px;
}
.mint-checkbox-input:checked + .mint-checkbox-core {
  background-color: #cd2a34;
  border-color: #cd2a34;
}
.mint-checkbox-core {
  width: 15px;
  height: 15px;
}
</style>
