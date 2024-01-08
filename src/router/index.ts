import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getToken } from '@/utils/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
    // redirect: '/login'
  },
  {
    path: '/',
    name: 'about',
    component: () => import('../layout/AboutView.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('../common/dashboard/index.vue')
      },
      {
        path: 'system/user',
        name: 'system/user',
        component: () => import('../views/system/user/index.vue')
      },
      {
        path: 'system/role',
        name: 'system/role',
        component: () => import('../views/system/role/index.vue')
      },
      {
        path: 'system/menu',
        name: 'system/menu',
        component: () => import('../views/system/menu/index.vue')
      },
      {
        path: '/system/dept',
        name: '/system/dept',
        component: () => import('../views/system/dept/index.vue')
      },
      {
        path: '/system/job',
        name: '/system/job',
        component: () => import('../views/system/job/index.vue')
      },
      {
        path: '/system/dict',
        name: '/system/dict',
        component: () => import('../views/system/dict/index.vue')
      },
      {
        path: '/system/timing',
        name: '/system/timing',
        component: () => import('../views/system/timing/index.vue')
      },
      {
        path: '/components/echarts',
        name: '/components/echarts',
        component: () => import('../views/components/echarts/index.vue')
      },
      {
        path: '/components/tinymce',
        name: '/components/tinymce',
        component: () => import('../views/components/tinymce/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../layout/login.vue')
  },
  {
    path: '/pinias',
    name: 'pinias',
    component: () => import('../layout/pinias.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let token = getToken()
  if (!token && to.path !== '/login') {
    next('/login')
  } else if (token && to.path === '/login') {
    next('/')
  } else {
    next()
  }
})

export default router
