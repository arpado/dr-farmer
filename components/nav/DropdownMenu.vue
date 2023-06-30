<template>
  <div ref="dropdown">
    <NavHamburgerButton
      class="mx-8"
      @toggleMenu="toggleMenu"
      :isActive="isOpen"
    />
    <transition>
      <ul class="absolute right-0 top-full bg-black" v-show="isOpen">
        <li class="mx-4 p-3 text-2xl" v-for="link in links" :key="link.to">
          <NuxtLink
            :class="[
              { 'nav-link-active': isActive(link.to) },
              'nav-link',
              'p-3',
              'rounded',
            ]"
            :to="link.to"
            @click="toggleMenu"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
const dropdown = ref(null);

onClickOutside(dropdown, () => (isOpen.value = false));

const props = defineProps(["links", "isActive"]);

let isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;

  //   if (!isOpen.value) {
  //     gsap.to('#nav-menu', {
  //       opacity: 1
  //     })
  //     isOpen.value = true
  //   } else {
  //     gsap.to('#nav-menu', {
  //       opacity: 0
  //     })
  //     isOpen.value = false
  //   }
};

onMounted(() => {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27 && isOpen.value) isOpen.value = false;
  });
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>