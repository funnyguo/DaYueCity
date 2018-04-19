 <template>
  <!-- 收货地址页 -->
  <div class="wrap">
    <v-header class="header" style="background:#000;">
      <!-- <h1 slot="title" style="color: #fff;">收货地址</h1> -->
    </v-header>
    <div class="mint-checklist page-part">
      <label class="mint-checklist-title">用户名称
        <span class="hm">13612015011</span><br>
        <span class="dz">广东省广州市天河区东圃大马路kfc</span>
      </label>
      <a class="mint-cell">
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <!---->
            <label class="mint-checklist-label">
              <span class="mint-checkbox"><input type="checkbox" class="mint-checkbox-input" value="选项A">
                <span class="mint-checkbox-core"></span>
              </span>
              <span class="mint-checkbox-label">默认地址</span>
            </label>
          </div>
          <div class="mint-cell-value">
            <span></span>
          </div>
          <!---->
        </div>
        <div class="mint-cell-right"></div>
      </a>

    </div>
    <div class="site2">
      <span class="el-icon-edit-outline">&nbsp;编辑</span>&nbsp;&nbsp;
      <span class="el-icon-delete">&nbsp;删除</span>
    </div>
    <!-- <router-ling :to="{ name:'添加收货地址'}" class="sh"> -->
      <button class="sh" @click="shipping2">添加新地址</button>
    <!-- </router-ling> -->
  </div>

</template>

<script>
import Header from "@/common/_header.vue";
export default {
  components: {
    "v-header": Header
  },
  methods:{
    shipping2(){
      this.$router.push({path:'/shipping2'})
    },
  }
};
</script>

<style lang=less scoped>
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
  background-color: #fff;
  .header {
    width: 100%;
    height: 60px;
  }
  .mint-checklist-title {
    font-size: 17px;
    color: #000;
    /* border-bottom: 1px solid #ccc; */
    width: 100%;
    margin: 8px 0px;
    text-indent: 0.5em;
    height: 60px;
    line-height: 30px;
  }
  .hm {
    /* border: 1px solid #000; */
    position: absolute;
    right: 10px;
  }
  .dz {
    font-size: 14px;
    color: #999;
    margin-left: 10px;
  }
  .site2 {
    /* border: 1px solid #000; */
    width: 40%;
    position: absolute;
    top: 150px;
    right: 5px;
    text-align: center;
  }
}
.sh {
  width: 90%;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 16px;
}
button {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #cd2a34;
  border-radius: 25px;
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
</style>