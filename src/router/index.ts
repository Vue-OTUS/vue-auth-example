import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
      name: 'login',
    },
    {
      path: '/',
      component: () => import('@/views/HomePage.vue'),
      name: 'home',
    },
    {
      path: '/admin',
      component: () => import('@/views/AdminPage.vue'),
      name: 'admin',
    },
    {
      path: '/profile',
      component: () => import('@/views/ProfilePage.vue'),
      name: 'profile',
    },
  ],
})

export default router
