<template>
  <img :src="`https://ui-avatars.com/api/?name=${name}&background=${background}&rounded=${rounded}&bold=${bold}`" alt="Avatar image"/>
</template>

<script>
export default {
  props: {name: String, background: String, rounded: String, bold: String}
}
</script>