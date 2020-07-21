//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';

/* Layout */
import Layout from '@/layout'

//第三方库需要use一下才能用
Vue.use(VueRouter)

/**
 * Note: 路由配置项
 *
 * hidden: true                   // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true               // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect           // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'             // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    roles: ['admin','editor']    // 设置该路由进入的权限，支持多个权限叠加
    title: 'title'               // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             // 设置该路由的图标，对应路径src/icons/svg
    breadcrumb: false            // 如果设置为false，则不会在breadcrumb面包屑中显示
  }
 */

const constantRoutes = [
  //单个路由均为对象类型，path代表的是路径，component代表组件
  {
    path: '/',
    component: (resolve) => require(['@/views/index'], resolve),
    redirect: '/index',
    // hidden: true
  },
  {
    path: '/login',
    component: (resolve) => require(['@/views/login'], resolve),
    hidden: true
  },
  {
    path: '/home',
    component: (resolve) => require(['@/views/home'], resolve),
    hidden: true
  },
  {
    path: '/reload',
    component: (resolve) => require(['@/views/reload'], resolve),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: (resolve) => require(['@/views/index'], resolve),
        name: '首页',
        meta: {title: '首页', icon: 'dashboard', noCache: true, affix: true}
      }
    ]
  },
]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: constantRoutes,
  scrollBehavior: () => ({y: 0})
});

//抛出这个这个实例对象方便外部读取以及访问
export default router
