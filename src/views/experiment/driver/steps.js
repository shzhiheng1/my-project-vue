const steps=[
  {
    element:'#step01',
    popover:{
      title:'我是第一步title',
      description:'这是描述的内容',
      // position:'bottom'
    },
    onNext:(el)=>{
      console.log('点击了下一步')
    },//下一步触发的函数
  },
  {
    element:'#step02',
    popover:{
      title:'我是第二步title',
      description:'这是描述的内容',
      // position:'bottom'
    },
    onPrevious: (Element) => {
      console.log('---上一步')
    },                // 上一步函数
  },
  {
    element:'#step03',
    popover:{
      title:'我是第三步title',
      description:'这是描述的内容',
      // position:'bottom'
    },
    onDeselected: (Element) => {
      console.log('----销毁------')
    },            // 销毁时触发的函数 
  }
]

export default steps