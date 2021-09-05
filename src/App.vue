<template>
  <curtain v-if="loading"/>
  <router-view/>
</template>

<script>
import {useStore} from "vuex";
import {computed, ref} from "vue";
import Curtain from "./components/Curtain.vue";

export default {
  components: {Curtain},
  setup() {
    const store = useStore();
    const ready = ref(false);
    const loading = computed(() => store.state.loading);
    return {ready, loading}
  }
}
</script>