<template>
  <div id="sidebar" class="sidebar shadow-lg">
      <transition
        appear
        enter-active-class="transform duration-200 ease-out"
        leave-active-class="transform duration-200 ease-out"

        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"

        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div v-if="open" class="w-72">
          <div class="bg-palette-10 rounded-r-full shadow flex py-1 pr-5 justify-end items-center gap-3 mt-4 mr-4">
            <span class="font-lobster text-3xl">AvicolApp</span>
            <img class="h-12" src="/src/assets/logos/avicolapp-icon-dark.svg" alt="Avicolapp logo">
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
import {useSidebar} from "../use";

export default {
  setup() {
    const {open} = useSidebar();

    return {open}
  }
}
</script>