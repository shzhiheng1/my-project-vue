<template>
  <div class="unit-testing">
     <h2>用于单元测试</h2>
         <div>
              <input type="text" v-model="text" />
              <button class="add" @click="add">添加</button>
         </div>
      
      <ul>
        <li v-for="(item,i) in list" :key="i">
          <span>{{item}}</span>
          <button @click="deleteRow(i)">删除</button>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
       text:'',
       list:[]
    }
  },
  methods:{
    add(){
      this.list.push(this.text);
      this.text=''
    },
    deleteRow(i){
       this.list.splice(i,1);
    }
  }
}
</script>
