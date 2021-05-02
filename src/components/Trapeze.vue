<template>
  <svg class="h-full w-full">
    <polygon fill="orange" :points="points"></polygon>
  </svg>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup() {
    const v1 = ref('0 0, ');
    const v2 = ref('0 493, ');
    const v3 = ref('400 493, ');
    const v4 = ref('600 0');

    const points = computed(() => v1.value + v2.value + v3.value + v4.value);

    return { points }
  },
}
</script>

<style scoped>

</style>