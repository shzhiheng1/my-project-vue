
import router from './router'
import {getCookie} from '@/utils/cookie.js'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import getPageTitle from './utils/pageTitle'

import store from '@/store'

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start()//显示进度条
  let token =getCookie('token')
  document.title=getPageTitle(to.meta.title)

  if(token){
      if(to.name==='Login'||to.name==='Register'){
        next({path:'/home'})
      }else{
        next()
        // 如果用户刷新重新，获取的用户信息存在store。加计时器为了解决mock测试的bug
        setTimeout(() => {
          if(!store.getters.email){
            store.dispatch('getUserInfo')
          }
        }, 500);
      }
  }else{
    if(to.name==='Login'||to.name==='Register'){
      next()
    }else{
      next({name:'Login'})
      NProgress.done()//完成进度条
    } 
  }
})

// 全局理由后置守卫
router.afterEach((to,form)=>{
  NProgress.done()//完成进度条
})
