<template>
    <div class="user">
      <p>用户{{getId}}</p>

    </div>
</template>

<script>
    export default {
       data(){
         return{
           getId:''
         }
       },
      //使用计算属性
      // computed:{
      //   getId(){
      //     return this.$route.params.id
      //   }
      // },
    //  使用监听
      watch: {
        $route (to,from){
          // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
          console.log(to);
          console.log(from);
          this.getId = to.params.id
        }
      }


    }
</script>

<style scoped>
  .user{

  }

</style>
