<template>
  <main class="article-wrapper p-4 bg-blue-500">
    <article
      class="article-container max-w-5xl h-2/5 min-h-fit mx-auto p-8 bg-white"
    >
      <ContentDoc v-slot="{ doc }">
        <h1 class="text-center text-2xl font-bold">{{ doc.title }}</h1>
        <div class="flex gap-4 items-center p-4">
          <ElementsProfilePic imgsrc="/images/20.jpg" />
          <p>{{ doc.author }}</p>
        </div>
        <ContentRenderer :value="doc" class="article-body space-y-8" />
      </ContentDoc>
      <div class="links flex gap-4 p-4">
        <NuxtLink class="underline underline-offset-4 decoration-2 text-blue-500" to="/blog">Back to blogs</NuxtLink>
        |
        <NuxtLink class="underline underline-offset-4 decoration-2 text-blue-500" to="/">Home</NuxtLink>
      </div>
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
.article-body ul {
  list-style: disc;
  list-style-position: inside;
}
</style>