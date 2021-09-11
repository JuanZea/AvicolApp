<template>
  <transition name="degraded">
    <div v-if="open" class="flex justify-center items-center fixed inset-0 z-50">
      <div @click="close" class="absolute bg-black bg-opacity-70 h-full w-full"/>
      <slot/>
    </div>
  </transition>
</template>

<script>

export default {
  props: {open: {required: true, type: Boolean}},
  setup(props, context) {

    const close = () => {
      context.emit('close');
    }
    return {close}
  }
}
</script>