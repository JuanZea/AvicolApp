<template>
  <div :class="open ? 'block' : 'hidden'" v-cloak>
    <div class="sidebar-wrapper sidebar shadow-lg h-full">
      <div v-if="open" class="w-100">
        <div
          class="
            bg-palette-10
            rounded-r-full
            shadow
            flex
            py-1
            pr-5
            justify-end
            items-center
            gap-3
            mt-4
            mr-4
          "
        >
          <span class="font-lobster text-3xl">AvicolApp</span>
          <img
            class="h-12"
            src="/src/assets/logos/avicolapp-icon-dark.svg"
            alt="Avicolapp logo"
          />
        </div>

        <div class="nav-item">
          <router-link
            class="w-100 h-100 gap-3 flex items-center"
            :to="{ name: 'home' }"
          >
            <fai class="hvr-grow" icon="home" />Inicio
          </router-link>
        </div>
      </div>
    </div>
    <div class="modal-backdrop lg:hidden flex justify-end pt-4 pr-4 show">
      <a class="no-underline pointer" @click="closeSideBar">
        <fai class="text-white hvr-grow" icon="times" />
      </a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSidebar } from "../use";

export default {
  setup() {
    let { open, closeSideBar } = useSidebar();
    const windowWidth = ref(window.innerWidth);

    return { open, windowWidth, closeSideBar };
  },

  mounted() {
    this.open = this.windowWidth < 768;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });

    onbeforeprint = () => {
      this.closeSideBar();
    };
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>