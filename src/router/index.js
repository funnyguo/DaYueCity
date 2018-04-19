import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(['@/views/Index.vue'], resolve)
const Category = resolve => require(['@/views/Category.vue'], resolve)
const CategoryMain = resolve => require(['@/components/category/main.vue'], resolve)
const hotspot = resolve => require(['@/components/index/hotspot.vue'], resolve)
// 绑定手机
const bound = resolve => require(['@/components/index/bound.vue'], resolve)
//搜索页
const search = resolve => require(['@/components/index/search.vue'], resolve)
//商品列表帅选页
const search2 = resolve => require(['@/components/index/search2.vue'], resolve)
//收货地址
const search3 = resolve => require(['@/components/index/search3.vue'], resolve)
//交易成功
const search4 = resolve => require(['@/components/index/search4.vue'], resolve)
//查看物流
const search5 = resolve => require(['@/components/index/search5.vue'], resolve)
//店铺详情
const search6 = resolve => require(['@/components/index/search6.vue'], resolve)
//用户评价
const search7 = resolve => require(['@/components/index/search7.vue'], resolve)
//微信支付
const daishouhuo = resolve => require(['@/views/daishouhuo.vue'], resolve)
//配送方式弹层
const share = resolve => require(['@/components/index/share.vue'], resolve)
//立即购买
const buy = resolve => require(['@/views/buy.vue'], resolve)
//店铺首页->主
const indexS = resolve => require(['@/components/index/indexS.vue'], resolve)
//店铺首页2->新品上架
const indexS2 = resolve => require(['@/components/index/indexS2.vue'], resolve)
//店铺首页1->全部商品
const indexS1 = resolve => require(['@/components/index/indexS1.vue'], resolve)
//支付方式弹层
const share2 = resolve => require(['@/components/index/share2.vue'], resolve)


const Car = resolve => require(['@/views/Car.vue'], resolve)
const User = resolve => require(['@/views/User.vue'], resolve)
const Detail = resolve => require(['@/views/Detail.vue'], resolve)
const Search = resolve => require(['@/views/Search.vue'], resolve)
const Pay = resolve => require(['@/components/car/pay/pay.vue'], resolve)
// const shop = resolve => require(['@/components/shop/shop.vue'], resolve)
const Login = resolve => require(['@/views/login.vue'], resolve)
const Group = resolve => require(['@/views/group.vue'], resolve)
const User3 = resolve => require(['@/views/User3.vue'], resolve)
const User2 = resolve => require(['@/views/User2.vue'], resolve)
const Kfc = resolve => require(['@/views/kfc.vue'], resolve)
const Category2 = resolve => require(['@/views/Category2.vue'], resolve)
const UserFf2 = resolve => require(['@/views/UserFf2.vue'], resolve)
const Ptuan = resolve => require(['@/views/Ptuan.vue'], resolve)
const shipping = resolve => require(['@/views/shipping.vue'], resolve)
const shipping2 = resolve => require(['@/views/shipping2.vue'], resolve)
const shoppingCart = resolve => require(['@/views/shoppingCart.vue'], resolve)
const put1 = resolve => require(['@/views/put1.vue'], resolve)
const User4 = resolve => require(['@/views/User4.vue'], resolve)
const attention = resolve => require(['@/views/attention.vue'], resolve)
const ruzhu = resolve => require(['@/components/index/ruzhu.vue'], resolve)
const queren = resolve => require(['@/views/queren.vue'], resolve)
const queren2 = resolve => require(['@/views/queren2.vue'], resolve)
const ruzhu2 = resolve => require(['@/components/index/ruzhu2.vue'], resolve)
const ruzhu3 = resolve => require(['@/components/index/ruzhu3.vue'], resolve)
const line = resolve => require(['@/views/line.vue'], resolve)
const line2 = resolve => require(['@/views/line2.vue'], resolve)
const line3 = resolve => require(['@/views/line3.vue'], resolve)
const line4 = resolve => require(['@/views/line4.vue'], resolve)
const line5 = resolve => require(['@/views/line5.vue'], resolve)
const bjy = resolve => require(['@/views/bjy.vue'], resolve)
export default new Router({
  routes: [{
    path: '/',
    name: '首页',
    component: Index
  },
  {
    path: '/indexS',
    name: '店铺首页',
    redirect: '/indexS/all',
    component: indexS,
    children: [{
      path: '/indexS/:tab',
      component: indexS
    }]
  },
  {
    path: '/share2',
    name: '支付方式弹层',
    redirect: '/share2/all',
    component: share2,
    children: [{
      path: '/share2/:tab',
      component: share2
    }]
  },
  {
    path: '/indexS1',
    name: '店铺首页',
    redirect: '/indexS1/all',
    component: indexS1,
    children: [{
      path: '/indexS1/:tab',
      component: indexS1
    }]
  },
  {
    path: '/indexS2',
    name: '店铺首页',
    redirect: '/indexS2/all',
    component: indexS2,
    children: [{
      path: '/indexS2/:tab',
      component: indexS2
    }]
  },
  {
    path: '/hotspot',
    name: '热点资讯',
    redirect: '/hotspot/all',
    component: hotspot,
    children: [{
      path: '/hotspot/:tab',
      component: hotspot
    }]
  },
  {
    path: '/share',
    name: '商品详情分享页',
    redirect: '/share/all',
    component: share,
    children: [{
      path: '/share/:tab',
      component: share
    }]
  },
  {
    path: '/bound',
    name: '绑定手机',
    redirect: '/bound/all',
    component: bound,
    children: [{
      path: '/bound/:tab',
      component: bound
    }]
  },
  {
    path: '/search2',
    name: '商品列表帅选页',
    redirect: '/search2/all',
    component: search2,
    children: [{
      path: '/search2/:tab',
      component: search2
    }]
  },
  {
    path: '/search3',
    name: '商品列表帅选页',
    redirect: '/search3/all',
    component: search3,
    children: [{
      path: '/search3/:tab',
      component: search3
    }]
  },
  {
    path: '/search4',
    name: '交易成功',
    redirect: '/search4/all',
    component: search4,
    children: [{
      path: '/search4/:tab',
      component: search4
    }]
  },
  {
    path: '/search5',
    name: '查看物流',
    redirect: '/search5/all',
    component: search5,
    children: [{
      path: '/search5/:tab',
      component: search5
    }]
  },
  {
    path: '/search6',
    name: '店铺详情',
    redirect: '/search6/all',
    component: search6,
    children: [{
      path: '/search6/:tab',
      component: search6
    }]
  },
  {
    path: '/search7',
    name: '用户评价',
    redirect: '/search7/all',
    component: search7,
    children: [{
      path: '/search7/:tab',
      component: search7
    }]
  },
  {
    path: '/search',
    name: '搜索页',
    redirect: '/search/all',
    component: search,
    children: [{
      path: '/search/:tab',
      component: search
    }]
  },
  {
    path: '/ruzhu',
    name: '入驻',
    redirect: '/ruzhu/all',
    component: ruzhu,
    children: [{
      path: '/ruzhu/:tab',
      component: ruzhu
    }]
  },
  {
    path: '/ruzhu2',
    name: '商家入驻信息',
    redirect: '/ruzhu2/all',
    component: ruzhu2,
    children: [{
      path: '/ruzhu2/:tab',
      component: ruzhu2
    }]
  },
  {
    path: '/ruzhu3',
    name: '审核通过',
    redirect: '/ruzhu3/all',
    component: ruzhu3,
    children: [{
      path: '/ruzhu3/:tab',
      component: ruzhu3
    }]
  },
  {
    path: '/category',
    name: '分类页',
    redirect: '/category/all',
    component: Category,
    children: [{
      path: '/category/:tab',
      component: CategoryMain
    }]
  },
  {
    // 优惠券
    path: '/Kfc',
    name: '优惠券',
    redirect: '/Kfc/all',
    component: Kfc,
    children: [{
      path: '/Kfc/:tab',
      component: Kfc
    }]
  },
  {
    // 确认订单
    path: '/queren',
    name: '确认订单',
    redirect: '/queren/all',
    component: queren,
    children: [{
      path: '/queren/:tab',
      component: queren
    }]
  },
  {
    // 确认订单,支付完成
    path: '/queren2',
    name: '确认订单',
    redirect: '/queren2/all',
    component: queren2,
    children: [{
      path: '/queren2/:tab',
      component: queren2
    }]
  },
  {
    // 订单详情
    path: '/line',
    name: '订单详情',
    redirect: '/line/all',
    component: line,
    children: [{
      path: '/line/:tab',
      component: line
    }]
  },
  {
    // 买家已付款
    path: '/line2',
    name: '买家已付款',
    redirect: '/line2/all',
    component: line2,
    children: [{
      path: '/line2/:tab',
      component: line2
    }]
  },
  {
    // 买家已发货
    path: '/line3',
    name: '买家已发货',
    redirect: '/line3/all',
    component: line3,
    children: [{
      path: '/line3/:tab',
      component: line3
    }]
  },
  {
    // 交易完成
    path: '/line4',
    name: '交易完成',
    redirect: '/line4/all',
    component: line4,
    children: [{
      path: '/line4/:tab',
      component: line4
    }]
  },
  {
    // 评价
    path: '/line5',
    name: '评价',
    redirect: '/line5/all',
    component: line5,
    children: [{
      path: '/line5/:tab',
      component: line5
    }]
  },
  {
    path: '/group',
    name: '拼团商城',
    redirect: '/group/all',
    component: Group,
    children: [{
      path: '/group/:tab',
      component: Group
    }]
  },
  {
    path: '/buy',
    name: '立即购买',
    redirect: '/buy/all',
    component: buy,
    children: [{
      path: '/buy/:tab',
      component: buy
    }]
  },
  {
    path: '/Ptuan',
    name: '团购商品详情',
    redirect: '/Ptuan/all',
    component: Ptuan,
    children: [{
      path: '/Ptuan/:tab',
      component: Ptuan
    }]
  },
  {
    path: '/UserFf2',
    name: '查看全部订单',
    redirect: '/UserFf2/all',
    component: UserFf2,
    children: [{
      path: '/UserFf2/:tab',
      component: UserFf2
    }]
  }, {
    path: '/UserFf2',
    name: '待收货',
    redirect: '/UserFf2/all',
    component: UserFf2,
    children: [{
      path: '/UserFf2/:tab',
      component: UserFf2
    }]
  },
  {
    path: '/daishouhuo',
    name: '微信支付',
    redirect: '/daishouhuo/all',
    component: daishouhuo,
    children: [{
      path: '/daishouhuo/:tab',
      component: daishouhuo
    }]
  },
  {
    path: '/UserFf2',
    name: '待付款',
    redirect: '/UserFf2/all',
    component: UserFf2,
    children: [{
      path: '/UserFf2/:tab',
      component: UserFf2
    }]
  },
  {
    path: '/UserFf2',
    name: '待发货',
    redirect: '/UserFf2/all',
    component: UserFf2,
    children: [{
      path: '/UserFf2/:tab',
      component: UserFf2
    }]
  },
  {
    path: '/UserFf2',
    name: '完成',
    redirect: '/UserFf2/all',
    component: UserFf2,
    children: [{
      path: '/UserFf2/:tab',
      component: UserFf2
    }]
  },
  {
    path: '/shipping',
    name: '收货地址',
    redirect: '/shipping/all',
    component: shipping,
    children: [{
      path: '/shipping/:tab',
      component: shipping
    }]
  },
  {
    path: '/shipping2',
    name: '添加收货地址',
    redirect: '/shipping2/all',
    component: shipping2,
    children: [{
      path: '/shipping2/:tab',
      component: shipping2
    }]
  },
  {
    path: '/attention',
    name: '关注',
    redirect: '/attention/all',
    component: attention,
    children: [{
      path: '/attention/:tab',
      component: attention
    }]
  },
  {
    path: '/put1',
    name: '收藏夹',
    redirect: '/put1/all',
    component: put1,
    children: [{
      path: '/put1/:tab',
      component: put1
    }]
  },
  // 充值中心
  {
    path: '/User3',
    name: '充值中心',
    redirect: '/User3/all',
    component: User3,
    children: [{
      path: '/User3/:tab',
      component: User3
    }]
  },
  {
    path: '/User2',
    name: '会员中心',
    redirect: '/User2/all',
    component: User2,
    children: [{
      path: '/User2/:tab',
      component: User2
    }]
  },
  {
    path: '/User4',
    name: '会员充值',
    redirect: '/User4/all',
    component: User4,
    children: [{
      path: '/User4/:tab',
      component: User4
    }]
  },
  {
    path: '/bjy',
    name: '编辑页',
    redirect: '/bjy/all',
    component: bjy,
    children: [{
      path: '/bjy/:tab',
      component: bjy
    }]
  }, {
    path: '/car',
    name: '购物车页',
    component: Car
  },
  // 购物车
  {
    path: '/shoppingCart',
    name: '购物车',
    redirect: '/shoppingCart/all',
    component: shoppingCart,
    children: [{
      path: '/shoppingCart/:tab',
      component: shoppingCart
    }]
  },
  {

    
    path: '/car/pay',
    name: '支付页',
    component: Pay
  },
  {
    path: '/user',
    name: '用户页',
    component: User,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
    },
  },

  {
    path: '/Category2',
    name: '列表页',
    component: Category2
  }, {
    path: '/detail',
    name: '详情页',
    component: Detail
  }, {
    path: '/search',
    name: '搜索页',
    component: Search
  }, {
    path: '/login',
    name: '登录页',
    component: Login
  }
  ]
})
