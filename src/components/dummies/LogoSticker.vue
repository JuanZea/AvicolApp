<template>
  <div :class="lateral ? 'rounded-r-full gap-2' : 'rounded-b-full px-12 gap-5'" class="flex bg-av-50 shadow-md p-2 items-center cursor-pointer">
    <span :class="lateral ? 'text-xl' : 'text-5xl'" class="font-lobster">AvicolApp</span>
    <img :class="lateral ? 'h-7' : 'h-20'" src="/src/assets/logos/avicolapp-icon-dark.svg" alt="AvicolApp logo">
  </div>
</template>

<script>
export default {
  props: {lateral: Boolean}
}
</script>