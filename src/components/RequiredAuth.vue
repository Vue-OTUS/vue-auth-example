<template>
  <login-page v-if="!authStore.isAuthed"></login-page>
  <slot v-else></slot>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import LoginPage from '@/views/LoginPage.vue'

const authStore = useAuthStore()
</script>
