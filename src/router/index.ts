import { createRouter, createWebHistory } from 'vue-router'
import BaseView from '../views/BaseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'base',
      component: BaseView
    },
    {
      path: '/ships',
      name: 'ships',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ShipView.vue')
    },
    {
      path: '/market',
      name: 'market',
      component: () => import('@/views/MarketView.vue')
    }
  ]
})

export default router
