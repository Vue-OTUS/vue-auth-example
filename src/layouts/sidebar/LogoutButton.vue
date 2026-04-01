<template>
  <div
    class="flex gap-2 items-center hover:bg-hover px-2 py-1 rounded cursor-pointer"
    @click="authStore.logout"
  >
    <door-open-icon :size="16" />
    <slot class="text-xs">Log out</slot>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { DoorOpenIcon } from '@lucide/vue'

const authStore = useAuthStore()
</script>
