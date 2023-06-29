<template>
  <section
      class="hero flex items-center justify-center md:justify-start md:mx-"
    >
      <div class="hero-textbox my-4 p-6 flex flex-col">
        <div class="text-center">
          <h1 class="main-title my-8 text-4xl">Lorem ipsum dolor sit.</h1>
          <p class="selling-point my-4 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p class="selling-point my-4 text-xl">
            Molestiae rerum quam eum natus? Ipsa itaque perferendis debitis sunt
            repellendus! Impedit.
          </p>
        </div>
        <ElementsButtonDark text="Learn More" class="m-auto text-xl" />
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero {
  min-height: calc(100dvh - 7rem);
  height: fit-content;
  background-image: royalblue;
  background-image: url("/images/white-brown-cow-looking-straight-camera-with-herd-cows-pasture-background.jpg");
  background-size: cover;
  background-position-x: 90%;
  background-position-y: center;
  background-attachment: fixed;
  font-family: Lato;
}
.hero-textbox {
  left: 0;
  width: 100%;
  max-width: 350px;
  height: fit-content;
}
.hero-textbox {
  max-width: 350px;
  min-height: 500px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
}
.main-title {
  line-height: 34px;
  letter-spacing: -2px;
  text-transform: uppercase;
}
.selling-point {
  line-height: 30px;
  letter-spacing: -1px;
}
@media (min-width: 768px) {
  .hero-textbox {
    margin-left: 20%;
  }
}
</style>