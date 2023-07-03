<template>
  <header
    class="header-wrapper sticky h-28 w-full -top-8 z-50 flex justify-center items-center bg-black text-white"
  >
    <div class="w-full max-w-7xl flex justify-between items-center">
      <div class="logo mx-8 text-3xl"><Icon id="rod-of-asclepius" name="game-icons:rod-of-asclepius" size="4rem"/>Dr Farmer</div>
      <nav class="navigation-container">
        <NavDropdownMenu class="block md:hidden" :links="links" :isActive="isActive"/>
        <NavHorizontalMenu class="md:block hidden" :links="links" :isActive="isActive"/>
        <!-- csak egyszeruen ugyanarra az elemre egy mediaquery, ami megvaltoztatja a style-t? -->
      </nav>
    </div>
  </header>
</template>

<script setup>
// import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
// const breakpoints = useBreakpoints(breakpointsTailwind)
// const smallScreen = breakpoints.smallerOrEqual('md')

const { links } = defineProps(['links'])

const route = useRoute();
const isActive = (path) => {
  if (path === "/") {
    return route.path === path;
  }
  return route.path.includes(path);
};
</script>

<style>
.nav-link {
  transition: background-color 500ms ease-in-out, color 500ms ease-in-out;
}
.nav-link-active {
  background-color: navajowhite;
  color: black;
}
#rod-of-asclepius {
  transform-origin: center;
  transform: rotateZ(27deg);
}
</style>