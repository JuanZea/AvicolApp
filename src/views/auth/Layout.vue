<template>
  <div class="h-screen flex" id="wrapper">
    <sidebar/>

    <div class="flex flex-col w-full">
      <div class="flex bg-gray-100 justify-between px-4 py-2 items-center">
        <div>
          <button class="cursor-pointer flex items-center" @click="toggleSidebar">
            <fas class="text-palette-40 hvr-grow" icon="bars"/>
          </button>
        </div>
        <div class="font-lato">{{ title }}</div>
        <dropdown>
          <template v-slot:button>
            <img class="rounded-full h-7" src="https://ui-avatars.com/api/?name=Alejandro Yarce&background=ffba08" alt="Avatar image"/>
          </template>
          <template v-slot:content>
            <div class="px-4 py-3">
              <p class="text-sm leading-5">Pepito Perez</p>
              <p class="text-sm font-medium leading-5 text-gray-900 truncate">
                pepito@example.com
              </p>
            </div>
            <div class="py-1">
              <router-link class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100" :to="{name: 'myAccount'}">
                Mi cuenta
              </router-link>
              <router-link class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100" to="">
                Mis fincas
              </router-link>
            </div>
            <div class="py-1">
              <a class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer hover:bg-gray-100" @click="logout">
                Cerrar Sesión
              </a>
            </div>
          </template>
        </dropdown>
      </div>
      <div class="flex-grow container mx-auto">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import Sidebar from "../../components/Sidebar.vue";
import {useAuthentication, useSidebar} from "../../use";
import Dropdown from "../../components/Dropdown.vue";

export default {
  components: {Sidebar, Dropdown},
  setup() {
    const route = useRoute();
    const title = ref(route.meta.title);
    const {toggleSidebar} = useSidebar();

    onMounted(() => {
      toggleSidebar();
    });

    const {logout} = useAuthentication();

    return {title, toggleSidebar, logout};
  },
};
</script>