<template>
  <section class="testimonials-section p-8">
    <client-only>
      <swiper-container
        class="swiper-container"
        :slides-per-view="1"
        :space-between="spaceBetween"
        :centered-slides="true"
        :pagination="{
          hideOnClick: true,
        }"
        :breakpoints="{
          768: {
            slidesPerView: 1,
          },
        }"
        :autoplay="{
          delay: 5000,
        }"
        :loop="true"
      >
        <!-- @progress="onProgress"
      @slidechange="onSlideChange" -->
        <swiper-slide
          class="swiper-slide px-12 py-24 isolate flex justify-center items-center"
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <div class="swiper-slide-content space-y-4">
            <p>"{{ testimonial.body }}"</p>
            <div class="flex items-center">
              <ElementsProfilePic :imgsrc="`/images/users/${testimonial.pic}`" />
              <span class="italic mx-4"> -- {{ testimonial.name }}</span>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </client-only>
  </section>
</template>

<script>
import { register } from "swiper/element/bundle";
register();

export default {
  props: ["testimonials"],
  components: {
    "swiper-container": "swiper-container",
    "swiper-slide": "swiper-slide",
  },
  setup() {
    const spaceBetween = 10;
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    };

    const onSlideChange = (e) => {
      console.log("slide changed");
    };

    return {
      spaceBetween,
      onProgress,
      onSlideChange,
    };
  },
};
</script>

<style scoped>
.swiper-container {
  min-height: 300px;
}
.swiper-slide {
  min-height: 250px;
  /* background-color: royalblue;
  color: white; */
  background-color: white;
  color: black;
  position: relative;
  display: flex;
}
.swiper-slide-content {
  position: relative;
}
.swiper-slide-content::before {
  content: open-quote;
  position: absolute;
  top: -2.5rem;
  left: -2.5rem;
  font-size: 10rem;
  font-weight: bold;
  line-height: 1;
  z-index: -1;
  opacity: 0.7;
  color: royalblue;
  /* color: black(100, 98, 98); */
}
.swiper-slide-content::after {
  content: no-close-quote;
}
.swiper-slide-content {
  max-width: 500px;
}
</style>