<template>
  <delete-settlement-modal :open="openDeleteSettlementModal" :settlements="settlements || []" @close="openDeleteSettlementModal = false" @deleted="refreshSettlements"/>

  <div class="p-4">
    <div class="relative border-dashed border-gray-300 border-4 p-4">
      <h1 class="absolute -top-5 bg-white px-2 text-3xl font-glory font-bold text-gray-500">Gestión de fincas</h1>
      <span class="font-glory font-bold text-gray-500">Finca</span>
      <div class="relative flex justify-between items-center gap-4">
        <div>
          <av-select v-model="settlement">
            <option v-for="settlement in settlements" value="1" selected>{{ settlement.name }}</option>
          </av-select>
        </div>
        <div>
          <button type="button" @click="open" class="btn btn-persimmon text-white font-glory mr-4">
            Crear finca
          </button>
          <button type="button" @click="openDeleteSettlementModal = true" class="btn btn-dark text-white font-glory">
            Eliminar finca
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import AvSelect from "./forms/AvSelect.vue";
import useSettlements from "../use/useSettlements";
import settlementsService from "../services/settlementsService";
import DeleteSettlementModal from "./modals/DeleteSettlementModal.vue";
export default {
  components: {AvSelect, DeleteSettlementModal},
  setup() {
    const settlements = ref();
    const openDeleteSettlementModal = ref(false);
    const refreshSettlements = async () => {
      settlements.value = await settlementsService.all();
      console.log('Borrado exitoso')
    }
    refreshSettlements();
    const settlement = ref('1');
    const {open} = useSettlements();


    return {settlements, settlement, open, openDeleteSettlementModal, refreshSettlements}
  }
}
</script>