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
      <div>{{ name }}</div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const name = 'Пользователь'
const letter = computed(() => name.substring(0, 1))
</script>
