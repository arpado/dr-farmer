<template>
  <footer class="footer-wrapper p-4 bg-black text-white">
    <div class="max-w-7xl flex items-center justify-between m-auto">
      <div class="sitemap mx-8">
        <h3 class="text-center">Site Map</h3>
        <ul class="">
          <li
            class="sm:inline m-4 underline"
            v-for="(link, index) in shortenedLinks"
            :key="index"
          >
            <NuxtLink :to="link.to">
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="madeby mx-8">
        <p>Made by Arpado.</p>
        <p>Rights Reserved, 2023.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { links } = defineProps(["links"]);
const shortenedLinks = links.slice(0, 3);
// const shortenedLinks = computed(() =>  links.slice(0, 3))
</script>

<style>
.footer-wrapper {
  min-height: 112px;
  height: fit-content;
}
</style>