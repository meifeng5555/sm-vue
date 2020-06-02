<template>
  <div>
    <h2>i'm children</h2>
    <h2>my name is {{name}}</h2>
    <h2>count is {{count}}</h2>
  </div>
</template>

<script>
export default {
  name: 'children',
  mounted () {
    this.$store.commit('increment')
  },
  computed: {
    name () {
      return this.$route.params.name
    },
    count () {
      return this.$store.state.count
    }
  }
}
</script>
