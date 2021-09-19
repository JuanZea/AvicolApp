<template>
  <div class="flex flex-col justify-between h-full">
    <div>
      <av-table :headers="['Nombre', 'Tipo', 'Lotes', 'Fecha de creación', '']">
        <tr v-for="(barn, key) in bansByPage" :key="key" class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-center whitespace-nowrap">
            <div class="flex items-center">
              <span class="font-medium text-2xl">{{ barn.name }}</span>
            </div>
          </td>
          <td class="py-3 px-6 text-center">
            <div class="flex items-center justify-center">
              <span class="rounded-lg text-md text-gray-300 bg-av-900 px-2 py-1 font-bold w-20 text-center" v-if="barn.type === '1'">Galpón</span>
              <span class="rounded-lg text-md text-av-900 bg-av-50 px-2 py-1 font-bold w-20 text-center" v-else>Cautividad</span>
            </div>
          </td>
          <td class="py-3 px-6 text-center">
              <span class="rounded-lg text-gray-600 bg-gray-300 px-2 py-1 font-bold bg-opacity-50">
                {{ barn.lots_number }}
              </span>
          </td>
          <td class="py-3 px-6 text-lg text-center">
            {{ capitalize(convertDate(barn.created_at)) }}
          </td>
          <td class="py-3 px-6 text-center">
            <div class="flex item-center justify-center gap-2">
              <button class="w-4 mr-2 transform hover:scale-125 cursor-pointer">
                <fai class="text-av-100 hover:text-av-300" size="lg" icon="eye"/>
              </button>
              <button class="w-4 mr-2 transform hover:scale-110 cursor-pointer">
                <fai class="text-av-100 hover:text-av-300" size="lg" icon="pencil-alt"/>
              </button>
              <button class="w-4 mr-2 transform hover:scale-110 cursor-pointer">
                <fai class="text-av-100 hover:text-av-300" size="lg" icon="trash-alt"/>
              </button>
            </div>
          </td>
        </tr>
      </av-table>
    </div>
    <paginator v-if="barns" :items="barns" :page-size="10" @changePage="onChangePage"></paginator>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSettlements } from "../../use";
import dayjs from "dayjs";
import capitalize from "lodash/capitalize";
import "dayjs/locale/es"
import AvTable from "./AvTable.vue";
import Paginator from "../Paginator.vue";

export default {

  components: { Paginator, AvTable },

  props: { barns: {required: true, type: Array} },

  setup() {

    let bansByPage = ref([]);
    const { activeSettlement } = useSettlements();

    const convertDate = (date) => dayjs(date).locale('es').format('MMMM D, h:mm a');

    const onChangePage = (pageOfItems) => {
      bansByPage.value = pageOfItems;
    }

    return {
      capitalize,
      bansByPage,
      convertDate,
      onChangePage,
      activeSettlement
    }

  }

}
</script>