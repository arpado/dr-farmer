<template>
  <div class="wrapper">
    <SectionsHeroSection />
    <SectionsFeaturesSection />
    <SectionsArticleSuggestion1 />
    <SectionsAboutSection />
    <SectionsArticleSuggestion2 />
    <SectionsBenefitsSection :benefits="benefits" />
    <SectionsSwiperSection :testimonials="testimonials" />
    <SectionsContactsSection />
  </div>
</template>

<script>
export default {
  data() {
    return {
      benefits: [
        {
          title: "Lorem",
          body:
            "Sed, assumenda soluta amet consectetur adipisicing elit. Sed, assumenda soluta. Voluptas praesentium non veritatis.",
        },
        {
          title: "Ipsum",
          body:
            "Ipsum dolor sit amet consectetur adipisicing elit. Sed, assumenda soluta. Voluptas praesentium non veritatis.",
        },
        {
          title: "Assumenda",
          body:
            "Consectetur adipisicing elit. Sed, assumenda soluta. Voluptas praesentium non veritatis.",
        },
        {
          title: "Consectetur",
          body:
            "Voluptas praesentium non veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, assumenda soluta.",
        },
      ],
      testimonials: [
        {
          name: "Aron",
          pic: "82.jpg",
          body:
            "Super. Lorem ipsum dolor sit amet consectetur adipisicing elit... Sed, assumenda soluta.",
        },
        {
          name: "Edit",
          pic: "54.jpg",
          body: "Voluptas praesentium non veritatis.",
        },
        {
          name: "Janos",
          pic: "72.jpg",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas praesentium non veritatis.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  /* height: 1500px; */
}
</style>