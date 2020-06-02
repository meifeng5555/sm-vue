<template>
  <div>
    <h2>Your information:</h2>
    <h3>Your detail: {{detail}}</h3>
  </div>
</template>

<script>
export default {
  name: 'detail',
  computed: {
    detail () {
      return this.$route.params.detail
    }
  }
}
</script>
