<template>
  <div class="understand">
    <h2>js的理解</h2>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="hover" >
          <div @click="handleLink('copy')" class="card-context" >深拷贝的理解</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  mounted(){},
  methods:{
    handleLink(params){
      this.$router.push({path:`/experiment/${params}`})
    }
  }
}
</script>
<style scoped>
.card-context{
  cursor: pointer;
}
</style>