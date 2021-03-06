import axios from 'axios'

export default {
  'SET_USER_DATA' (state, payload) {
    state.user = payload
    localStorage.setItem('user', JSON.stringify(payload))
    console.log(axios.defaults.headers.common['Authorization'])
    axios.defaults.headers.common['Authorization'] = `Bearer ${payload.token}`
  },
  'CLEAR_USER_DATA' (state) {
    // Avoid side effects when the app grow up
    localStorage.removeItem('user')
    location.reload()
  }
}
