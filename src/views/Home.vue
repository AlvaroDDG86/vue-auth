<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <p v-if="!this.$store.state.user">
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
export default {}
</script>
