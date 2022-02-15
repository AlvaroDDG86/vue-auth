import axios from 'axios'

export default {
  'SET_USER_DATA' (state, payload) {
    state.user = payload
    localStorage.setItem('user', JSON.stringify(payload))
    axios.defaults.headers.common['Authorization'] = `Bearer ${payload.token}`
  }
}
