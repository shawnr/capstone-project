import Vue from 'vue'
import Router from 'vue-router'
import iTunes from '@/components/iTunes'
import axios from 'axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'iTunes',
      component: iTunes
    }
  ]
})
