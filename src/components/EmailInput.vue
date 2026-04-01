<template>
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email address</label>
    <input
      v-model="model"
      id="email"
      type="email"
      required
      placeholder="email@example.com"
      class="w-full px-4 py-2 border border-gray-400 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
  </div>
</template>

<script setup lang="ts">
const model = defineModel()
</script>
