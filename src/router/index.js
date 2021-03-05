import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import User from '@/components/User'
import Children from '@/components/Children'
import vuexDome from '../components/vuexDome';
import Tables from '@/components/Tables';
import Echarts from '@/components/echarts';
import Inputs from '@/components/inputs';
import ElTree from '@/components/ElTree';
import Chart from '@/components/Chart';
import IndexedDB from '@/components/IndexedDB'
import Directive from '@/components/directive'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path:'home/Children',
          name:'Children',
          component:Children

        }
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path:'/',
    //   redirect:'/home',//c重定向
    // },
    {
      path:'/User/:id',
      name:'User',
      component:User
    },
    {
      path:'/vuexDome',
      name:'vuexDome',
      component:vuexDome
    },
    {
      path:'/tables',
      name:'Tables',
      component:Tables
    },
    {
      path:'/echarts',
      name:'Echarts',
      component:Echarts
    },
    {
      path:'/inputs',
      name:'Inputs',
      component:Inputs
    },
    {
      path:'/elTree',
      name:'ElTree',
      component:ElTree
    },
    {
      path:'/Chart',
      name:'Chart',
      component:Chart
    },
    {
      path:'/indexedDB',
      name:'IndexedDB',
      component:IndexedDB
    },
    {
      path:'/directive',
      name:'Directive',
      component:Directive
    },
  ]
})
