<template>
  <img :src="`https://ui-avatars.com/api/?name=${defaultName}&background=${background}&rounded=${rounded}&bold=${bold}`" alt="Avatar image"/>
</template>

<script>
import { useStore } from "../../use";
import { computed } from "vue";

export default {

  props: { name: String, background: String, rounded: String, bold: String },

  setup(props) {

    const { state } = useStore();

    const defaultName = computed(() => props.name || (state.user ? state.user.displayName : null));

    return { state, defaultName }

  }

}
</script>