<template>
  <div class="welcome">
    <span>Welcome {{user}}</span>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  computed: {
    user () {
      return this.$store.state.loginUser
    }
  }
}
</script>

<style>
.welcome {
  text-align: center;
  margin-top: 60px;
  font-weight: 800;
  font-size: 36px;
}
</style>

