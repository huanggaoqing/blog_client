import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import registerInterceptor from './interceptor'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Besic',
    component: () => import('~/views/besic/besic.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('~/views/home/home.vue'),
      },
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('~/views/blog/blog.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 注册路由拦截器
registerInterceptor(router)

export default router
