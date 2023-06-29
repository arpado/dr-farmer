<template>
  <div
    class="header-wrapper sticky h-28 w-full -top-8 z-50 flex justify-center items-center bg-black text-white"
  >
    <div class="w-full max-w-7xl flex justify-between items-center">
      <div class="logo mx-8 text-3xl">DrFarmer</div>
      <nav class="navigation-container">
        <NavMenuDropdown v-if="smallScreen" :links="links" :isActive="isActive"/>
        <NavMenuHorizontal v-else :links="links" :isActive="isActive"/>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const smallScreen = breakpoints.smallerOrEqual('md')

const links = [
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
];

const route = useRoute();
const isActive = (path) => {
  if (path === "/") {
    return route.path === path;
  }
  return route.path.includes(path);
};
</script>

<style>
/* .header-wrapper {

} */
.nav-link {
  transition: background-color 500ms ease-in-out, color 500ms ease-in-out;
}
.nav-link-active {
  background-color: navajowhite;
  color: black;
}

</style>