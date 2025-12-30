// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/news.vue')
  },
  {
    path: '/craftsman',
    name: 'Craftsman',
    component: () => import('../views/craftsman.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/product.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/service.vue')
  },
  {
    path: '/consultation',
    name: 'Consultation',
    component: () => import('../views/consultation.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router