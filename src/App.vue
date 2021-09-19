<template>
  <curtain v-if="state.loading"/>
  <router-view/>
</template>

<script>
import Curtain from "./components/Curtain.vue";
import { useStore } from "./use";

export default {

  components: { Curtain },

  setup() {

    const { state } = useStore();
    return { state }

  }
}
</script>