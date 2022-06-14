import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 配置路由
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/home', // 默认子路由
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/question',
        name: 'question',
        component: () => import('@/views/question')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
