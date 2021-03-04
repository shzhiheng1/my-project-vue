<template>
  <div>
    <div>测试浏览器数据库</div>
    <button @click="addDabse">添加数据</button>
    <button @click="updataDabse">修改数据</button>
    <button @click="removeDabse">删除数据</button>
    <button @click="getAllDabse">读取全部数据</button>
    <button @click="getIdDabse">读取谋行数据</button>
  </div>
</template>

<script>
// import idbKeyval from '../utils/indexedDB';
import {openDB,addDB,updateDB,removeDB,getAllDB,getIdDB} from '../utils/indexedDB'
export default {
  data(){
      return {
       
      }
    },
    mounted(){
      openDB('testDB','person').then(res=>{
        console.log(res)
      })
    },
    methods:{
      // 添加
        addDabse(){
          const params={
            id:'5',
            name:'小黄',
            age:'',
            email:'',
            phone:'18839020027'
          }
           addDB('person',params).then(res=>{
             console.log(res)
          })
        },
        // 修改
        updataDabse(){
          const params={
            id:'5',
            name:'小名',
            age:'30',
            email:'',
            phone:'18839020028'
          }
           updateDB('person',params).then(res=>{
             console.log(res)
           })
        },
        // 删除
        removeDabse(){
          removeDB('person',6).then(res=>{
             console.log(res)
           })
        },
        // 读取全部数据
        getAllDabse(){
           getAllDB('person').then(res=>{
             console.log(res)
           })
        },
        // 读取某行数据
        getIdDabse(){
          getIdDB('person',1).then(res=>{
            console.log(res)
          })
        }
    }
}
</script>

<style>

</style>