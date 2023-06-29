<template>
  <div class="blog-wrapper p-4 bg-blue-500">
    <div class="header-section max-w-3xl mx-auto my-4 p-4 border border-solid border-black bg-white space-y-4">
      <h2 class="text-center my-4 text-2xl">Products to help your livestock</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, harum
        quasi adipisci temporibus ipsam nam quos facilis distinctio. Natus,
        suscipit.
      </p>
    </div>
    <div
      class="card-wrapper w-full max-w-5xl mx-auto my-8 flex flex-wrap justify-center gap-8"
    >
      <CardsBlogCard
        class="product-card my-4 bg-white"
        v-for="(article, index) in articles"
        :key="index"
        :content="article"
      />
    </div>
    <!-- <div class="test"></div> -->
  </div>
</template>

<script>
import articles from "@/content/blogs.json";

export default {
  data() {
    return {
      articles,
    };
  },
};
</script>

<style scoped>
.blog-wrapper {
  min-height: calc(100dvh - 224px);
}
/* .test {
  width: 300px;
  height: 300px;
  position: relative;
}
.test:after {
  content: '1';
  background: red;
  width: 50px;
  height: 50px;
  top: 0;
  left: 0;
}
.test:after {
  content: '2';
  background: red;
  width: 50px;
  height: 50px;
  bottom: 0;
  right: 0;
}
.test::after. */
</style>