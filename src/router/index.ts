import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
      name: 'login',
      beforeEnter() {
        const authStore = useAuthStore()
        const homeRoute = { name: 'home' }

        if (authStore.isAuthed) {
          router.replace(homeRoute)
        }
      },
    },
    {
      path: '/',
      component: () => import('@/layouts/AppLayout.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/HomePage.vue'),
          name: 'home',
          meta: {
            requiredAuth: true,
          },
        },
        {
          path: '/admin',
          component: () => import('@/views/AdminPage.vue'),
          name: 'admin',
          meta: {
            requiredAuth: true,
            role: 'admin',
          },
        },
        {
          path: '/profile',
          component: () => import('@/views/ProfilePage.vue'),
          name: 'profile',
          meta: {
            requiredAuth: true,
          },
        },
      ],
    },
  ],
})

// router.beforeEach((to, from) => {
//   if (to.meta.requiredAuth === true) {
//     const authStore = useAuthStore()
//     const loginRoute = { name: 'login', query: { back: from.fullPath } }

//     if (!authStore.isAuthed) {
//       return loginRoute
//     }

//     return true
//   }

//   return true
// })

router.beforeEach((to) => {
  if (to.meta.role) {
    const authStore = useAuthStore()
    const homeRoute = { name: 'home' }

    if (to.meta.role !== authStore.role) {
      return homeRoute
    }

    return true
  }

  return true
})

export default router
