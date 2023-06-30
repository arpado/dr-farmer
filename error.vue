<template>
  <div class="error-wrapper w-full min-h-screen flex justify-center items-center">
    <div class="error-card flex flex-col md:flex-row">
      <div class="image-container m-auto">
        <!-- col-start-1 col-end-3 row-start-1 row-end-2 -->
        <img src="images/4200_3_08.jpg" alt="" />
      </div>
      <div class="text-container bg-white rounded m-auto p-8 text-center text-xl">
        <!-- col-start-2 col-end-4 row-start-1 row-end-2 -->
        <p>Error {{error.statusCode}}:</p>
        <p>{{ error.message }}!</p>
        <div class="flex justify-evenly items-center">
          <button class="nuxtlink mt-8" @click="$router.go(-1)">Back to Prevous</button>
          <NuxtLink class="nuxtlink mt-8" to="/">Back to Home</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// const route = useRoute();

// <a href="https://www.freepik.com/free-vector/cute-cow-surprised-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_20188224.htm">Image by catalyststuff</a> on Freepik

const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<style scoped>
.error-wrapper {
  background-color: #7cff8f;
}
.error-card {
  grid-template-columns: 1fr 20px 1fr;
  /* min-height: 100dvh;
  min-width: 100dvw; */
  /* width: 500px; */
  /* height: 500px; */
  height: fit-content;
}
.image-container {
  max-width: 500px;
}
.text-container {
  height: fit-content;
  max-width: 300px;
  min-width: 50%;
  box-shadow: 0px 5px 10px 0 black;
}
</style>