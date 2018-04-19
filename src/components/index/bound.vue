<template>
  <div class="box">
    <h1>绑定手机</h1>
    <van-cell-group>
      <van-field v-model="phone" label="手机号" placeholder="请输入手机号"/>
      <van-field center v-model="sms" label="短信验证码" placeholder="请输入短信验证码" icon="clear" @click-icon="sms = ''">
        <van-button slot="button" size="small" type="primary" class="yanzheng">发送验证码</van-button>
      </van-field>
      <van-field v-model="password" type="password" label="登录密码" placeholder="请输入你的登录密码" required />
       <van-field v-model="password" type="password" label="确认密码" placeholder="请再次输入你的登录密码" required />
    </van-cell-group>
    <div class="btnb">
      <button>立即绑定</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">

.box{
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
h1 {
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 50px;
  background-color: #000;
  color: #fff;
}

.yanzheng{
  border:1px solid #5788d6;
  border-radius: 5px;
  // width: 50px;
  // height: 100px;
  // font-size: 14px;
  color: #5788d6;
}
.btnb{
  width: 100%;
  height: 60px;
  // border: 1px solid #000;
  display: flex;
  justify-content:center;
  align-items: center;
  margin-top: 50px;
  >button{
    width:80% ;
    height: 80%;
    // border: 1px solid #000;
    border-radius: 40px;
    background-color: #cd2a34;
    color: #fff;
    
  }
}
}
</style>