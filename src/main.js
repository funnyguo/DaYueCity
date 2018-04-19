import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import axios from "axios"
import router from './router'
import store from '@/vuex/store.js'   //vuex
import api from '@/http/api.js'       //http请求
import less from 'less'
import Mint from 'mint-ui';    //移动端UI
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/index.js'
// import { Button } from 'vant';
import $ from 'jquery'
import { SubmitBar } from "vant";
Vue.use(SubmitBar);
import { AddressList } from 'vant';
Vue.use(AddressList);
import { Icon } from 'vant';
Vue.use(Icon);
import { Uploader } from 'vant';
Vue.use(Uploader);
import { Area } from 'vant';
Vue.use(Area);
import { Collapse, CollapseItem } from 'vant';
Vue.use(Collapse).use(CollapseItem);
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import { Stepper } from 'vant';
Vue.use(Stepper);
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
import { Field } from 'vant';
Vue.use(Field);
import { AddressEdit } from 'vant';
Vue.use(AddressEdit);
import { Step, Steps } from 'vant';
Vue.use(Step).use(Steps);
import { Swipe, SwipeItem } from 'vant';
import { Sku } from 'vant';
Vue.use(Sku);
import { Popup } from 'vant';
Vue.use(Popup);
import { Radio } from 'vant';
Vue.use(Radio);

import { List } from 'vant';

Vue.use(List);

// import { Lazyload } from 'vant';
// Vue.use(Lazyload, options);

import { PullRefresh } from 'vant';
Vue.use(PullRefresh);

// import data from '../mock/sku';
// import { LIMIT_TYPE } from '../../../packages/sku/constants';

Vue.use(Swipe).use(SwipeItem);
// Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(Mint);

Vue.prototype.$http = axios
axios.defaults.baseURL="http://dayue.mrants.net"

Vue.config.productionTip = false
Vue.prototype.$api = api;

import MyFilter from './filter'
Vue.use(MyFilter);

// 用钩子函数beforeEach()对路由进行判断

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 需要权限,进一步进行判断
      if (store.state.login.token) {  // 通过vuex state获取当前的token是否存在
        next();
      }
      else {    //如果没有权限,重定向到登录页,进行登录
        next({
          path: '/login',
          // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    }
    else { //不需要权限 直接跳转
      next();
    }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
