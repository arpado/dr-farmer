<template>
  <div class="header-wrapper sticky h-28 w-full -top-8 z-50 flex justify-center items-center bg-black text-white">
    <div class=" w-full max-w-7xl flex justify-between items-center">
      <div class="logo mx-8 text-3xl">DrFarmer</div>
      <nav class="navigation-container">
        <NuxtLink class="mx-8 text-2xl" v-for="link in links" :key="link.to" :to="link.to">
          {{ link.name }}
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Home",
          to: "/",
        },
        {
          name: "Products",
          to: "/products",
        },
        {
          name: "Blog",
          to: "/blog",
        },
        {
          name: "Contacts",
          to: "/#contacts",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* .header-wrapper {

} */
</style>