<template>
<!--  <create-settlement-modal :open="openCreateSettlementModal" @close="openCreateSettlementModal = false" @created="refresh" />-->
<!--  <delete-settlement-modal :open="openDeleteSettlementModal" :settlements="settlements || []" @close="openDeleteSettlementModal = false" @deleted="refresh"/>-->

  <div class="p-4">
    <div class="relative border-dashed border-gray-300 border-4 p-4">
      <h1 class="absolute -top-5 bg-white px-2 text-3xl font-glory font-bold text-gray-500">Gestión de fincas</h1>
      <span class="font-glory font-bold text-gray-500">Finca</span>
      <div class="relative flex justify-between items-center gap-4">
        <div>
          <av-select v-if="settlement" v-model="settlement">
            <option class="bg-av-50 bg-opacity-10" v-for="settlement in settlements" :value="settlement.id.toString()">{{ settlement.name }}</option>
          </av-select>
          <span v-else class="font-glory bg-av-50 px-2 py-1 rounded">Cargando fincas...</span>
        </div>
        <div class="flex gap-4 whitespace-nowrap">
          <button type="button" @click="openModal('createSettlement')" class="btn btn-persimmon text-white font-glory">
            Crear finca
          </button>
          <button type="button" @click="openModal('deleteSettlement')" class="btn btn-dark text-white font-glory">
            Eliminar finca
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useModals } from "../use"
import AvSelect from "./forms/AvSelect.vue";
import useSettlements from "../use/useSettlements";
import CreateSettlementModal from "./modals/CreateSettlementsModal.vue";

export default {

  components: { AvSelect, CreateSettlementModal },

  setup() {


    const { openModal } = useModals();

    const { activeSettlement, settlements, refreshSettlements, refreshActiveSettlement, saveActiveSettlement } = useSettlements();
    const settlement = ref(activeSettlement.value.id.toString());

    refreshSettlements();

    const refresh = async () => {
      await refreshSettlements(true);
      await refreshActiveSettlement();
      settlement.value = activeSettlement.value.id.toString();
    }

    watch(settlements, (current, old) => {
      if (old) {
        if (old.length > current.length && current.length) {
          settlement.value = current[0].id.toString();
        }
      }
    });

    watch(settlement, current => {
      if (current !== activeSettlement.value.id.toString())
        saveActiveSettlement(current);
        refreshActiveSettlement();
    });

    return { settlement, settlements, openModal, refresh }

  }

}
</script>