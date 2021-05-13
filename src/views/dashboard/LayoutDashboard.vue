<template>

  <div class="h-screen flex">
    <!--  SIDEBAR  -->
    <div v-if="open" class="w-72 shadow-2xl">
<!--      <div class="bg-palette-10 rounded-r-full mr-5">-->
<!--        <span>Avicolapp</span>-->
<!--        <img src="/src/assets/logos/avicolapp-icon-dark.svg" alt="AvicolApp logo">-->
<!--      </div>-->
      <div class="bg-palette-10 rounded-r-full shadow flex py-1 pr-5 justify-end items-center gap-3 mt-4 mr-4">
        <span class="font-lobster text-3xl">AvicolApp</span>
        <img class="h-12" src="/src/assets/logos/avicolapp-icon-dark.svg" alt="Avicolapp logo">
      </div>
    </div>

    <div class="w-full">
      <div class="flex bg-gray-100 justify-between px-4 py-2 items-center">
        <div class="cursor-pointer" @click="open = !open"><BarsSolid :format="'h-6 text-palette-40'"/></div>
        <div class="font-lato">{{ title }}</div>
        <div><img class="rounded-full h-7" src="https://ui-avatars.com/api/?name=Alejandro Yarce&background=ffba08" alt="Avatar image"></div>
      </div>

      <router-view/>
    </div>
  </div>

</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

import BarsSolid from "../../assets/icons/Bars-solid.vue";
import TimesSolid from "../../assets/icons/Times-solid.vue";

export default {

  components: {
    TimesSolid,
    Dialog,
    BarsSolid,
    DialogTitle,
    DialogOverlay,
    TransitionRoot,
    TransitionChild,
  },

  setup() {

    const hola = function () {
      console.log('HOLA')
    }

    const open = ref(true)

    const route = useRoute();

    const title = ref(route.meta.title);

    return { open, title, hola }

  },

}

</script>