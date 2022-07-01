<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
// provide / inject组合(推荐使用)实现页面刷新。
export default {
  name: 'App',
  provide(){
    return{
     reload: this.reload
   }
  },
  data() {
   return {
       isRouterAlive: true
   }
 },
 methods:{
  // 通过 $nextTick()，协助实现。先把 移除，移除后再重新添加，达到刷新当前页面的功能。
   reload(){
    console.log('-----reload--------')
     this.isRouterAlive = false
     this.$nextTick(function(){
       this.isRouterAlive = true
     })
   }
 }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  font-size: 16px;
}
li{
  list-style: none;
}
</style>
