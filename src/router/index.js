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
      },
      {
        path: 'detail',
        name: 'NewsDetail',
        component: () => import('@/views/news/Detail.vue')
      }
    ]
  },
  {
    path: '/find-opponent',
    component: Home,
    children: [
      {
        path: '',
        name: 'FindOpponent',
        component: () => import('@/views/opponent/List.vue')
      },
      {
        path: 'detail',
        name: 'NewsDetail',
        component: () => import('@/views/news/Detail.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/auth/Login.vue')
  },
  {
    path: '*',
    redirect: '/home',
    hidden: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
