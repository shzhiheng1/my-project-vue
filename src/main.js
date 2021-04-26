import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex);
import store from './store/store';
Vue.config.productionTip = false
/*element插件*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/*引入自定义主题*/ 
import '@/assets/theme.scss'
Vue.use(ElementUI)
/*拖拽插件*/
import VueDND from 'awe-dnd'
Vue.use(VueDND)
/*注册全局指定*/
import tooltie from './directive/red/tooltie.js'
Vue.use(tooltie)
// 设置获取token，保存到sessionStorage中
import createToken from '@/utils/createToken.js'
sessionStorage.setItem('token', createToken());

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
