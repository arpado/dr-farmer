<template>
  <div
    class="product-card max-w-3xl p-4 flex gap-4 border border-black border-solid rounded"
  >
    <div class="image-container">
      <NuxtLink :to="product._path">
        <img :src="`images/products/${product.cover}`" :alt="`An image of the medication: ${product.title}`" class="h-full my-0 mx-auto object-contain max-w-xs"/>
      </NuxtLink>
    </div>
    <div class="flex flex-col justify-evenly">
      <div class="text-container p-4 space-y-4">
        <h3 class="text-xl font-bold text-center">{{ product.title }}</h3>
        <ContentRendererMarkdown
          v-if="product"
          :value="product"
          :excerpt="true"
          class="textbox"
        />
      </div>
      <div class="flex justify-evenly">
        <NuxtLink :to="product._path">
          <ElementsButtonLight text="Learn More" />
        </NuxtLink>
        <ElementsButtonDark text="Send Message" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.product-card {
  box-shadow: 2px 2px 10px 0 black;
}
.image-container {
  background-color: white;
  width: 100%;
  height: 400px;
}

</style>