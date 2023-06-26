<template>
  <div class="text-white text-center space-y-2">
    <p class="text-4xl">#0{{index +1}}</p>
    <h3 class="text-2xl">{{ content.title }}</h3>
    <p class="italic">{{ content.body }}</p>
  </div>
</template>

<script>
export default {
    props: ['content', 'index'],
}
</script>

<style scoped>

</style>