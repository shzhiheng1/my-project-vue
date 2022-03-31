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
- 4.使用three快捷键：
```js
npm install typings -g --save
cd my-project-vue
typings init
```
## docker 部署vue项目
1. 获取nginx镜像
```
docker pull nginx
```
2. 在项目根目录下创建nginx文件夹，该文件夹下新建文件default.conf
3. 在跟跟目录下创建 Dockerfile 文件
4. 基于该Dockerfile构建vue应用镜像(-t 是给镜像命名 . 是基于当前目录的Dockerfile来构建镜像)
```
  docker build -t vuenginxcontainer .
```
5. 启动 vue app 容器
```
  docker run -p 3000:80 -d --name vueApp vuenginxcontainer
```
6. 检查容器是否启动(访问：http://localhost:3000)
```
docker ps
```


  
