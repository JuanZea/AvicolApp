<template>
  <modal-layout :open="open" @close="$emit('close')">
    <div class="p-6 border-dashed border-4 border-gray-300 border-opacity-50 lg:w-96">
      <h1 class="font-glory font-bold font-lato text-3xl"> Crear un nuevo lote </h1>
      <create-lots-form @created="$emit('close')"/>
      <div class="content-end self-end">
        <div class="flex content-end justify-end h-full max-h-48">
          <img class="object-contain" src="/src/assets/illustrations/lot.svg">
        </div>
      </div>
    </div>
  </modal-layout>
</template>

<script>
import CreateSettlements from "../forms/CreateSettlements.vue";
import ModalLayout from "./ModalLayout.vue";
import CreateLotsForm from "../forms/CreateLotsForm.vue";

export default {

  components: {
    CreateLotsForm,
    ModalLayout,
    CreateSettlements,
  },

  props: { open: {required: true} },
}
</script>