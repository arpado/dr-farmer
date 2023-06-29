<template>
  <div
      class="btn-toggle-menu flex flex-col justify-around items-center text-white"
      
      @click="$emit('toggleMenu')"
    >
      <div :class="[{ 'top-active' : isActive },'hamb-bar']" id="hamb-bar-top"></div>
      <div :class="[{ 'mid-active' : isActive },'hamb-bar']" id="hamb-bar-middle"></div>
      <div :class="[{ 'bot-active' : isActive },'hamb-bar']" id="hamb-bar-bottom"></div>
    </div>
</template>

<script >
export default {
    props: ['isActive'],
}
</script>

<style scoped>
.btn-toggle-menu {
  height: 50px;
  width: 50px;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white; */
  /* top: 10px;
  right: 30px; */
  /* --aug-bl-inset2: 30%;
  --aug-br-inset1: 30%; */
}
.btn-toggle-menu:hover {
  cursor: pointer;
}
.hamb-bar {
  width: 100%;
  height: 5px;
  background-color: white;
  border-radius: 10px;
  transform-origin: center;
  transition: transform 500ms cubic-bezier(0.54, 0.54, 0.54, 0.54);
}
.top-active {
  transform: translate3D(0px, 16.5px, 0px) rotateZ(45deg);
}
.mid-active {
  transform: rotateZ(45deg);
}
.bot-active {
  transform: translate3D(0px, -16.5px, 0px) rotateZ(-45deg);
}
</style>