<template>
  <div class="min-h-screen flex items-center justify-center bg-white px-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-6">
        <h1 class="text-2xl font-semibold text-gray-900">Log in to your account</h1>
        <p class="mt-2 text-sm text-gray-500">Enter your email and password below to log in</p>
      </div>

      <form class="bg-white" @submit.prevent="tryLogin">
        <EmailInput class="mb-4" v-model="email" />

        <div class="mb-2 flex items-center justify-between">
          <label for="password" class="text-sm font-medium text-gray-700">Password</label>
          <a href="#" class="text-sm text-gray-500 hover:text-gray-700">Forgot password?</a>
        </div>

        <PasswordInput class="mb-4" v-model="password" />

        <div class="mb-6 flex items-center">
          <input
            id="remember"
            type="checkbox"
            class="h-4 w-4 text-gray-700 border-gray-300 rounded focus:ring-gray-300"
          />
          <label for="remember" class="ml-2 text-sm text-gray-700">Remember me</label>
        </div>

        <div class="mb-4">
          <button
            type="submit"
            class="w-full bg-gray-800 text-white py-3 rounded-md text-sm font-medium hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-600 cursor-pointer"
          >
            Log in
          </button>
        </div>

        <p class="text-center text-sm text-gray-500">
          Don't have an account?
          <a href="#" class="text-gray-900 font-medium hover:underline"> Sign up</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import EmailInput from '@/components/EmailInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

const userJWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6InVzZXIiLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MTUxNjQzOTAyMn0.o2xRgjzVZOgIHPqyXvfWRXgcB6h0cZ7j78CG98lMzlo'

const adminJWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbWluIERvZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2NDM5MDIyfQ.slko-MeVqf-87kdYYCy2o1HjSRDOZ3eefAT0a7mEl4A'

const authStore = useAuthStore()

const email = ref('')
const password = ref('')

function tryLogin() {
  if (email.value === 'a@a.dev' && password.value === 'a@a.dev') {
    // тут делаем fetch('/login') и получаем jwt либо ошибку
    Promise.resolve({ jwt: adminJWT }).then(({ jwt }) => authStore.setJwt(jwt))
  } else if (email.value === 'u@a.dev' && password.value === 'u@a.dev') {
    // тут делаем fetch('/login') и получаем jwt либо ошибку
    Promise.resolve({ jwt: userJWT }).then(({ jwt }) => authStore.setJwt(jwt))
  } else {
    alert('Проверьте данные для входа')
  }
}
</script>
