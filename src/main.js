import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import Cookies from 'js-cookie'
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router/index.js';
import store from './store'
// import './permission.js';
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/assets/styles/element-variables.scss'
import '@/assets/styles/index.scss' // global css
import '@/assets/icons' // icon

Vue.config.productionTip = false
Vue.use(ElementUI,{
    size: Cookies.get('size') || 'medium' // set element-ui default size
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
