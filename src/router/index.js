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
      }
      // {
      //   path: 'detail',
      //   name: 'NewsDetail',
      //   component: () => import('@/views/news/Detail.vue')
      // }
    ]
  },

  {
    path: '/charge',
    component: Home,
    children: [
      {
        path: '',
        name: 'Charge',
        component: () => import('@/views/transaction/Charge.vue')
      }
      // {
      //   path: 'detail',
      //   name: 'NewsDetail',
      //   component: () => import('@/views/news/Detail.vue')
      // }
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
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/auth/Register.vue')
  },
  {
    path: '*',
    redirect: '/home',
    hidden: true
  }
]

const createRouter = () => {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
}

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
