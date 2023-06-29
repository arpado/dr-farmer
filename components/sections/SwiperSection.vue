<template>
  <section class="testimonials-section p-8">
    <swiper
      class="swiper-container"
      :slides-per-view="1"
      :space-between="50"
      :autoplay="{ delay: 2000 }"
    >
      <swiper-slide
        class="swiper-slide p-4 isolate flex justify-center items-center"
        v-for="(testimonial, index) in testimonials"
        :key="index"
      >
        <div class="swiper-slide-content space-y-4">
          <p>"{{ testimonial.body }}"</p>
          <div class="flex items-center">
            <ElementsProfilePic :imgsrc="`/images/${testimonial.pic}`" />
            <span class="italic mx-4"> -- {{ testimonial.name }}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

export default {
  props: ['testimonials'],
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
.swiper-container {
  min-height: 300px;
}
.swiper-slide {
  min-height: 250px;
  max-width: 800px;
  background-color: royalblue;
  color: white;
  position: relative;
  display: flex;
}
.swiper-slide::before {
  content: open-quote;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 10rem;
  font-weight: bold;
  line-height: 1;
  z-index: -1;
  /* color: black(100, 98, 98); */
}
.swiper-slide::after {
  content: no-close-quote;
}
.swiper-slide-content {
  max-width: 500px;
}
</style>