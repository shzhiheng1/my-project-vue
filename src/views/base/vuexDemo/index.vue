<template>
    <div>
      <h1>{{count}}</h1>
      <button @click="addFn">加</button>
      <button @click="jianFn">减法</button>

      <button @click='fn(4)'>state.a+4</button>  <!--使用vuex传过来的函数fn，并且传参4-->
      <div>
        现在state.a：{{a}}
        <br>
        现在getters.c(): {{c}}　　　注：c=state.a+１
        <br>
        <br>
        <hr>
        <aaa ></aaa>
        <hr>
        <bbb></bbb>
      </div>

    </div>
</template>
<script>
  import {mapGetters,mapActions,mapMutations,mapState} from 'vuex';
  const {fn,msgFn}=mapActions(['fn','msgFn']);
  const {a,b}=mapState(['a','b']);
  const {c}=mapGetters(['c']);
  export default {
      name: "vuex-dome",
      data(){
          return{

          }
      },
      computed:{
        count(){
          return this.$store.state.count;
        },
        a,b,c
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
      aaa:{　　　　　　　　　　　　　　//传递input输入的msg給state.b ，调用vuex里的msgFn,将msg当做参数传过去，msgFn的代码就是将state.b=msg。
        template:`<div><h2>我是子组件aaa</h2><p >{{c}}</p><br>state.b=input值 :<input type="text" v-model='msg'></div>`,
        computed:mapGetters(['c']),
        data(){
          return {
            msg:''
          }
        },
        methods:{
          fn,
          msgFn,
          fn1(){
            console.log(222)
          }
        }
      },
      watch:{
        msg(){　　//检测msg的值，发生变化后触发msgFn
          this.$store.dispatch('msgFn',this.msg).then(this.fn1)
        }
      },
      bbb:{　　　　　　　　　　　　//兄弟组件能够显示state.b的值。
        template:`<div><h2>我是子组件的兄弟组件bbb</h2><br>我收到aaa的输入数据，利用state.b显示出来 :</bbbbr><span>{{b}}</span></div>`,
        computed:mapState(['b'])
      }
    }

    }
</script>

<style scoped>

</style>
