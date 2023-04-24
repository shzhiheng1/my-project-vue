<template>
  <div class="water_fall">
    <!-- 自定义瀑布流 -->
    <h2 class="title">你好，我们来讨论一下关于瀑布流那点事吧！</h2>
    <Water :list="list"></Water>
  </div>
</template>

<script>
import Water from "./Water";
export default {
  components:{
    Water
  },
  data(){
    return{
      list:[
        {height:100,background:'#cc6611'},
        {height:300,background:'#aa6611'},
        {height:150,background:'#c71611'},
        {height:80,background:'#c74691'},
        {height:180,background:'#c6a711'},
        {height:130,background:'#bcaa11'},
        {height:180,background:'#116611'},
        {height:140,background:'#cc2211'},
        {height:150,background:'#c42411'},
        {height:200,background:'#c1a611'},
        {height:120,background:'#7fa611'},
        {height:300,background:'#aa5511'},
        {height:50,background:'#586611'},
        {height:500,background:'#996811'},
        {height:160,background:'#ab6851'},
        {height:80,background:'#dd9911'},
        {height:60,background:'#ab8641'},
        {height:108,background:'#ac5811'},
        {height:180,background:'#ac8811'},
        {height:180,background:'#baab99'},
        {height:380,background:'#cc8956'},
        {height:160,background:'#ee5862'},
        {height:190,background:'#addedd'},
        {height:100,background:'#d888dd'},
        {height:420,background:'#ca8811'},
        {height:180,background:'#115511'},
        {height:150,background:'#cc3311'},
        {height:180,background:'#cc5511'},
        {height:170,background:'#cc6521'},
        {height:30,background:'#cc6891'},
        {height:150,background:'#858588'},
        {height:160,background:'#958585'},
        {height:180,background:'#555555'},

      ]
    }
  }
   
}
</script>

<style  lang="scss" scoped>
.water_fall{
  .title{
    /* 一个中文相当于两个英文*/ 
    width: 20em;
    /* 要设置不允许换行，且溢出隐藏 */
    white-space: nowrap;
    overflow: hidden;
    /* 使用右边框作为打印的指针光标 */
    border-right: 1px solid #000;
     /*注意step和字数保持一致，光标动画也是同理，*/
    animation: writing steps(20) 0.5*20s forwards,cursors  steps(1) 0.5s infinite;
  }
  @keyframes writing {
    from{
      width: 0;
    }
    to{
     width: 20em;
    }
  }
  @keyframes cursors {
    50% {
        border-color: transparent;
    }
  }
}
</style>