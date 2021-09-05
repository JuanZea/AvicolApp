<template>
  <div class="h-screen flex">
    <div class="flex flex-col w-full">
      <div class="flex bg-gray-100 justify-between pr-4 py-2 items-center">
        <logo-sticker lateral/>
        <div class="text-xl font-lato">{{title}}</div>
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
import {useAuthentication} from "../../use";
import Dropdown from "../../components/Dropdown.vue";
// import {currentUser} from "firebase/auth";
import Avatar from "../../components/dummies/Avatar.vue";
import LogoSticker from "../../components/dummies/LogoSticker.vue";

export default {
  components: {LogoSticker, Avatar, Dropdown},
  setup() {
    // const user = currentUser;
    const route = useRoute();
    const title = computed(() => route.meta.title);

    const {logout} = useAuthentication();

    return {title, logout};
  },
};
</script>