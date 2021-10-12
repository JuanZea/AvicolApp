<template>
  <modal-layout :open="open" @close="$emit('close')">
    <div class="p-6 border-dashed border-4 border-gray-300 border-opacity-50 lg:w-96">
      <h2 class="font-glory text-xl mb-4 text-center">
        Estás apunto de eliminar el galpón:
      </h2>
      <h1 class="font-glory text-2xl mb-4 text-center">
        <strong>{{ barn.name }}</strong>
      </h1>

      <div class="flex justify-center mt-4 gap-5">
        <button type="button" class="btn btn-red text-white gap-2" @click="deleteBarn">
          <fai icon="trash-alt"/>
          <span class="font-glory">Eliminar</span>
        </button>
      </div>
    </div>
  </modal-layout>
</template>

<script>

import {barnsService} from "../../services";
import ModalLayout from "./ModalLayout.vue";
import {useBarns} from "../../use";
import {useToast} from "vue-toastification";

export default {

  props: {barn: {required: false, type: Object}, open: {required: true}},

  components: {ModalLayout},

  setup(props, context) {

    const {refreshBarns} = useBarns();
    const toast = useToast()
    const deleteBarn = () => {
      barnsService.delete(props.barn.id)
          .then(() => {
            refreshBarns();
            toast.success('Galpón eliminado con éxito')
            context.emit('close');
          }).catch(() => {
        toast.error('No fue posible eliminar el galpón')
      });
    }

    return {deleteBarn}
  }
}
</script>