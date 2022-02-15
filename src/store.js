import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    'SET_USER_DATA' (state, payload) {
      state.user = payload
      localStorage.setItem('user', JSON.stringify(payload))
      axios.defaults.headers.common['Authorization'] = `Bearer ${payload.token}`
    }
  },
  actions: {
    register ({ commit }, payload) {
      return axios.post('//localhost:3000/register', payload)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    }
  }
})
