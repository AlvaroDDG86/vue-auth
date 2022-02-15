<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">Email: </label>
      <input id="email" v-model="email" name="email" type="text">
      <label for="password">Password: </label>
      <input id="password" v-model="password" name="password" type="password">
      <button name="button">
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
