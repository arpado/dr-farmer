<template>
  <section class="features px-8 py-16 bg-blue-500 text-white">
    <div class="max-w-7xl flex flex-wrap md:flex-nowrap gap-8 mx-auto">
      <div class="features-title">
        <h2 class="my-4 text-2xl">Lorem, ipsum dolor.</h2>
        <hr class="w-2/3" />
        <p class="my-4 font-xl italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptas
          numquam debitis fuga!
        </p>
      </div>
      <ul
        class="features-list py-4 lg:columns-2 list-disc space-y-4"
        ref="featuresList"
      >
        <li
          v-for="(elem, index) in features"
          :key="index"
          v-motion="`featureElem${index}`"
          :initial="{ opacity: 0, y: 100 }"
          :variants="{
            customVisible: {
              opacity: 1,
              y: 0,
              transition: { delay: index * 1000 },
            },
          }"
          ref="featuresElem"
        >
          <span>{{ elem.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { useIntersectionObserver } from "@vueuse/core";
import { useMotions } from "@vueuse/motion";

export default {
  data() {
    return {
      features: [
        {
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt harum suscipit similique autem laudantium accusantium voluptatem sequi corrupti cum sint.",
        },
        {
          text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi qui. Quisquam est eaque repudiandae?",
        },
        {
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore consectetur esse atque quae id quod! Hic cupiditate, nemo ullam accusamus quisquam iure vel. Tenetur animi non quam unde delectus?",
        },
      ],
    };
  },
  setup() {
    const featuresList = ref(null);
    const featuresElem = ref(null);
    const observer = ref(null);

    return {
      featuresList,
      featuresElem,
      observer,
    };
  },

  mounted() {
    let motionElems = useMotions();

    this.observer = useIntersectionObserver(
      this.$refs["featuresList"],
      ([{ isIntersecting }], observerElement) => {
        if (isIntersecting) {
          this.$refs["featuresElem"].forEach((elem) => {
            elem.motionInstance.variant.value = "customVisible";
          });
        }
      },
      { threshold: 0.5 }
    );
  },

  beforeUnmount() {
    if (this.observer) {
      this.observer.stop();
    }
  },
};
</script>

<style scoped>
.features-title {
  flex-shrink: 2;
}
.features-list {
  flex-shrink: 3;
}
</style>