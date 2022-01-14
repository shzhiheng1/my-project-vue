import Layout from '@v/layout'
import Home from '@v/base/home'
import Library from '@v/base/library'
import DropTable from '@v/base/dropTable'
import VuexDemo from '@v/base/vuexDemo'
import User from '@v/base/user'



const baseRoutesMap=
  {
    path: '/home',
    component: Layout,
    meta: {title: '基础',icon: '',roles: [],menu:true},
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {title: '首页',icon: '',roles: [],menu:true},
      },
      {
        path: 'library',
        name: 'Library',
        component: Library,
        meta: {title: '资料页面',icon: '',roles: [],menu:true},
      },
      {
        path:'user/:id',
        name:'User',
        component:User,
        meta: {title: '页面传参',icon: '',roles: [],menu:false},
      },
      {
        path:'vuexDemo',
        name:'VuexDemo',
        component:VuexDemo,
        meta: {title: 'vuex示例',icon: '',roles: [],menu:true},
      },
      {
        path:'dropTable',
        name:'DropTable',
        component:DropTable,
        meta: {title: '拖拽表格',icon: '',roles: [],menu:true},
      },
    ]
  }

  export default baseRoutesMap
