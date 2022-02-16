<template>
  <div>
    <h1>Login</h1>
    <form class="noauth" @submit.prevent="login">
      <label for="email">Email: </label>
      <input id="email" v-model="email" name="email" type="text">
      <label for="password">Password: </label>
      <input id="password" v-model="password" name="password" type="password">
      <button name="button">
        Login
      </button>
      <p v-if="error">
        {{ error }}
      </p>
    </form>
    <p>
      Don't have an account?
      <router-link to="/register">
        Register
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login () {
      this.error = ''
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch(error => {
          this.error = error.response.data.error
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
