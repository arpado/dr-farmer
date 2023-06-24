<template>
  <div class="blog-card">
    <img
      class="article-img w-full object-cover"
      :style="{ 'object-position': content.imgPos }"
      :src="`images/${content.image}`"
      alt=""
    />

    <div class="blog-text m-8 space-y-4">
      <NuxtLink class="block text-xl" :to="content.link">
        <!-- {{ content.title }} -->
        {{ data.title }}
      </NuxtLink>

      <ContentRendererMarkdown
        v-if="data"
        :value="data"
        :excerpt="true"
        class="textbox"
      />
      <NuxtLink class="block" :to="content.link">
        <!-- {{ content.title }} -->
        READ MORE
      </NuxtLink>

      <div class="article-details flex justify-between">
        <div class="author flex items-center">
          <ProfilePic imgsrc="images/20.jpg" />
          <span class="mx-2">{{ data.author }}</span>
        </div>
        <span class="flex items-center">{{
          new Date(data.created).toLocaleString()
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
  async setup(props) {
    let data = toRef(props, "data");

    try {
      data = await queryContent(props.content.link).findOne();
    } catch (error) {
      console.log(error);
    }

    return { data };
  },
  methods: {
    getFirstParagraph(content) {
      // Extract first paragraph
      const firstParagraph = content.split("\n\n")[0];
      return firstParagraph;
    },
  },
  computed: {
    getImgPos(props) {
      return props.content.imgPos;
    },
  },
};
</script>

<style>
.blog-card {
  min-height: 300px;
  min-width: 200px;
  width: 100%;
  max-width: 400px;
}
.article-img {
  height: 250px;
}
.article-details {
  margin-top: 4rem;
}
</style>