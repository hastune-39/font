import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      userID: -1,
      login_name: String,
      userName: String,
      pass_word: String,
      sex: String,
      address: String,
      profile_picture: String,
      signature: String,
    },
  },

  mutations: {
    login (state, inputUser) {
      state.user = inputUser;
    }
  },
})
