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
        <dropdown/>
      </div>
      <div class="flex-grow container mx-auto relative">
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