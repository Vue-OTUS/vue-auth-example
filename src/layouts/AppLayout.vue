<template>
  <div class="flex w-screen h-screen overflow-hidden bg-gray-100">
    <AppSidebar></AppSidebar>
    <div class="m-2 bg-white w-full rounded-2xl p-4 overflow-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from "./sidebar/AppSidebar.vue";
</script>
