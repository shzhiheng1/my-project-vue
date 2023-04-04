import Layout from '@v/layout'
// import Echarts from '@v/experiment/echarts'
// import Charts from '@v/experiment/charts'
// import Inputs from '@v/experiment/inputs'
// import MergeCells from '@v/experiment/mergeCells'
// import ElTree from '@v/experiment/elTree'
// import Driver from '@v/experiment/driver'
// import IndexedDB from '@v/experiment/indexedDB'
// import Directive from '@v/experiment/directive'
// import Socket from '@v/experiment/socket'
// import Three from '@v/experiment/three'

const experimentRoutesMap={
      path: '/experiment',
      name: 'Experiment',
      component: Layout, 
      meta: {title: '功能测试',icon: '',roles: [],menu:true},
      children:[
        {
          path:'echarts',
          name:'Echarts',
          component:()=>import('@v/experiment/echarts'),
          meta: {
            title: 'Echarts图标',
            icon: '',
            roles: [],menu:true
          },
        },
        {
          path:'charts',
          name:'Charts',
          component:()=>import('@v/experiment/charts'),
          meta: {title: 'Chart图标',icon: '',roles: [],menu:true},
        },
        {
          path:'inputs',
          name:'Inputs',
          component:import('@v/experiment/inputs'),
          meta: {
            title: '输入框',icon: '',roles: [],menu:true
          }
        },
        {
          path:'mergeCells',
          name:'MergeCells',
          component:()=>import('@v/experiment/mergeCells'),
          meta: {title: '合并单元格',icon: '',roles: [],menu:true},
        },
        {
          path:'elTree',
          name:'ElTree',
          component:()=>import('@v/experiment/elTree'),
          meta: {
            title: 'element结构树',
            icon: '',
            roles: [],menu:true
          },
        },
        {
          path:'driver',
          name:'Driver',
          component:()=>import('@v/experiment/driver'),
          meta: {
            title: '帮助导航',
            icon: '',
            roles: [],menu:true
          },
        },
        {
          path:'indexedDB',
          name:'IndexedDB',
          component:()=>import('@v/experiment/indexedDB'),
          meta: {
            title: 'indexedDB数据存储',
            icon: '',
            roles: [],menu:true
          },
        },
        {
          path:'directive',
          name:'Directive',
          component:()=>import('@v/experiment/directive'),
          meta: {
            title: '自定义指令',
            icon: '',
            roles: [],menu:true
          },
        },
        {
          path:'socket',
          name:'Socket',
          component:()=>import('@v/experiment/socket'),
          meta: {
            title: 'socket.io',
            icon: '',
            roles: [],menu:true
          },
        },
        {
          path:'three',
          name:'Three',
          component:()=>import('@v/experiment/three'),
          meta: {
            title: 'webGL',
            icon: '',
            roles: [],menu:true
          },
        },
        {
          path:'base',
          name:'Base',
          component:()=>import('@v/experiment/three/base'),
          meta: {
            title: 'webGL',
            icon: '',
            roles: [],menu:false
          },
        },
        {
          path:'debounce',
          name:'Debounce',
          component:()=>import('@v/experiment/debounce/index.vue'),
          meta:{
            title:'防抖',
            icon:'',
            roles:[],
            menu:true
          }
        },
        {
          path:'unitTesting',
          name:'UnitTesting',
          component:()=>import('@v/experiment/unitTesting/index.vue'),
          meta:{
            title:'单元测试',
            icon:'',
            roles:[],
            menu:true
          }
        },
        {
            path:'understand',
              name:'Understand',
              component:()=>import('@v/experiment/understand/index.vue'),
              meta:{
                title:'js的理解',
                icon:'',
                roles:[],
                menu:true
              },
        },
        {
          path:'copy',
          name:'Copy',
          component:()=>import('@v/experiment/understand/copy/index.vue'),
          meta:{
            title:'js深浅copy',
            icon:'',
            roles:[],
            menu:false
          }
        }
      ]
}

export default experimentRoutesMap