<template>
  <create-settlement-modal :open="openCreateSettlementModal" @close="openCreateSettlementModal = false"/>
  <delete-settlement-modal :open="openDeleteSettlementModal" :settlements="settlements || []" @close="openDeleteSettlementModal = false" @deleted="refresh"/>

  <div class="p-4">
    <div class="relative border-dashed border-gray-300 border-4 p-4">
      <h1 class="absolute -top-5 bg-white px-2 text-3xl font-glory font-bold text-gray-500">Gestión de fincas</h1>
      <span class="font-glory font-bold text-gray-500">Finca</span>
      <div class="relative flex justify-between items-center gap-4">
        <div>
          <av-select v-if="settlement" v-model="settlement">
            <option class="bg-av-50 bg-opacity-10" v-for="settlement in settlements" :value="settlement.id.toString()" selected>{{ settlement.name }}</option>
          </av-select>
          <span v-else class="font-glory bg-av-50 px-2 py-1 rounded">Cargando fincas...</span>
        </div>
        <div class="flex gap-4 whitespace-nowrap">
          <button type="button" @click="openCreateSettlementModal = true" class="btn btn-persimmon text-white font-glory">
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
import {ref, watch} from "vue";
import AvSelect from "./forms/AvSelect.vue";
import useSettlements from "../use/useSettlements";
import CreateSettlementModal from "./modals/SettlementModal.vue";
import DeleteSettlementModal from "./modals/DeleteSettlementModal.vue";
import {useStore} from "../use";

export default {

  components: { AvSelect, CreateSettlementModal, DeleteSettlementModal },

  setup() {

    const openDeleteSettlementModal = ref(false);
    const openCreateSettlementModal = ref(false);

    const store = useStore();
    const { activeSettlement, settlements, refreshSettlements, refreshActiveSettlement, saveActiveSettlement } = useSettlements();
    refreshSettlements();
    const settlement = ref();

    const refresh = (deleted) => {
      if (deleted.includes(settlement.value)) {
        const diff = settlements.value.filter(item => !deleted.includes(item.id.toString()));
        if (!diff[0]) refreshActiveSettlement();
        else {
          settlement.value = diff[0].id.toString();
          refreshSettlements();
        }
      }
    }

    settlement.value = activeSettlement.value.id.toString();
    store.settlemet = activeSettlement.value;

    watch(settlement, current => {
      if (current !== activeSettlement.value.id.toString())
        saveActiveSettlement(current);
        refreshActiveSettlement();
    });

    return { settlement, settlements, refresh, openDeleteSettlementModal, openCreateSettlementModal }

  }
}
</script>