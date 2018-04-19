<template>
<!-- 会员中心 -->
  <div class="vip">
      <h1>会员中心</h1>
      <a href="#">头像</a>
      <div class="header-icon">
          <img src="../../img/mall_bg_guessyoulike.png" alt="">
      </div>
     <div class="name">修改昵称：<input type="text"></div>
     <div class="name">修改手机：
       <input type="text" placeholder="请绑定手机号码">
       <router-link :to="{ name:'会员中心'}" class="xiugai">
          >
        </router-link>
     </div>
     <router-link :to="{ name:'用户页'}">
        <button>确认修改</button>
    </router-link>
    
  </div>
  
</template>

<script>
  export default {
    
  }
</script>

<style lang=less scoped>
.vip{
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  
 h1{
    width: 100%;
    height:50px;
    background-color: #000;
    color: #fff;
    text-align: center;
    line-height: 50px;
   
  }
  a{
    width: 100%;
    height: 50px;
    display:block;
    border: 1px solid #ccc;
    line-height: 50px;
    background-color: #fff;
     padding-left: 10px;
  }
  .name{
    width: 100%;
    height: 50px;
    display:block;
    border: 1px solid #ccc;
    line-height: 50px;
    background-color: #fff;
    padding-left: 10px;
    .xiugai{
      border: 1px solid #fff;
      width: 20px;
      height: 5%;
      position: absolute;
      line-height: 35px;
      right: 10px;
      top: 160px;
      font-size: 30px;
      color: #ccc;

    }
  }
  .header-icon{
    border: 1px solid #ccc;
    width: 48px;
    height:48px;
    position: absolute;
    top: 52px;
    right: 15px;
    border-radius: 48%;
    img{
      width: 50px;
      height: 100%;
      border-radius: 50%;
    }
  }
  button{
    width: 90%;
    height: 48px;
    background-color: #CD2A34;
    color: #fff;
    border-radius: 24px;
    margin-left: 2.5vh;
    margin-top: 50vh;
  }
}
 
</style>