<template>
  <div
    class="flex gap-2 items-center hover:bg-hover px-2 py-1 rounded cursor-pointer"
    @click="logOut"
  >
    <component :is="DoorOpenIcon" :size="16" />
    Log out
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { DoorOpenIcon } from '@lucide/vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()

const router = useRouter()

function logOut() {
  authStore.deleteJwt()
  router.push({ name: 'login' })
}
</script>
