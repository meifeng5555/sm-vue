<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'App',
  computed: {
    login () {
      return this.$store.state.login
    }
  },
  mounted () {
    this.getLoginStatus()
  },
  watch: {
    login (oldV, newV) {
      this.toWhere()
    }
  },
  methods: {
    toWhere() {
      if (this.login) {
        this.toDashborard()
      } else {
        this.toLogin()
      }
    },
    toLogin () {
      if (this.login) {
        this.toWhere()
      }
      this.$message.warning(
        '登陆状态已失效，自动退出'
      )
      let url = '/login'
      this.dispatch(url)
    },
    toDashborard () {
      if (!this.login) {
        this.toWhere()
      }
      let url = '/dashboard'
      this.dispatch(url)
    },
    dispatch (url) {
      router.push({
        path: url
      })
    },
    getLoginStatus () {
      let vm = this
      this.$api.get('/login/status')
      .then(function (response) {
        vm.$store.commit('changeLoginStatus', {
            loginStatus: response.data.status
        })

        vm.toWhere()
      })
    }
  }
}
</script>

<style>
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}

#app {
  font-family: 'Avenir', Hiragino Sans GB, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>

