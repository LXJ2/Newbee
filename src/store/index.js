import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:localStorage.getItem('newbeetoken') || '',
  },
  mutations: {
    updateToken(state,str){
      state.token = str;
      localStorage.setItem('newbeetoken',str)
    },
  },
  actions: {
  },
  modules: {
  }
})
