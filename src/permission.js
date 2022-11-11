
import router from './router'
import {getCookie} from '@/utils/cookie.js'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


// 全局路由前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start()//显示进度条
  let token =getCookie('token')
  if(token){
      if(to.name==='Login'||to.name==='Register'){
        next({path:'/home'})
      }else{
        next()
      }
  }else{
    if(to.name==='Login'||to.name==='Register'){
      next()
    }else{
      next({name:'Login'})
    } 
  }
})

// 全局理由后置守卫
router.afterEach((to,form)=>{
  NProgress.done()//完成进度条
})
