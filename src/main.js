import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex);
// import store from './store/store';
import store from './store/index'
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
// socket.io引入
import SocketIO  from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
const _SOCKET_API=process.env.SOCKET_API
Vue.use(new VueSocketIO({
  debug:true,
  connection: SocketIO(_SOCKET_API),
  // vuex: {// 不需要用到vuex这个可以不加
  //   store,
  //   actionPrefix: 'SOCKET_',
  //   mutationPrefix: 'SOCKET_'
  // }
}))
// 帮助引导
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
Vue.prototype.$driver = new Driver({
  doneBtnText: '完成', // Text on the final button
  closeBtnText: '关闭', // Text on the close button for this step
  stageBackground: '#fff', // Background color for the staged behind highlighted element
  nextBtnText: '下一步', // Next button text for this step
  prevBtnText: '上一步', // Previous button text for this step
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
