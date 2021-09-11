<template>
  <div class="h-screen w-screen absolute flex flex-col justify-center items-center bg-white bg-opacity-80 z-50">
    <span class="font-bold mb-2 bg-av-50 px-5 py-1 rounded-full">{{loading}}</span>
    <loading-spinner/>
  </div>
</template>

<script>
import {useStore} from "../use";
import LoadingSpinner from "./LoadingSpinner.vue";
export default {
  components: {LoadingSpinner},
  setup() {
    const {state} = useStore();
    const {loading} = state;
    return {loading}
  }
}
</script>