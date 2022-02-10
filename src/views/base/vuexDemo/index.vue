<template>
    <div>
      <h1>从state中获取count:{{count}}</h1>
      <p>同步处理直接调用commit('increment')<button @click="addFn">:加</button></p>
      <p>同步处理直接调用commit('decrement'):<button @click="jianFn">减法</button></p>
      <p>异步处理调用mapActions中方法:<button @click='fn(4)'>state.a+4</button></p>
        <!--使用vuex传过来的函数fn，并且传参4-->
      <div>
        现在state.a：{{a}}
        <br>
        现在getters.c(): {{c}}　　　注：c=state.count+１
        <br>
        <br>
        <hr>
        <Child1></Child1>
      </div>

    </div>
</template>
<script>
  import Child1 from './components/Child1.vue'
  import {mapGetters,mapActions,mapMutations,mapState} from 'vuex';
  const {fn,msgFn}=mapActions(['fn','msgFn']);
  // const {a,b}=mapState(['a','b']);
    // const {c}=mapGetters(['c']);
  export default {
      name: "vuex-dome",
      data(){
          return{

          }
      },
      computed:{
        ...mapGetters(['c']),
        ...mapState(['a']),
        count(){
          return this.$store.state.demo.count;
        },
        // a,b,
      },
      mounted(){
        console.log(this.$store.getters)
      },
      methods:{
         addFn(){
           this.$store.commit('increment');
         },
         jianFn(){
           this.$store.commit('decrement');
         },
        fn,
      },
    components:{
      Child1,
    }

    }
</script>

<style scoped>

</style>
