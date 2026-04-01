<template>
  <RouterLink :to="{ name: 'home' }" custom #default="{ navigate }">
    <h3
      @click="navigate"
      class="flex w-full hover:bg-hover p-2 mt-2 gap-4 cursor-pointer rounded items-center"
    >
      <ShieldUserIcon :size="30" />
      <div class="font-bold">My Login app</div>
    </h3>
  </RouterLink>
</template>

<script setup lang="ts">
import { ShieldUserIcon } from '@lucide/vue'
</script>
