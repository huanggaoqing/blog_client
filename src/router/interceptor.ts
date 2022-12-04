/* eslint-disable no-console */
import type { Router } from 'vue-router'

/**
 * 注册路由拦截器方法
 * @param {Router} router - 路由器 - 路由器实例
 */
export default function registerInterceptor(router: Router): void {
  router.beforeEach((to, from, next) => {
    console.log({ to, from })
    next()
  })
}
