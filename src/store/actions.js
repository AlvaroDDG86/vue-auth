import axios from 'axios'

export default {
  register ({ commit }, payload) {
    return axios
      .post('//localhost:3000/register', payload)
      .then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
  },
  login ({ commit }, payload) {
    return axios
      .post('//localhost:3000/login', payload)
      .then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
  },
  logout ({ commit }) {
    commit('CLEAR_USER_DATA')
  }
}
