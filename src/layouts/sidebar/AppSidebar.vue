<template>
  <div class="w-[16rem] p-2 flex flex-col gap-4">
    <SidebarHeader />
    <div class="grow flex flex-col gap-2">
      <SidebarLink v-for="{ icon, title, to } in sidebarLinks" :key="title" :icon="icon" :to="to">{{
        title
      }}</SidebarLink>
    </div>
    <div>
      <SidebarLink :icon="DoorOpenIcon" :to="{ name: 'login' }">Log out</SidebarLink>
      <UserBlock class="mt-3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DoorOpenIcon, HouseIcon, UserStarIcon } from "@lucide/vue";
import SidebarHeader from "./SidebarHeader.vue";
import SidebarLink from "./SidebarLink.vue";
import UserBlock from "./UserBlock.vue";

const sidebarLinks = [
  {
    icon: HouseIcon,
    title: "Home page",
    to: { name: "home" },
  },
  {
    icon: UserStarIcon,
    title: "Admin page",
    to: { name: "admin" },
  },
];
</script>
