<template>
  <div class="products-wrapper p-4 bg-blue-500">
    <div
      class="header-section max-w-3xl mx-auto my-4 p-4 border border-solid border-black bg-white"
    >
      <h2 class="text-center my-4 text-2xl">Products to help your livestock</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, harum
        quasi adipisci temporibus ipsam nam quos facilis distinctio. Natus,
        suscipit.
      </p>
    </div>
    <div class="card-wrapper w-full max-w-5xl mx-auto my-8 flex flex-col gap-8">
      <CardsProductCard
        class="product-card my-4 bg-white opacity-0"
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        ref="productCard"
      />
    </div>
  </div>
</template>

<script setup>
import { animate, inView } from "motion";
const productCard = ref([]);

const { data: products } = await useAsyncData("products", () =>
  queryContent("/products/").find()
);
onMounted(() => {
  productCard.value.forEach((card, index) => {
    const stop = inView(
      card.$el,
      () => {
        if (index % 2) {
          animate(
            card.$el,
            { opacity: [0, 1], x: [100, 0] },
            { duration: 1 }
          );
        } else {
          animate(
            card.$el,
            { opacity: [0, 1], x: [-100, 0] },
            { duration: 1 }
          );
        }
      },
      { amount: 0.5 }
    );
  });
});
onBeforeRouteLeave(() => {
  stop()
})
</script>

<style scoped>
.products-wrapper {
  min-height: calc(100dvh - 224px);
}
.product-card {
  flex-direction: column;
}
.product-card:nth-child(odd) {
  align-self: flex-start;
}
.product-card:nth-child(even) {
  align-self: flex-end;
}
@media (min-width: 640px) {
  .product-card {
    align-self: center;
  }
  .product-card:nth-child(odd) {
    flex-direction: row;
  }
  .product-card:nth-child(even) {
    flex-direction: row-reverse;
  }
}
</style>