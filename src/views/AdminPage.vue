<template><UserStarIcon :size="72" /> Admin page for {{ authStore.userName }}</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { UserStarIcon } from '@lucide/vue'

const authStore = useAuthStore()
</script>
