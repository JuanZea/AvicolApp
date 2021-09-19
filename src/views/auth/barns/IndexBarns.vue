<template>
  <div class="relative border-dashed border-gray-300 border-4 p-4 w-full m-6" >
    <h1 class="absolute -top-5 bg-white px-2 text-3xl font-glory font-bold text-gray-500">{{ activeSettlement.name }}</h1>
    <div v-if="barns && barns.length">
      <div class="overflow-auto bg-white shadow-md rounded m-6">
        <table class="min-w-max w-full table-auto">
          <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">Nombre</th>
            <th class="py-3 px-6 text-left">Tipo</th>
            <th class="py-3 px-6 text-left">Cantidad de lotes</th>
            <th class="py-3 px-6 text-left">Creado en</th>
            <th class="py-3 px-6 text-left"></th>
          </tr>
          </thead>
          <tbody class="text-gray-600 text-sm font-light">
          <tr v-for="(barn, key) in bansByPage" :key="key" class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-6 text-left whitespace-nowrap">
              <div class="flex items-center">
                <span class="font-medium">{{ barn.name }}</span>
              </div>
            </td>
            <td class="py-3 px-6 text-left">
              <div class="flex items-center">
                <span class="inline-block rounded-full text-gray-600 bg-av-100 px-2 py-1 text-xs font-bold mr-3" v-if="barn.type === '1'">Galpón</span>
                <span class="inline-block rounded-full text-gray-600 bg-av-50 px-2 py-1 text-xs font-bold mr-3" v-else>Cautividad</span>
              </div>
            </td>
            <td class="py-3 px-6 text-left">
              <span class="inline-block rounded-full text-gray-600 bg-gray-300 px-2 py-1 text-xs font-bold mr-3">
                {{ barn.lots_number }}
              </span>
            </td>
            <td class="py-3 px-6 text-left">
              {{ convertDate(barn.created_at) }}
            </td>
            <td class="py-3 px-6 text-right">
              <div class="flex item-center justify-center">
                <div class="w-4 mr-2 transform hover:scale-110">
                  <fai class="text-av-100 hover:text-av-300 " icon="eye"/>
                </div>
                <div class="w-4 mr-2 transform hover:scale-110">
                  <fai class="text-av-100 hover:text-av-300 " icon="pencil-alt"/>
                </div>
                <div class="w-4 mr-2 transform hover:scale-110">
                  <fai class="text-av-100 hover:text-av-300 " icon="trash-alt"/>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <paginator v-if="barns" :items="barns" :page-size="1" @changePage="onChangePage"></paginator>
    </div>
    <div class="w-full h-full m-2 md:m-6 flex flex-col md:flex-row justify-center items-center gap-6" v-else>
      <img class="object-contain max-h-96" src="/src/assets/illustrations/not_found.svg">
      <div class="flex flex-col">
        <h1 class="text-3xl">No se han encontrado galpones para esta finca.</h1>
        <div class="my-3">
          <h2>Puedes crear uno aquí...</h2>
          <button type="button" class="btn btn-persimmon text-white font-glory my-3">
            Crear galpón
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useSettlements from "../../../use/useSettlements";
import useBarns from "../../../use/useBarns";
import dayjs from "dayjs";
import Paginator from "../../../components/Paginator.vue";
import {ref} from "vue";

export default {
  name: "IndexBarns",
  components: {Paginator},
  setup() {
    let bansByPage = ref([]);
    const {activeSettlement} = useSettlements();
    const {barns, indexBarns} = useBarns();

    indexBarns();

    const convertDate = (date) => {
      return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
    }

    const onChangePage = (pageOfItems) => {
      bansByPage.value = pageOfItems;
    }


    return {
      activeSettlement,
      convertDate,
      onChangePage,
      bansByPage,
      barns
    }
  }
}
</script>