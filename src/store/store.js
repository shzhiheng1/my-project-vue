import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    count:0,
    a:'1',
    b:'33'
  },
  actions:{//异步请求
    fn({ commit, state }, n) {　　　　//{{commit,state}}写法是es6语法，简写，state是默认传参，就是上面的state，就算写aaa也是指向state。n为组件传过来的参数。　　 　　　　　
       　new Promise((resolve, reject) => {　　　　　　　　//这儿模拟延迟，不模拟写 state.a += n;commit('add')代替
      setTimeout(() => resolve(state.a += n), 1000)
     }).then(commit('add'))　　　　　　//fn执行结束后，再执行mutations 中的add(){}。必须如此，否则，组件使用时收不到数据。
    },
    msgFn({commit,state},msg){
      state.b=msg;
      // commit('add');
    }
  },
  mutations:{
    increment:state=>state.count++,
    decrement:state=>state.count--,
    add(state,n){
      state.a+n;
    }

  },
  getters:{
    c(state){
      state.a +=1;
      return state.a--;
    }
  }
})
