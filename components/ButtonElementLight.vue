<template>
  <button class="btn px-8 py-4 text-blue-500 bg-white border-2 border-solid border-blue-500 hover:bg-blue-500 hover:text-white hover:border-white transition-all">
      <span>{{ text }}</span>
  </button>
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
    /* border: 2px solid white; */
    border-radius: 25px;
    /* color: white; */
    font-weight: bold;
}
</style>