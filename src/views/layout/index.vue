<template>
<div v-watermark="watermarkConfig">
  <el-container style="min-height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
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
    
    <el-container>
      <el-header style="text-align: right; font-size: 18px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</div>

</template>


<script>
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
      }

    }
  };
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>