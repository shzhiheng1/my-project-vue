<template>
  <div>
      <DriverComponent :defineSteps="defineSteps"/>
      <h1>帮助导航</h1>
      <div id="step01">第一步</div>
      <div id="step02">第二步</div>
      <div id="step03">第三步</div>    
  </div>
</template>

<script>
 
 import steps from './steps'
 import DriverComponent from './DriverComponent.vue'

export default {
  components:{
    DriverComponent
  },
  data(){
    return{
      defineSteps:steps
    }
  },
  mounted(){
    // this.guide()
  },
  methods:{
    guide(){
      this.$nextTick(() => {
        this.$driver.defineSteps(steps);
        this.$driver.start();
      });
    }
  }
}
</script>
<style scoped>

</style>