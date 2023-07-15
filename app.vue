<template>
  <div class="body">
    <SectionsHeaderElement :links="links"/>
    <!-- <NuxtLayout> -->
    <NuxtPage />
    <!-- </NuxtLayout> -->
    <SectionsFooterElement :links="links"/>
  </div>
</template>

<script setup>
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
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  /*  color-scheme: light dark;*/
  font-family: Roboto;
}
.body {
  min-height: calc(100dvh);
  /* padding-top: 150px; */
  overflow-x: clip;
}
.nuxtlink {
  /* text-decoration: royalblue underline solid .2rem;
  text-underline-position: 2px; */
  position: relative;
  width: fit-content;
  padding: 5px 0;
  background-color: white;
  transition: background-color 250ms, color 250ms;
  border-radius: 5px;
}
.nuxtlink:hover,
.nuxtlink::selection,
.nuxtlink:focus {
  background-color: royalblue;
  color: white;
}
.nuxtlink::after {
  content: "";
  position: absolute;
  inset: auto 0 0 0;
  height: 0.2rem;
  background: royalblue;
}
.page-enter-active,
.page-leave-active {
  transition: filter 0.4s;
}
.page-enter-from,
.page-leave-to {
  /* opacity: 0; */
  filter: blur(1rem);
}
</style>
