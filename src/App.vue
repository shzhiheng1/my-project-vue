<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>


// provide / inject组合(推荐使用)实现页面刷新。
export default {
  // socket
  sockets: {
        //查看socket是否连接成功
        connect(data) {
            console.log("socket.io链接成功");
            // 向服务端发消息
        },
        disconnect() {
            console.log("socket.io断开链接");
        }, //检测socket断开链接
        reconnect(data) {
            console.log("socket.io重新链接",data);
        },
        //客户端接收后台传输的socket事件"sendLogin"
        sendLogin(data) {
            console.log("收到后端数据：", data); //接收的消息
            this.$notify({
              title: '消息',
              message: data,
              type:'warning',
              duration: 10000
            });
        },
        // message(data){
        //     console.log(data)
        // }
    },
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
 mounted(){},
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
