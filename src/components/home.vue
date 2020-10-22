<template>
    <div class="home">
      <p>首页</p>
      <p @click="goTO">测试vuex用法</p>
      <p>{{msg}}</p>
      <router-link to="/HelloWorld">跳转</router-link>
      <router-link to="/User/111">用户111</router-link>
      <router-link to="/User/222">用户222</router-link>
      <router-link to="/home/Children">孩子</router-link>
    </div>

</template>

<script>
    export default {
        data(){
            return {
              msg: 'Welcome to Your Vue.js App'
            }
        },
      methods:{
          goTO(){
            this.$router.push({'name':'vuexDome'})
          }
      }
    }
</script>

<style scoped>

</style>
