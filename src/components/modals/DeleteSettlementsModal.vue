<template>
  <modal-layout :open="open" @close="$emit('close')">
    <div class="p-6 border-dashed border-4 border-gray-300 border-opacity-50">
      <h2 class="font-glory font-bold text-2xl mb-4 text-center">Elige la finca a eliminar</h2>
      <form id="form" @submit.prevent="submit">
        <div v-for="settlement in settlements" class="flex items-center gap-2">
          <input :name="settlement.name" :value="settlement.id" class="rounded text-av-50 border-av-50 focus:ring-av-100"
                 :id="settlement.id" type="checkbox">
          <label :for="settlement.id" class="font-glory text-xl">{{ settlement.name }}</label>
        </div>
        <div class="flex justify-center mt-4">
          <button type="submit" class="btn btn-red text-white gap-2">
            <fai icon="trash-alt"/>
            <span class="font-glory">Eliminar</span>
          </button>
        </div>
      </form>
    </div>
  </modal-layout>
</template>

<script>

import { settlementsService } from "../../services";
import ModalLayout from "./ModalLayout.vue";
import {useSettlements} from "../../use";

export default {
  props: { open: {required: true} },
  components: { ModalLayout },
  setup(props, context) {

    const { settlements, refreshSettlements, refreshActiveSettlement } = useSettlements();

    const submit = () => {
      if (!confirm('¿Estas seguro?')) return;
      const formData = new FormData(document.getElementById('form'));
      let charge = 0;
      let goal = 0;
      const deleted = [];
      for (let id of formData.values()) {
        deleted.push(id);
        goal++;
        settlementsService.delete(id)
            .then(async () => {
              charge++;
              if (charge === goal) {
                await refreshSettlements(true);
                await refreshActiveSettlement();
                context.emit('close');
              }
            });
      }
    }

    return { submit, settlements }
  }
}
</script>