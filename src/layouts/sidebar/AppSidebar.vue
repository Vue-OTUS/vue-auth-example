<template>
  <div class="w-[16rem] p-2 flex flex-col gap-4">
    <SidebarHeader />
    <div class="grow flex flex-col gap-2">
      <SidebarLink
        v-for="{ icon, title, to } in visibleSidebarLinks"
        :key="title"
        :icon="icon"
        :to="to"
        >{{ title }}</SidebarLink
      >
    </div>
    <div>
      <LogoutButton />
      <UserBlock class="mt-3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { HouseIcon, UserStarIcon } from '@lucide/vue'
import LogoutButton from './LogoutButton.vue'
import SidebarHeader from './SidebarHeader.vue'
import SidebarLink from './SidebarLink.vue'
import UserBlock from './UserBlock.vue'
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const sidebarLinks = [
  {
    icon: HouseIcon,
    title: 'Home page',
    to: { name: 'home' },
  },
  {
    icon: UserStarIcon,
    title: 'Admin page',
    to: { name: 'admin' },
    role: 'admin',
  },
]

const visibleSidebarLinks = computed(() => {
  if (authStore.role) {
    return sidebarLinks.filter((l) => (l.role ? l.role === authStore.role : true))
  }
  return sidebarLinks
})
</script>
