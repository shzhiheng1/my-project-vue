<template>
<div v-watermark="watermarkConfig">
  <el-container style="min-height: 100vh; border: 1px solid #eee">
    <el-aside class="layout-aside" width='200px'>
      <el-menu :default-openeds="defaultOpened" :default-active="defaultActive">
        <el-submenu :index="item.path" v-for="(item) in slideMunu" :key="item.name">
          <template slot="title"><i class="el-icon-message"></i>{{item.meta.title}}</template>
          <el-menu-item-group>
            <div v-for="Item in item.children" :key="Item.name">
                <el-menu-item v-if="Item.meta.menu" :index="Item.name" @click="handleActive(item.path,Item.path,Item.name)">
                    {{Item.meta.title}}
                </el-menu-item>
            </div>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    
    <el-container class="layout-container">
      <el-header class="layout-header">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="handleExit">退出登录</el-dropdown-item>
            <el-dropdown-item @click.native="handleInfo">用户信息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{email}}</span>
      </el-header>
      
      <el-main class="layout-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</div>

</template>


<script>
import {setCookie} from '@/utils/cookie.js'
import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        slideMunu:[],
        defaultActive:'home',
        defaultOpened:[],
        watermarkConfig:{//水印
                    hide:false,
                    text:'shizhiheng',
                    font:'16px 微软雅黑',
                    textColor:'#ccc',
                    width : 200, //水印文字的水平间距
                    height : 150,  //水印文字的高度间距（低于文字高度会被替代）
                    extRotate : -30 //-90到0， 负数值，不包含-90
        },
      }
    },
    computed:{
      ...mapGetters(['email'])
    },
    watch:{
      'email': {
        handler(newVal, oldVal) {
          // 刷新时重新发送消息，后端更改socket.id
          if(newVal){
             this.$socket.emit('reconnection', { email:newVal });
          }
        },
        deep: true,
        // immediate: true
      }
    },
    mounted(){
      const menu= this.$router.options.routes.filter((item)=>item.meta); 
      this.slideMunu= menu.filter((item)=>item.meta.menu); 
      this.defaultActive=this.$route.name
      const fullPath=this.$route.fullPath
      let arr= new Array(); //定义一数组
      arr=fullPath.split("/"); //字符分割
      this.defaultOpened=['/'+arr[1]]
    },
    methods:{
      handleActive(basePath,path,name){
        if(this.$route.name===name) return
        if(path){
          this.$router.push({path:basePath+'/'+path})
        }else{
          this.$router.push({path:basePath})
        }
      },
      // 退出登录
      handleExit(){
        setCookie('token','',0)
        this.$router.replace({path:'/login'})
      },
     // 用户信息
     handleInfo(){
      this.$store.dispatch('getUserInfo')
     }
    }
  };
</script>
<style scoped>
  .layout-aside{
    background-color: rgb(238, 241, 246);
    color: #333;
    height: 100vh;
    overflow-y: scroll;
  }
  .layout-aside::-webkit-scrollbar { width: 0 !important }
  .layout-container{
    height: 100vh;
  }
  .layout-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    text-align: right; 
    font-size: 18px;
  }
  .layout-main{
    height: calc(100vh - 60px);
    overflow-y: scroll;
  }
  .layout-main::-webkit-scrollbar { width: 0 !important }


</style>