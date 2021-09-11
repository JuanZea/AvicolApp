<template>
  <img :src="`https://ui-avatars.com/api/?name=${name || state.user.displayName}&background=${background}&rounded=${rounded}&bold=${bold}`" alt="Avatar image"/>
</template>

<script>
import {useStore} from "../../use";

export default {
  props: {name: String, background: String, rounded: String, bold: String},
  setup() {
    const { state } = useStore();
    return { state }
  }
}
</script>