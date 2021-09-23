<template>
  <modal-layout :open="open" @close="$emit('close')">
    <div class="p-6 border-dashed border-4 border-gray-300 border-opacity-50">
      <h1 class="font-glory font-bold font-lato text-3xl"> Crear una nueva finca </h1>
      <create-settlements @created="$emit('close')"/>
      <div class="content-end self-end">
        <div class="flex content-end justify-end h-full max-h-48">
          <img class="object-contain" src="/src/assets/illustrations/form-settlement.svg">
        </div>
      </div>
    </div>
  </modal-layout>
</template>

<script>
import CreateSettlements from "../forms/CreateSettlements.vue";
import ModalLayout from "./ModalLayout.vue";

export default {

  components: {
    ModalLayout,
    CreateSettlements,
  },

  props: { open: {required: true} },

}
</script>