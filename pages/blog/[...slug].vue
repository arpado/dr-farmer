<template>
  <main class="article-wrapper p-4 bg-blue-500">
    <article
      class="article-container max-w-5xl h-2/5 min-h-fit mx-auto p-8 bg-white rounded-lg"
    >
      <ContentDoc v-slot="{ doc }">
        <h1 class="text-center text-2xl font-bold my-8">{{ doc.title }}</h1>
        <div class="flex gap-4 max-w-xl items-center p-4 m-auto">
          <ElementsProfilePic imgsrc="/images/20.jpg" />
          <p>{{ doc.author }}</p>
        </div>
        <ContentRenderer :value="doc" class="article-body m-auto space-y-8 prose" />
      </ContentDoc>
      <div class="links flex justify-center gap-4 p-4 mt-8">
        <NuxtLink class="underline underline-offset-4 decoration-2 text-blue-500" to="/blog">Back to blogs</NuxtLink>
        |
        <NuxtLink class="underline underline-offset-4 decoration-2 text-blue-500" to="/">Home</NuxtLink>
      </div>
    </article>
  </main>
</template>

<script setup>
// arra az esetre, ha nem ContentDoc-ban van a Renderer, gondolom
// const { path } = useRoute();
// const { data } = await useAsyncData(`content-${path}`, () => {
//   return queryContent()
//   .where({ _path: path })
//   .findOne()
// });

</script>

<style>
.article-wrapper {
  min-height: calc(100dvh - 224px);
}
.article-container {
  box-shadow: 5px 5px 15px 0 black;
}
.article-body ul {
  list-style: disc;
  list-style-position: inside;
}
</style>