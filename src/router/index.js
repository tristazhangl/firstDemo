import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home');  // r指的是Resolve，Promise的回调函数
const ReservationDetail = () => import('@/pages/ReservationDetail');
const ReservationList = () => import('@/pages/ReservationList');
// 以下两种导入方式不能用，这样会导致所有页面全部一下子加载，影响加载效率
// import ReservationDetail from '@/pages/ReservationDetail';
// import ReservationList from '@/pages/ReservationList'
Vue.use(Router);
// survey
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/ReservationList'  // 任何没有具体路径的访问，我都让它重定向到home主页，重定向在限制用户手动修改URL时误操作很管用
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '主页',
        allowBack: false
      },
      component: home
    },
    {
      path : '/ReservationDetail',
      name : 'ReservationDetail',
      meta: {
        title: '我的预约信息',
        allowBack: true
      },
      component : ReservationDetail
    },
    {
      path : '/ReservationList',
      name : 'ReservationList',
      meta: {
        title: '我的预约信息',
        allowBack: false
      },
      component : ReservationList
    }
  ]
})
