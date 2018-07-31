import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main.vue'
import Boot from '@/components/boot.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'boot',
      component: Boot
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
})
