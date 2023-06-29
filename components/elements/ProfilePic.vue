<template>
  <div class="profile-pic-container border border-solid border-black rounded-full overflow-hidden">
      <img :src="imgsrc" alt="">
  </div>
</template>

<script>
export default {
    props: ['imgsrc']
}
</script>

<style>
.profile-pic-container {
    width: 50px;
    height: 50px;
}
</style>