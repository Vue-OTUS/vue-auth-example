<template><UserPenIcon :size="72" /> Profile page {{ authStore.userName }}</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { UserPenIcon } from '@lucide/vue'

const authStore = useAuthStore()
</script>
