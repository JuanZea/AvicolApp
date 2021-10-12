<template>
  <div class="h-screen flex">
    <div class="flex flex-col w-full">
      <div class="flex bg-gray-100 justify-between pr-4 py-2 items-center">
        <logo-sticker lateral @click="router.push({name: 'home'})"/>
        <div class="text-2xl font-extrabold">{{title}}</div>
        <div class="flex gap-4">
          <alert-dropdown :alerts="vaccinesProximate"/>
          <dropdown/>
        </div>
      </div>
      <div id="layout" class="flex-grow container flex justify-center mx-auto relative">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
import {useRouter, useRoute} from "vue-router";
import {useAuthentication, useMetrics} from "../../use";
import Dropdown from "../../components/Dropdown.vue";
import Avatar from "../../components/dummies/Avatar.vue";
import LogoSticker from "../../components/dummies/LogoSticker.vue";
import AlertDropdown from "../../components/AlertDropdown.vue";

export default {
  components: { AlertDropdown, LogoSticker, Avatar, Dropdown},
  setup() {
    const router = useRouter();
    const route = useRoute();
    const title = computed(() => route.meta.title);
    const { vaccinesProximate, refreshMetrics } = useMetrics();
    refreshMetrics(true);

    const {logout} = useAuthentication();

    return {router, title, logout, vaccinesProximate};
  },
};
</script>