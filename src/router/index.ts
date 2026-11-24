import { useAuthStore } from '@/stores/authStore'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
      name: 'login',
      beforeEnter(from, to, next) {
        const authStore = useAuthStore()
        const homePage = { name: 'home' }
        if (authStore.isAuthed) {
          return next(homePage)
        }
        return next(true)
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
            requiredRole: 'user',
          },
        },
        {
          path: '/admin',
          component: () => import('@/views/AdminPage.vue'),
          name: 'admin',
          meta: {
            requiredAuth: true,
            requiredRole: 'admin',
          },
        },
        {
          path: '/profile',
          component: () => import('@/views/ProfilePage.vue'),
          name: 'profile',
          meta: {
            requiredAuth: true,
            requiredRole: 'user',
          },
        },
      ],
    },
  ],
})

// router.beforeEach((to) => {
//   if (to.meta.requiredAuth === true) {
//     const authStore = useAuthStore()

//     const loginPage = { name: 'login' }

//     if (!authStore.isAuthed) {
//       return loginPage
//     }

//     return true
//   }

//   return true
// })

router.beforeEach((to, from) => {
  if (to.meta.requiredRole) {
    const authStore = useAuthStore()

    if (authStore.role === 'admin') {
      return true
    }

    if (authStore.role === 'guest') {
      if (to.name === 'login') {
        return true
      } else {
        return { name: 'login' }
      }
    }

    if (authStore.role !== to.meta.requiredRole) {
      if (from.matched.length > 0) {
        return false
      } else {
        return { name: 'home' }
      }
    }

    return true
  }

  return true
})

export default router
