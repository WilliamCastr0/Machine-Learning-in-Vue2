import Vue from 'vue'
import VueRouter from 'vue-router'

import Information from '../views/Information.vue'
import Camera from '../views/Camera.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Information',
    component: Information
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
