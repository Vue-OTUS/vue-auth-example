<template>
  <slot v-if="authStore.isAuthed"></slot>
  <LoginPage v-else></LoginPage>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import LoginPage from '@/views/LoginPage.vue'

const authStore = useAuthStore()
</script>
