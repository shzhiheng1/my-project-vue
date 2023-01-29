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
/*使用单独引入组件*/ 
import { Cascader } from 'shi-element-ui';
Vue.component('DustoCascader',Cascader);
/*拖拽插件*/
import VueDND from 'awe-dnd'
Vue.use(VueDND)
/*注册全局指定*/
import tooltie from './directive/red/tooltie.js'
Vue.use(tooltie)
// 前端导出Excel
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)

// 上传文件夹的插件
import uploader from 'vue-simple-uploader'
Vue.use(uploader)

// 设置获取token，保存到sessionStorage中
import createToken from '@/utils/createToken.js'
sessionStorage.setItem('token', createToken());

// socket.io引入
// import SocketIO  from 'socket.io-client';
// import VueSocketIO from 'vue-socket.io';
// const _SOCKET_API=process.env.SOCKET_API
const node_dev=process.env.NODE_ENV
// if(node_dev==='production'){
//   Vue.use(new VueSocketIO({
//     debug:true,
//     connection: SocketIO(_SOCKET_API),
//     // vuex: {// 不需要用到vuex这个可以不加
//     //   store,
//     //   actionPrefix: 'SOCKET_',
//     //   mutationPrefix: 'SOCKET_'
//     // }
//   }))
// }
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
// 自定义全局指令
import focus from '@/directive/focus';
Vue.directive('focus',focus)

// 水印指令
import  '@/directive/watermark.js';

// 路由拦截
import './permission'
// 开发环境使用mock
if(node_dev==='development'){
    // import('./mock')
}
// 引入多语言
import i18n from './lang';
// Vue.use(Element, {
//   // size: Cookies.get('size') || 'medium', // set element-ui default size
//   i18n: (key, value) => i18n.t(key, value)
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
