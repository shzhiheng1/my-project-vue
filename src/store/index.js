import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import getters from './getter';
import demo from './modules/demo'
import users from './modules/users'
export default new Vuex.Store({
  modules:{
    demo,
    users
  },
  getters
})