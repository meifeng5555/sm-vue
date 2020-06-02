import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: 0,
    count: 0,
    loginUser: 'meijinfeng',
    domain: {
      api: 'http://127.0.0.1:8000/api/',
      web: 'http://127.0.0.1:8000/'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    changeLoginStatus (state, payload) {
      state.login = payload.loginStatus
    },
    changeLoginUser (state, payload) {
      state.loginUser = payload.name
    },
    changeDomain (state, payload) {
      if (payload.api) {
        state.domain.api = payload.api
      }
      if (payload.web) {
        state.domain.web = payload.web
      }
    }
  }
})
