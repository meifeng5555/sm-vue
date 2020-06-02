<template>
  <div id="dashboard">
    <el-container class="container">
      <el-menu :background-color="bgcolor" :collapse="display" default-active="title" @select="openTab">
        <el-menu-item style="height:60px;font-size:18px;color:#000" key="title" index="title">
          <i v-show="nameShow">Sm</i>
          <span>SmFrame Admin</span>
        </el-menu-item>
        <el-menu-item v-for="v in menu" :key="v.id" :index="v.url">
          <i style="color:#409EFF" :class="v.icon"></i>
          <span slot="title">{{v.title}}</span>
        </el-menu-item>
      </el-menu>
      <el-container>
        <el-header>
          <div style="display:inline-block;cursor:pointer;vertical-align: middle;">
            <i :class="choseType" style="font-size:30px;padding-top:15px" @click="menuDisplay"></i>
          </div>
          <div style="display:inline-block;margin-left:15px">
            <span>{{showTabname}}</span>
          </div>
          <div style="display:inline-block;float:right">
            <span>白云苍鸟，相依相伴</span>
          </div>
        </el-header>
        <el-tabs v-model="showTab" type="card" closable @tab-remove="removeTab" @tab-click="clickTab">
          <el-tab-pane v-for="v in tabsMap" :key="v.id" :label="v.name" :name="v.id">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-tab-pane>
        </el-tabs>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'dashboard',
  data () {
    return {
      url: '',
      menu: Array(),
      bgcolor: '#eef1f6',
      choseType: 'el-icon-d-arrow-left',
      display: false,
      nameShow: false,
      showTab: '0',
      showTabname: '首页',
      core: [
        "勒僵驻马，等一屡红霞",
        "停足抵定，入他的芳华"
      ],
      tabsMap: Array()
    }
  },
  created () {
    this.setMenu()
    this.setTabs()
  },
  methods: {
    setTabs () {
      this.openTab(`/dashboard/welcome/meijinfeng`, [])
    },
    setMenu () {
      this.menu.push({
        id: '0',
        title: '首页',
        icon: 'el-icon-menu',
        url: `/dashboard/welcome/meijinfeng`
      },
      {
        id: '3',
        title: '任务',
        icon: 'el-icon-document',
        url: `/dashboard/ljcrm/task`
      },{
        id: '4',
        title: '脚本',
        icon: 'el-icon-setting',
        url: `/dashboard/ljcrm/script`
      },{
        id: '5',
        title: '脚本整理',
        icon: 'el-icon-tickets',
        url: `/dashboard/ljcrm/zlscript`
      })
    },
    menuDisplay () {
      this.display = this.display ? false : true
      this.nameShow = this.display
      this.choseType = this.display ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'
    },
    openTab (key, keyArr) {
      let vm = this;
      Object.keys(vm.menu).forEach((index) => {
        if (key == vm.menu[index].url) {
          vm.addTab(vm.menu[index].title, vm.menu[index].id)
          vm.dispatch(vm.menu[index].url, vm.menu[index].title)
          return true
        }
      })
    },
    addTab (name, id) {
      let vm = this
      let flag = false

      Object.keys(vm.tabsMap).forEach((index) => {
        if (vm.tabsMap[index].id == id) {
          flag = true
          vm.showTab = id
          return true
        }
      })

      if (flag === false) {
        vm.tabsMap.push({
          name: name,
          id: id
        })
      }

      vm.showTab = id
    },
    removeTab (id) {
      let vm = this
      let key = ''
      
      Object.keys(vm.tabsMap).forEach((index) => {
        if (vm.tabsMap[index].id == id) {
          key = index
          return true
        }
      })

      if (key > 0) {
        this.tabsMap.splice(key, 1)
        this.showTab = vm.tabsMap[(Number(key) - 1)].id

        Object.keys(vm.menu).forEach((index) => {
          if (vm.menu[index].id == vm.showTab) {
            vm.dispatch(vm.menu[index].url, vm.menu[index].title)
            return true
          }
        })
      }
    },
    clickTab () {
      let vm = this
      let id = this.showTab

      Object.keys(vm.menu).forEach((index) => {
        if (vm.menu[index].id == id) {
          vm.dispatch(vm.menu[index].url, vm.menu[index].title)
          return true
        }
      })

    },
    dispatch (url, title) {
      router.push({
        path: url
      })
      this.showTabname = title
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

#dashboard {
  font-family: 'Avenir', Hiragino Sans GB, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100%;
}

.el-header, .el-footer {
  background-color: #3c8dbc;
  color: #ffffff;
  text-align: left;;
  line-height: 60px;
}

.el-header .collspan {
  margin-left: 180px;
  margin: 0;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

.container {
  height: 100%;
}

</style>
