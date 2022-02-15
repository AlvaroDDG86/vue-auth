<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <p v-if="!loggedIn">
      To use this app you should
      <router-link to="/login">
        Login
      </router-link>
      or
      <router-link to="/register">
        Register
      </router-link>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loggedIn'])
  }
}
</script>
