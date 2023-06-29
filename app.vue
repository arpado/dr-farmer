<template>
  <div class="body">
    <HeaderElement />
    <!-- <NuxtLayout> -->
      <NuxtPage />
    <!-- </NuxtLayout> -->
    <FooterElement />
  </div>
</template>

<script>
export default {

}
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
</style>
