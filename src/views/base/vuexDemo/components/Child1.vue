<template>
  <div>
    <h2>我是子组件aaa</h2>
    <p >{{c}}</p>
    <br>state.msg=input值 :<input type="text" v-model='msg'>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
// const {c}=mapGetters(['c']);
const {msgFn}=mapActions(['msgFn'])
export default {
  data(){
    return {
      msg:''
    }
  },
  computed:{
    ...mapGetters(['c']),
    // ...mapState(['msg'])
  },
  watch:{
    msg(){//检测msg的值，发生变化后触发msgFn
      this.$store.dispatch('msgFn',this.msg).then(this.fn1)
    }
  },
  methods:{
    msgFn,
    fn1(){
      setTimeout(() => {
        console.log(this.$store.state)
      }, 1000);
    }
  }
}
</script>