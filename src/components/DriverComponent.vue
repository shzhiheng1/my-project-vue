<template>
  
</template>
<script>
export default {
  props:{
    defineSteps:{
      type:Array,
      default:()=>[]
    }
  },
  data(){
    return{}
  },
  mounted(){
    this.$nextTick(() => {
        this.$driver.defineSteps(this.defineSteps);
        this.$driver.start();
      });
  }
  
}
</script>
