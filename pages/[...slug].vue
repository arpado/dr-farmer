<template>
  <main class="article-wrapper p-4 bg-blue-500">
    <article class="article-container max-w-5xl mx-auto bg-white">
      <ContentDoc />
      <NuxtLink to="/blog">Back to blogs</NuxtLink>
      <NuxtLink to="/">Home</NuxtLink>
    </article>
  </main>
</template>

<script>
export default {};
</script>

<style>
.article-wrapper {
  min-height: calc(100dvh - 224px);
}
.article-container {
}
</style>