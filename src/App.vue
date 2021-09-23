<template>
  <curtain v-if="state.loading"/>
  <modals/>
  <router-view/>
</template>

<script>
import { useStore } from "./use";
import Curtain from "./components/Curtain.vue";
import Modals from "./components/modals/Modals.vue";

export default {

  components: { Modals, Curtain },

  setup() {

    const { state } = useStore();
    return { state }

  }
}
</script>