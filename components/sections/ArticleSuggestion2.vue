<template>
  <section class="second-article-suggestion flex justify-center py-16">
    <div
      class="w-full max-w-5xl mx-8 flex items-center flex-col-reverse relative"
    >
      <div
        class="article-textbox article-textbox-2 z-10 bg-white my-2 p-8 static md:absolute space-y-4"
      >
        <h3 class="text-2xl">Something Else</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          assumenda soluta. Voluptas praesentium non veritatis.
        </p>
        <NuxtLink class="nuxtlink block" to="/blog">READ MORE</NuxtLink>
      </div>
      <img
        class="article-image relative w-full md:w-10/12 top-0 object-scale-down"
        src="/images/jakob-cotton-K1hwkV5GPl0-unsplash.jpg"
        alt=""
      />
    </div>
  </section>
</template>

<script>
export default {};
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
.article-image {
  right: 0%;
  max-height: 600px;
}
@media (min-width: 768px) {
  .article-textbox {
    max-width: 350px;
  }
  /* .article-textbox-1 {
    inset: 50% auto auto 0;
    transform: translateY(-50%);
  } */
  .article-textbox-2 {
    inset: auto auto -10% 0;
    transform: unset;
  }
  .article-image {
    right: -10%;
  }
}
</style>