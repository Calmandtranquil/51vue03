import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    put:"",
    like:[],
    introduction:""
  },
  mutations: {
      Next(state,put){
          state.put=put;
      },
      checkLike(state,like){
          state.like.push(like);
      },
      doIn(state,introduction){
          state.introduction=introduction;
      }
  },
  actions: {
  },
  modules: {
  }
})
