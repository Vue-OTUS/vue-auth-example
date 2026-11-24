<template>
  <RequiredAuth>
    <div class="flex w-screen h-screen overflow-hidden bg-gray-100">
      <AppSidebar></AppSidebar>
      <div class="m-2 bg-white w-full rounded-2xl p-4 overflow-auto">
        <RouterView></RouterView>
      </div>
    </div>
  </RequiredAuth>
</template>

<script setup lang="ts">
import RequiredAuth from '@/components/RequiredAuth.vue'
import AppSidebar from './sidebar/AppSidebar.vue'
</script>
