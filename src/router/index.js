import Vue from 'vue'
import Router from 'vue-router'
import baseRoutesMap from './modules/base'
import experimentRoutesMap from './modules/experiment'

import Login from '@/views/login'
import Error from '@/views/error/404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home',//c重定向
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    baseRoutesMap,
    experimentRoutesMap,
    {
      path:'/*',
      name:'Error',
      component:Error
    }
  ]
})
