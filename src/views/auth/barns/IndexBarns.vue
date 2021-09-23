<template>

  <div class="relative border-dashed border-gray-300 border-4 p-4 w-full m-6">
    <h1 class="absolute -top-5 bg-white px-2 text-3xl font-glory font-bold text-gray-500">{{ activeSettlement.name }}</h1>

    <div v-if="barns && barns.length" class="h-full">
      <barns-table :barns="barns" @updated="refresh"/>
    </div>

    <div class="w-full h-full m-2 md:m-6 flex flex-col md:flex-row justify-center items-center gap-6" v-else>
      <img class="object-contain max-h-96" src="/src/assets/illustrations/not_found.svg">
      <div class="flex flex-col">
        <h1 class="text-3xl">No se han encontrado galpones para esta finca.</h1>
        <div class="my-3">
          <h2>Puedes crear uno aquí...</h2>
          <button type="button" @click="openModal('createBarn')" class="btn btn-persimmon text-white font-glory my-3">
            Crear galpón
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from "vue";
import {useSettlements, useBarns, useModals} from "../../../use";
import Paginator from "../../../components/Paginator.vue";
import BarnsTable from "../../../components/tables/BarnsTable.vue";

export default {

  components: { BarnsTable, Paginator },

  setup() {

    const { openModal } = useModals();
    const openCreateBarnModal = ref(false);
    const { activeSettlement } = useSettlements();
    const { barns, refreshBarns } = useBarns();
    refreshBarns();

    const refresh = async () => refreshBarns(true);

    return { barns, activeSettlement, openCreateBarnModal, refresh, openModal }

  }

}
</script>