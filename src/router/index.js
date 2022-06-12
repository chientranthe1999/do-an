import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/layout/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        name: 'HomeMain',
        component: () => import(/* webpackChunkName: "about" */ '@/views/index.vue')
      },
      {
        path: 'detail',
        name: 'InforDetail',
        component: () => import(/* webpackChunkName: "about" */ '@/views/detail')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
