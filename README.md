# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### socket.io的使用：
 - 1. 安装
  ```
   yarn add  socket.io-client vue-socket.io --dev-save
  ```
 - 2. main.js 中引入
```js
  import SocketIO  from 'socket.io-client';
  import VueSocketIO from 'vue-socket.io';
  Vue.use(new VueSocketIO({
    debug:true,
    connection: SocketIO('http://localhost:3000'),
    // vuex: {// 不需要用到vuex这个可以不加
    //   store,
    //   actionPrefix: 'SOCKET_',
    //   mutationPrefix: 'SOCKET_'
    // }
  }))
```
- 3. 组件中使用：
```js
  sockets:{
    connect(){
      console.log('--------socket链接成功--------')
    },
    receiveMsg(data){
      // receiveMsg是后端定义的方法名
      console.log('------------接收服端返回数据，---------')
    }
  },
  mounted(){
      this.$socket.emit('sendMsg', '发送数据到后端服务');
  },
```
