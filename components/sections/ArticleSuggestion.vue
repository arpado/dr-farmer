<template>
  <section class="second-article-suggestion flex justify-center py-16">
    <div
      class="w-full max-w-5xl mx-8 flex items-center flex-col-reverse relative"
      ref="articleContainer"
    >
      <div
        :class="[
          textPos,
          'article-textbox',
          'z-10',
          'bg-white',
          'my-2',
          'p-8',
          'static',
          'md:absolute',
          'space-y-4',
          'opacity-0'
        ]"
        ref="articleTextBox"
      >
        <NuxtLink
          class="block text-center text-2xl text-blue-500"
          :to="article._path"
        >
          {{ article.title }}
        </NuxtLink>
        <ContentRendererMarkdown
          v-if="article"
          :value="article"
          :excerpt="true"
          class="textbox"
        />
        <NuxtLink class="nuxtlink block text-center mx-auto" :to="article._path"
          >READ MORE</NuxtLink
        >
      </div>
      <NuxtLink
        :to="article._path"
        class="article-link relative"
      >
      <!-- w-full md:w-10/12 -->
        <img
          class="article-image object-scale-down opacity-0"
          :src="`images/${article.cover}`"
          alt=""
          ref="articleImage"
        />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { animate, inView } from 'motion'

const props = defineProps(["article", "textBoxPos"]);
const articleContainer = ref(null);
const articleTextBox = ref(null);
const articleImage = ref(null);

const article = ref(null);

const textPos = computed(() => {
  return props.textBoxPos;
});

article.value = await queryContent(`/blog/${props.article}`).findOne();

onMounted( async() => {
// article.value = await useAsyncData('article', () =>
//     queryContent(`/blog/${props.article}`).findOne()
// )
// article.value = await queryContent(`/blog/${props.article}`).findOne();
// console.log(articleContainer)
  const stop = inView(articleContainer.value, () => {
    if (articleTextBox.value.classList.contains('article-textbox-1')) {
      animate(articleTextBox.value, {opacity: 1, x: [-100, 0], y: ['-50%', '-50%']}, { duration: 3 })
      } else {
      animate(articleTextBox.value, {opacity: 1, x: [-100, 0]}, { duration: 3 })
    }
    animate(articleImage.value, {opacity: 1, x: [100, 0]}, { duration: 3 })
  },
  {margin: "0px 0px -25% 0px"})
});
onUnmounted(() => {
  stop()
})
</script>

<style scoped>
.article-textbox {
  width: 100%;
  /* max-width: 350px; */
  height: fit-content;
  /* max-width: unset; */
  box-shadow: 2px 2px 4px 0px #333;
  background-color: white;
  inset: 0 0 0 0;
  transform: initial;
}
.article-link {
  right: 0%;
  max-width: 100%;
}
.article-image {
  max-height: 600px;
}
@media (min-width: 768px) {
  .article-textbox {
    max-width: 350px;
  }
  .article-textbox-1 {
    inset: 50% auto auto 0;
    transform: translateY(-50%);
  }
  .article-textbox-2 {
    inset: auto auto -10% 0;
    transform: unset;
  }
  .article-link {
    right: -10%;
    max-width: 80%;
  }
}
</style>