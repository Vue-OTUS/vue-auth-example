<template>
  <div class="min-h-screen flex items-center justify-center bg-white px-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-6">
        <h1 class="text-2xl font-semibold text-gray-900">Log in to your account</h1>
        <p class="mt-2 text-sm text-gray-500">Enter your email and password below to log in</p>
      </div>

      <form class="bg-white">
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
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>
