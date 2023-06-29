<template>
  <button class="btn px-8 py-4 text-white bg-blue-500 border-2 border-solid border-white hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-all">
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
    transform: color 250ms;
}
</style>