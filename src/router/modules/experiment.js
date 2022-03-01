import Layout from '@v/layout'
import Echarts from '@v/experiment/echarts'
import Charts from '@v/experiment/charts'
import Inputs from '@v/experiment/inputs'
import MergeCells from '@v/experiment/mergeCells'
import ElTree from '@v/experiment/elTree'
import Driver from '@v/experiment/driver'
import IndexedDB from '@v/experiment/indexedDB'
import Directive from '@v/experiment/directive'
import Socket from '@v/experiment/socket'
import Three from '@v/experiment/three'


const experimentRoutesMap={
      path: '/experiment',
      name: 'Experiment',
      component: Layout, 
      meta: {title: '功能测试',icon: '',roles: [],menu:true},
      children:[
        {
          path:'echarts',
          name:'Echarts',
          component:Echarts,
          meta: {
            title: 'Echarts图标',
            icon: '',
            roles: [],menu:true
          },
        },
        {
          path:'charts',
          name:'Charts',
          component:Charts,
          meta: {title: 'Chart图标',icon: '',roles: [],menu:true},
        },
        {
          path:'inputs',
          name:'Inputs',
          component:Inputs,
          meta: {
            title: '输入框',icon: '',roles: [],menu:true
          }
        },
        {
          path:'mergeCells',
          name:'MergeCells',
          component:MergeCells,
          meta: {title: '合并单元格',icon: '',roles: [],menu:true},
        },
        {
          path:'elTree',
          name:'ElTree',
          component:ElTree,
          meta: {
            title: 'element结构树',
            icon: '',
            roles: [],menu:true
          },
        },
        {
          path:'driver',
          name:'Driver',
          component:Driver,
          meta: {
            title: '帮助导航',
            icon: '',
            roles: [],menu:true
          },
        },
        {
          path:'indexedDB',
          name:'IndexedDB',
          component:IndexedDB,
          meta: {
            title: 'indexedDB数据存储',
            icon: '',
            roles: [],menu:true
          },
        },
        {
          path:'directive',
          name:'Directive',
          component:Directive,
          meta: {
            title: '自定义指令',
            icon: '',
            roles: [],menu:true
          },
        },
        {
          path:'socket',
          name:'Socket',
          component:Socket,
          meta: {
            title: 'socket.io',
            icon: '',
            roles: [],menu:true
          },
        },
        {
          path:'three',
          name:'Three',
          component:Three,
          meta: {
            title: 'webGL',
            icon: '',
            roles: [],menu:true
          },
        },
      ]
}

export default experimentRoutesMap