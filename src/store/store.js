import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword: "",
  },

  getters: {
    storeKeyWord: state => {
      return this.keyword;
      console.log("现在store里的关键字为: "+this.keyword);
    },
  },

  mutations: {
    searchKeyword(state, keyword){
      state.keyword = keyword;
    }
  }
})
