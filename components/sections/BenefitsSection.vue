<template>
  <section class="benefits-section flex justify-center py-16 bg-blue-500">
    <div class="benefits-grid-container w-full max-w-5xl mx-8 grid">
      <div
        class="benefits-grid grid grid-cols-1 sm:grid-cols-2 gap-8 p-8"
        ref="benefitsContainer"
      >
        <ElementsBenefitBox
          v-for="(benefit, index) in benefits"
          :key="index"
          :content="benefit"
          :index="index"
          class="opacity-0"
          ref="benefitBoxes"
        />
      </div>
      <img
        class="benefits-img"
        src="/images/veterinary-farm-walking-cowshed-checking-cows_1000x667.jpg"
        alt=""
      />
    </div>
  </section>
</template>

<script setup>
import { animate, inView } from "motion";

const props = defineProps(["benefits"]);
const benefitsContainer = ref(null);
const benefitBoxes = ref([]);

onMounted(() => {
  benefitBoxes.value.forEach((box) => {
    const stop = inView(
      box.$el,
      () => {
        animate(box.$el, { opacity: 1 }, { duration: 3 });
      },
      { amount: 1 }
    );
  });
});
onBeforeRouteLeave(() => {
  stop()
})
</script>

<style scoped>
.benefits-section {
  min-height: 60dvh;
  height: fit-content;
}
.benefits-grid-container {
  grid-template-columns: 1fr;
}
.benefits-img {
  height: 100%;
  object-fit: cover;
  object-position: right;
}
@media (min-width: 768px) {
  .benefits-grid-container {
    grid-template-columns: 3fr 1fr;
  }
}
</style>