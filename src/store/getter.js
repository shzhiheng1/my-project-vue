const getters={
  count:state=>state.demo.count,
  c:state=>state.demo.count++,//计算属性可更改state中的值
}

export default getters