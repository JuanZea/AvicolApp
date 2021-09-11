<template>
  <curtain v-if="state.loading"/>
  <router-view/>
</template>

<script>
import {ref} from "vue";
import Curtain from "./components/Curtain.vue";
import {useStore} from "./use";

export default {
  components: {Curtain},
  setup() {
    const ready = ref(false);
    const {state} = useStore();
    return {ready, state}
  }
}
</script>