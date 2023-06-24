<template>
  <div class="space-y-2">
    <p>#{{index +1}}</p>
    <h3>{{ content.title }}</h3>
    <p>{{ content.body }}</p>
  </div>
</template>

<script>
export default {
    props: ['content', 'index'],
}
</script>

<style scoped>

</style>