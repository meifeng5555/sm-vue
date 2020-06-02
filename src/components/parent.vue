<template>
  <div>
    <h1>you are the {{id}}</h1>
    <router-view></router-view>
    <transition name="slide-right">
      <router-view name="detail"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'parent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>
