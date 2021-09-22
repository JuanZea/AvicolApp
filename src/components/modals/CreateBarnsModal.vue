<template>
  <modal-layout :open="open" @close="$emit('close')">
    <div class="p-6 border-dashed border-4 border-gray-300 border-opacity-50 w-96">
      <h1 class="font-glory font-bold font-lato text-3xl"> Crear un nuevo galpón </h1>
      <create-barns-form @created="$emit('created'); $emit('close')"/>
      <div class="content-end self-end">
        <div class="flex content-end justify-end h-full max-h-48">
          <img class="object-contain" src="/src/assets/illustrations/barn.svg">
        </div>
      </div>
    </div>
  </modal-layout>
</template>

<script>
import CreateSettlements from "../../views/auth/settlements/CreateSettlements.vue";
import ModalLayout from "./ModalLayout.vue";
import CreateBarnsForm from "../forms/CreateBarnsForm.vue";

export default {

  components: {
    CreateBarnsForm,
    ModalLayout,
    CreateSettlements,
  },

  props: { open: {required: true} },
}
</script>