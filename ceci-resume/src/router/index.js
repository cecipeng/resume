import Vue from 'vue'
import Router from 'vue-router'
import Cover from '@/components/Cover'
import Animation from '@/components/Animation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cover',
      component: Cover
    },
    {
      path: '/animation',
      name: 'Animation',
      component: Animation
    }
  ]
})
