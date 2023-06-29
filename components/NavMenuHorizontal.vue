<template>
    <div>
    <ul
      class="flex bg-black"
    >
      <li class="p-3 text-2xl" v-for="link in links" :key="link.to">
        <NuxtLink
          :class="[{ 'nav-link-active': isActive(link.to) }, 'nav-link', 'p-3', 'rounded']"
          :to="link.to"
        >
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(['links', 'isActive'])
</script>

<style>
</style>