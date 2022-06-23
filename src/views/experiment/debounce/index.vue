<template>
  <div>
    <h3>防抖操作测试</h3>
    <div>
      <label for="name">名称：</label><input type="text" name="name" id="" placeholder="防抖3秒后触发事件" v-model="name" @input="change">
      <p>输入的内容：{{name}}</p>
      <p>防抖后函数执行的次数：{{count}}</p>
    </div>
    <hr>
     <h3>节流操作测试</h3>
    <div>
      <button @click="handleClick">有效点击次数{{num}}</button>
    </div>
  </div>
</template>
<script>
import {debounce,throttle} from '@u/debounce.js'
export default {
  data(){
    return {
      name:'',
      age:'',
      count:0,
      num:0
    }
  },
  mounted(){},
  methods:{
      /******
       *  @input方法:改变实时触发
       *  参数的函数不能使用箭头函数,否则找不到this;
       * methods中不能使用change(){debounce(xxxx)},因为这样闭包没有执行。
       * ***** */
      change:debounce(function(){
          this.count++
      } ,3000,false),
      // 节流
      handleClick:throttle(function () {
        this.num++
      }, 3000)
      
  }
}
</script>