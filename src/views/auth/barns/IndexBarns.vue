<template>
  <create-barns-modal :open="openCreateBarnModal" @close="openCreateBarnModal = false" @created="refresh"/>

  <div class="relative border-dashed border-gray-300 border-4 p-4 w-full m-6">
    <h1 class="absolute -top-5 bg-white px-2 text-3xl font-glory font-bold text-gray-500">{{ activeSettlement.name }}</h1>
    <button v-if="barns && barns.length" @click="openCreateBarnModal = true" class="mr-2 transform hover:scale-105 cursor-pointer absolute -top-5 right-5 bg-av-10 px-2 rounded-2xl text-3xl text-end font-glory font-bold text-av-50">
      <fai class="mr-2" size="sm" icon="plus" />
      Crear
    </button>

    <div v-if="barns && barns.length" class="h-full">
      <barns-table :barns="barns" @deleteAny="refresh"/>
    </div>

    <div class="w-full h-full m-2 md:m-6 flex flex-col md:flex-row justify-center items-center gap-6" v-else>
      <img class="object-contain max-h-96" src="/src/assets/illustrations/not_found.svg">
      <div class="flex flex-col">
        <h1 class="text-3xl">No se han encontrado galpones para esta finca.</h1>
        <div class="my-3">
          <h2>Puedes crear uno aquí...</h2>
          <button type="button" @click="openCreateBarnModal = true" class="btn btn-persimmon text-white font-glory my-3">
            Crear galpón
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from "vue";
import { useSettlements, useBarns } from "../../../use";
import Paginator from "../../../components/Paginator.vue";
import BarnsTable from "../../../components/tables/BarnsTable.vue";
import CreateBarnsModal from "../../../components/modals/CreateBarnsModal.vue";

export default {

  components: {CreateBarnsModal, BarnsTable, Paginator },

  setup() {

    const openCreateBarnModal = ref(false);
    const { activeSettlement } = useSettlements();
    const { barns, refreshBarns } = useBarns();
    refreshBarns();

    const refresh = async () => refreshBarns(true);

    return { barns, activeSettlement, openCreateBarnModal, refresh }

  }

}
</script>