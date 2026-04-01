<template>
  <div class="flex w-screen h-screen overflow-hidden bg-gray-100">
    <div class="w-[16rem] p-2 flex flex-col gap-4">
      <SidebarHeader />
      <div class="grow flex flex-col gap-2">
        <SidebarLink
          v-for="{ icon, title, to } in sidebarLinks"
          :key="title"
          :icon="icon"
          :to="to"
          >{{ title }}</SidebarLink
        >
      </div>
      <div>
        <SidebarLink :icon="DoorOpenIcon" :to="{ name: 'login' }">Log out</SidebarLink>
        <UserBlock class="mt-3" />
      </div>
    </div>
    <div class="m-2 bg-white w-full rounded-2xl p-4 overflow-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DoorOpenIcon, HouseIcon, UserStarIcon } from '@lucide/vue'
import SidebarHeader from './sidebar/SidebarHeader.vue'
import SidebarLink from './sidebar/SidebarLink.vue'
import UserBlock from './sidebar/UserBlock.vue'

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
  },
]
</script>
