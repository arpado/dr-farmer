<template>
  <div
    class="product-card max-w-3xl p-4 flex gap-4 border border-black border-solid rounded"
  >
    <div class="image-container">
      <img :src="`images/products/${product.image}`" alt="" />
    </div>
    <div class="flex flex-col justify-evenly">
      <div class="text-container p-4 space-y-4">
        <h3 class="text-xl font-bold text-center">{{ product.name }}</h3>
        <p>{{ product.description }}</p>
      </div>
      <div class="flex justify-evenly">
        <ElementsButtonLight text="Learn More" />
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
.image-container > img {
  height: 100%;
  object-fit: contain;
  margin: 0 auto;
}
</style>