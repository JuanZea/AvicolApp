<template>
  <div class="h-screen flex">
    <!--  SIDEBAR  -->
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

    <div class="w-full">
      <div class="flex bg-gray-100 justify-between px-4 py-2 items-center">
        <div class="cursor-pointer" @click="toggleSideBar">
          <fas class="text-palette-40" icon="bars"/>
        </div>
        <div class="font-lato">{{ title }}</div>
        <div><img class="rounded-full h-7" src="https://ui-avatars.com/api/?name=Alejandro Yarce&background=ffba08" alt="Avatar image"></div>
      </div>

      <router-view/>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRoute} from "vue-router";
import {openSideBar, closeSideBar} from "/src/use/sideBarBehavior";

export default {
  setup() {
    const open = ref(false);
    const route = useRoute();
    const title = ref(route.meta.title);
    const toggleSideBar = () => {
      if (open.value) {
        closeSideBar('sidebar');
        open.value = false;
      } else {
        openSideBar('sidebar', 288);
        open.value = true;
      }
    }

    return { open, title, toggleSideBar }
  }
}
</script>