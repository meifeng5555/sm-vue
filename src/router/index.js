import Vue from 'vue'
import Router from 'vue-router'
import parent from '@/components/parent'
import children from '@/components/children'
import detail from '@/components/detail'
import welcome from '@/components/welcome/welcome'
import task from '@/components/ljcrm/task'
import script from '@/components/ljcrm/script'
import zlscript from '@/components/ljcrm/zlscript'
import login from '@/components/welcome/login'
import dashboard from '@/components/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/parent/:id',
      component: parent,
      children: [
        {
          path: 'children/:name/:detail',
          components: {
            default: children,
            detail: detail
          }
        }
      ]
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/dashboard',
      component: dashboard,
      children: [
        {
          path: 'ljcrm/task',
          component: task
        },
        {
          path: 'ljcrm/script',
          component: script
        },
        {
          path: 'ljcrm/zlscript',
          component: zlscript
        },
        {
          path: 'welcome/:username',
          component: welcome
        }
      ]
    }
  ]
})
