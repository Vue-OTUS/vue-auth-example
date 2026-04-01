<template>
  <RouterLink :to="to">
    <div class="flex gap-2 items-center hover:bg-hover px-2 py-1 rounded cursor-pointer">
      <component :is="icon" :size="16" />
      <slot class="text-xs"></slot>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { type RouteLocationRaw } from 'vue-router'

defineProps<{ icon: Component; to: RouteLocationRaw }>()
</script>
