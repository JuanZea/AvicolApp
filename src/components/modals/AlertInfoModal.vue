<template>
  <modal-layout :open="open" @close="$emit('close')">
    <div class="p-6 border-dashed border-4 border-gray-300 border-opacity-50 lg:w-96">
      <div v-html="info" />
      <div class="w-full flex justify-end mt-4">
        <button type="button" class="btn btn-persimmon text-white gap-2" @click="$emit('close')">
          <span class="font-glory">Cerrar</span>
        </button>
      </div>
    </div>
  </modal-layout>
</template>

<script>

import ModalLayout from "./ModalLayout.vue";

export default {
  props: { info: {required: false, type: String}, open: {required: true} },
  components: {ModalLayout}
}
</script>