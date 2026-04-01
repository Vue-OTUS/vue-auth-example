<template>
  <RequireAuthView>
    <div class="flex w-screen h-screen overflow-hidden bg-gray-100">
      <AppSidebar />
      <div class="m-2 bg-white w-full rounded-2xl p-4 overflow-auto">
        <RouterView />
      </div>
    </div>
  </RequireAuthView>
</template>

<script setup lang="ts">
import RequireAuthView from '@/components/RequireAuthView.vue'
import AppSidebar from './sidebar/AppSidebar.vue'
</script>
