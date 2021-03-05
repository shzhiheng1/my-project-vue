<template>
    <el-tooltip class="item" effect="dark" :content="tipContent" placement="top" >
        <div class="tooltip-text">{{ tipTxet }}</div>
    </el-tooltip>
</template>

<script>
export default {
   data(){
     return {}
   },
   props:{
     tipTxet:{
       default:'',
       type:String
     },
     tipContent:{
       default:'',
       type:String
     }
   }
}
</script>

<style scoped>
.tooltip-text{
  cursor: pointer;
  text-align: center;
}
</style>