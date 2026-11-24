<template>
  <RouterLink :to="{ name: 'profile' }" custom #default="{ navigate }">
    <div
      class="flex gap-2 items-center hover:bg-hover px-2 py-1 rounded cursor-pointer"
      @click="navigate"
    >
      <div class="relative flex size-8 shrink-0 h-8 w-8 overflow-hidden rounded-lg">
        <span
          class="bg-gray-300 flex size-full items-center justify-center rounded-lg text-black"
          >{{ letter }}</span
        >
      </div>
      <div>{{ authStore.userName }}</div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { computed } from 'vue'

const authStore = useAuthStore()

const letter = computed(() => authStore.userName.substring(0, 1))
</script>
