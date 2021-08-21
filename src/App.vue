<template>
  <curtain v-if="loading"/>
  <router-view v-if="ready"/>
</template>

<script>
import {useStore} from "vuex";
import {computed, ref} from "vue";
import Curtain from "./components/Curtain.vue";
import {settlementsService} from "./services";

export default {
  components: {Curtain},
  setup() {
    const store = useStore();
    const ready = ref(false);
    const loading = computed(() => store.state.loading);
    store.dispatch('initialize').then(() => {
      store.dispatch('loading', false);
      ready.value = true;
    });

    return {ready, loading}
  }
}
</script>