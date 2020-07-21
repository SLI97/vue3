import router from './index'
// import store from '../store/index'
// import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css' // Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

/**
 * 路由守卫-进入路由之前调用
 */
const whiteList = ['/login','/reload'] // 不重定向白名单
router.beforeEach((to, from, next) => {
    // NProgress.start()
    console.log(getToken())
    if (getToken()) {
        if (whiteList.indexOf(to.path) !== -1) {
            next({ path: '/' })
            // NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        } else {

            // if (store.getters.roles.length === 0) {
                // store.dispatch('GetUserInfo').then(res => { // 拉取用户信息
                // 	router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
                // 	next({...to, replace: true}) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                // }).catch((err) => {
                // 	store.dispatch('FedLogOut').then(() => {
                // 		Message.error(err || 'Verification failed, please login again')
                // next({ path: '/' })
                // 	})
                // })
            // } else {
                next()
            // }
        }
        // NProgress.done()
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }

    }
})

// //多个相同的路由守卫会按顺序执行，不要打乱
// router.beforeEach((to, from, next) => {
//     next()
// })

// router.afterEach((to, from, next) => {
//     // NProgress.done() // 结束Progress
// })
