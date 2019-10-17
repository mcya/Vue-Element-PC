import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/theme/theme-tiame-red/index.css'

// import './assets/theme/theme-hot-red/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import routes from './routes'
// import Mock from './mock'
// Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

// http请求配置
import VueResource from 'vue-resource' //npm install
Vue.use(VueResource)

// 如果服务器无法处理编码为application/json的请求，可以启用emulateJSON选项。启用之后，请求会以application/x-www-form-urlencoded为MIME type，就像普通的HTML表单一样。
Vue.http.options.emulateJSON = true;
// 跨域
Vue.http.options.crossOrigin = true;
// emulateHTTP 默认值为:false,当值为true是，用HTTP的POST方式PUT，PATCH，DELETE等请求，并设置请求头字段HTTP_Method_Override为原始请求方法。
Vue.http.options.emulateHTTP = true;

Vue.prototype.HOST = '/api'; //添加 HOST 指向


Vue.config.productionTip = false

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
})

/******************路由拦截 start******************/
router.beforeEach(function(to, from, next) {
  //不需要授权的页面,放行
  if (to.meta.isIgnoreAuth == true) { //路由配置
    next();
    return;
  }

  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user')); //或者通过 store.state 来控制
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }

})
router.afterEach((to, from, next) => {})
/******************路由拦截 end******************/

//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')
