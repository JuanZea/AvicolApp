<template>
  <modal-layout :open="open" @close="$emit('close')">
    <div class="p-6 border-dashed border-4 border-gray-300 border-opacity-50 lg:w-96">
      <h2 class="font-glory text-xl mb-4 text-center">
        Estás apunto de eliminar el lote:
      </h2>
      <h1 class="font-glory text-2xl mb-4 text-center">
        <strong>{{ lot.id }}</strong>
      </h1>

      <div class="flex justify-center mt-4 gap-5">
        <button type="button" class="btn btn-red text-white gap-2" @click="deleteLot">
          <fai icon="trash-alt"/>
          <span class="font-glory">Eliminar</span>
        </button>
      </div>
    </div>
  </modal-layout>
</template>

<script>

import { lotsService } from "../../services";
import ModalLayout from "./ModalLayout.vue";
import {useLots} from "../../use";

export default {

  props: { lot: {required: false, type: Object}, open: {required: true} },

  components: {ModalLayout},

  setup(props, context) {
    const { refreshLots } = useLots();

    const deleteLot = async () => {
      lotsService.delete(props.lot.id)
          .then(async () => {
            refreshLots(true);
            context.emit('close');
          });
    }

    return {deleteLot}
  }
}
</script>