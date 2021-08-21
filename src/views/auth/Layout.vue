<template>
  <div class="h-screen flex" id="wrapper">
    <sidebar />

    <div class="flex flex-col w-full">
      <div class="flex bg-gray-100 justify-between px-4 py-2 items-center">
        <div>
          <button
            class="cursor-pointer flex items-center"
            @click="toggleSidebar"
          >
            <fas class="text-av-40 hvr-grow" icon="bars" />
          </button>
        </div>
        <div class="font-lato">{{ title }}</div>
        <div>
          <img
            class="rounded-full h-7"
            src="https://ui-avatars.com/api/?name=Alejandro Yarce&background=ffba08"
            alt="Avatar image"
          />
        </div>
      </div>

      <div class="h-full">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Sidebar from "../../components/Sidebar.vue";
import { useSidebar } from "../../use";

export default {
  components: { Sidebar },
  setup() {
    const route = useRoute();
    const title = ref(route.meta.title);
    const { toggleSidebar } = useSidebar();

    onMounted(() => {
      toggleSidebar();
    });

    return { title, toggleSidebar };
  },
};
</script>