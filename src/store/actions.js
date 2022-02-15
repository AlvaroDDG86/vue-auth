import axios from 'axios'

export default {
  register ({ commit }, payload) {
    return axios.post('//localhost:3000/register', payload)
      .then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
  }
}
