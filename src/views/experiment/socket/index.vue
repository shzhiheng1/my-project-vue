<template>
  <div>
    <h1>socket.io</h1>
    <input type="text" v-model="msg">
    <button @click="clickButton">发送</button>
    <div>
       <p v-for="(item,index) in msgList" :key="index">
         输入的第{{index+1}}个数据为:{{item}}
       </p>
    </div>
  </div>
</template>
<script>
export default {
  sockets:{
    connect(){
      console.log('--------socket链接成功--------')
      // this.id=this.$socket.id;
      // this.$socket.emit('sendMsg','ssss')
    },
    receiveMsg(data){
      console.log('------------接收服务端socket返回的数据---------',data)
      this.msgList.push(data)
    }
  },
  data(){
    return{
      msg:'',
      msgList:[],
    }
  },
  mounted(){
      // this.$socket.emit('sendMsg', '发送数据到后端服务');       //触发socket连接
  },
  methods:{
    clickButton(){
      if(this.msg){
          this.$socket.emit('sendMsg',this.msg)
          this.$message({
            message:'通过socke.io发送数据成功',
            type:'success'
          })
          this.msg=''
      }else{
        this.$message({
            message: '请输入内容',
            type: 'warning'
          });
        }
        return
      }
  }
}
</script>
