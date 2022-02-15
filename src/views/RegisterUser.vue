<template>
  <div>
    <h1>New User</h1>
    <form class="noauth" @submit.prevent="register">
      <label for="name">Name: </label>
      <input id="name" v-model="name" name="name" type="text">
      <label for="email">Email: </label>
      <input id="email" v-model="email" name="email" type="text">
      <label for="password">Password: </label>
      <input id="password" v-model="password" name="password" type="password">
      <button name="button">
        Register
      </button>
    </form>
    <p>
      Already have an account?
      <router-link to="/login">
        Login
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        name: this.name,
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
