<template>
  <div class="product-card max-w-3xl p-4 flex gap-4 border border-black border-solid">
      <div class="image-container">
          <img :src="`images/${product.image}`" alt="">
      </div>
      <div class="text-container p-4 space-y-4">
        <h3 class="text-xl">{{product.name}}</h3>
        <p>{{product.description}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['product'],
}
</script>

<style scoped>
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