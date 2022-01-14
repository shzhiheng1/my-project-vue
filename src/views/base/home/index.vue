<template>
    <div class="home">
      <p>首页------当前的运行环境为：{{node_env}}</p>
      <p @click="goTO">测试vuex用法</p>
      <p @click="onAdd">测试watch监听数组</p>
      <p>{{msg}}</p>
      <router-link to="/helloWorld">跳转</router-link>
      <router-link to="/user/111">用户111</router-link>
      <router-link to="/user/222">用户222</router-link>
      <router-link to="/indexedDB">测试浏览器数据库</router-link>
      <router-link to="/directive">测试指令</router-link>
    </div>

</template>

<script>
    export default {
        data(){
            return {
              msg: 'Welcome to Your Vue.js App',
              node_env:process.env.NODE_ENV,
              arr:['1',2,{name:''},'a'],
              person:{
                name:''
              }
            }
        },
        watch:{
          'arr.length':{
                handler:function(newValue,oldValue){
                    console.log(newValue)
                },
                deep:true,
                 // 代表在wacth里声明了之后立即先去执行handler方法
                immediate:true
            },
            'person':{
               handler:function(newValue,oldValue){
                    console.log(newValue,oldValue)
                },
                deep:true,
            },
            'setName':{
               handler:function(newValue,oldValue){
                    console.log(newValue,oldValue)
                },
                deep:true,
            }
        },
        computed:{
          setName:function () {
            return this.arr[2].name
          }
        },
      methods:{
          goTO(){
            this.$router.push({'name':'vuexDome'})
          },
          onAdd:function(){
            // console.log(this.arr[1])
                // this.arr[1]+=5;
                this.arr.push('a')
                this.arr[2].name+="小王"
                this.person.age=12
               console.log(this.person)
            }
      }
    }
</script>

<style scoped>

</style>
