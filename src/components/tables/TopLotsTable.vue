<template>
  <div class="flex flex-col justify-between h-full">
    <av-table>
      <template #headers>
        <th class="py-3 px-6 text-center"
            v-for="header in ['Numero de lote', 'Edad (Semanas)', 'Numero de Gallinas', 'porcentaje de vacunación']">
          {{ header }}
        </th>
      </template>
      <template #default>
        <tr v-for="(lot, key) in lots" :key="key" class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-center whitespace-nowrap">
            <span class="font-bold">{{ lot.id }}</span>
          </td>
          <td class="py-3 px-6 text-center">
            {{ lot.age }}
          </td>
          <td class="py-3 px-6 text-center">
            <span class="rounded-lg text-gray-600 bg-gray-300 px-2 py-1 font-bold bg-opacity-50">
              {{ lot.hens_number }}
            </span>
          </td>
          <td class="py-3 px-6 text-center">
            <div class="flex items-center">
              <span class="mr-2">60%</span>
              <div class="relative w-full">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                  <div style="width:60%;"
                       class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-av-300"></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </template>
    </av-table>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
import lowerCase from "lodash/lowerCase";
import capitalize from "lodash/capitalize";
import "dayjs/locale/es"
import AvTable from "./AvTable.vue";
import Paginator from "../Paginator.vue";

export default {

  components: {Paginator, AvTable},

  props: {lots: {required: true, type: Array}},

  setup() {
    const router = useRouter();

    return {
      router,
      capitalize,
      lowerCase
    }
  }

}
</script>