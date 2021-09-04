<template>
  <div class="h-screen flex" id="wrapper">
    <sidebar/>

    <div class="flex flex-col w-full">
      <div class="flex bg-gray-100 justify-between px-4 py-2 items-center">
        <div>
          <button class="cursor-pointer flex items-center" @click="toggleSidebar">
            <fai class="text-palette-40 hvr-grow" icon="bars"/>
          </button>
        </div>
        <div class="font-lato">{{title}}</div>
        <dropdown>
          <template v-slot:button>
            <avatar class="h-7" :name="user.displayName" background="ffba08" rounded="true"/>
          </template>
          <template v-slot:content>
            <div class="px-4 py-3">
              <p class="text-sm leading-5">{{user.displayName}}</p>
              <p class="text-sm font-medium leading-5 text-gray-900 truncate">
                {{user.email}}
              </p>
            </div>
            <div class="py-1">
              <router-link class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100" :to="{name: 'myAccount'}">
                Mi cuenta
              </router-link>
              <router-link class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100" :to="{name: 'indexSettlements'}">
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
import {computed, onMounted} from "vue";
import {useRoute} from "vue-router";
import Sidebar from "../../components/Sidebar.vue";
import {useAuthentication, useSidebar} from "../../use";
import Dropdown from "../../components/Dropdown.vue";
import firebase from "firebase/app";
import Avatar from "../../components/dummies/Avatar.vue";

export default {
  components: {Avatar, Sidebar, Dropdown},
  setup() {
    const user = firebase.auth().currentUser;
    const route = useRoute();
    const title = computed(() => route.meta.title);
    const {toggleSidebar} = useSidebar();

    onMounted(() => {
      toggleSidebar();
    });

    const {logout} = useAuthentication();

    return {title, user, toggleSidebar, logout};
  },
};
</script>