<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center bg-av-50 bg-opacity-5">
    <span class="absolute top-0 font-bold mb-2 bg-av-50 bg-opacity-20 px-5 py-1 rounded-b-full">{{loading}}</span>
    <loading-spinner/>
  </div>
</template>

<script>
import LoadingSpinner from "./LoadingSpinner.vue";
import {useStore} from "vuex";
import {computed} from "vue";
export default {
  components: {LoadingSpinner},
  setup() {
    const store = useStore();
    const loading = computed(() => store.state.loading);
    return {loading}
  }
}
</script>