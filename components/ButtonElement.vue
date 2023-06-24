<template>
  <div class="btn px-8 py-4 bg-blue-500">
      <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
    props: ['text']
}
</script>

<style scoped>
.btn {
    width: fit-content;
    height: fit-content;
    border: 2px solid white;
    border-radius: 25px;
    color: white;
    font-weight: bold;
}
</style>