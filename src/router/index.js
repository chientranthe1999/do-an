import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/layout/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        name: 'HomeMain',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
      },
      {
        path: 'detail/:id',
        name: 'InforDetail',
        component: () => import(/* webpackChunkName: "about" */ '@/views/place/Detail')
      }
    ]
  },
  {
    path: '/news',
    component: Home,
    children: [
      {
        path: '',
        name: 'NewsList',
        component: () => import('@/views/news/List.vue')
      }
      // {
      //   path: 'detail/:id',
      //   name: 'InforDetail',
      //   component: () => import( '@/views/place/Detail')
      // }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/auth/Login.vue')
  },
  {
    path: '*',
    component: () => import('@/views/Home'),
    hidden: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
