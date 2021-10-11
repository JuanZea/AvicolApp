<template>
  <div class="flex flex-col justify-between h-full w-full">
    <av-table>
      <template #headers>
        <th class="py-3 px-6 text-center"
            v-for="header in ['Nombre', 'Primera Dosis', 'Segunda Dosis', 'Dias de aproximación', 'Estado']">{{
            header
          }}
        </th>
      </template>
      <template #default>
        <tr v-for="(vaccine, key) in vaccines" :key="key" class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-center whitespace-nowrap capitalize">
            <span class="font-bold">{{ vaccine.name }}</span>
          </td>
          <td class="py-3 px-6 text-center capitalize">
            {{ vaccine.first }}
          </td>
          <td class="py-3 px-6 text-center capitalize">
            {{ vaccine.last }}
          </td>
          <td class="py-3 px-6 text-center">
            <span v-if="vaccine.approxime > 6" class="rounded-lg text-gray-600 bg-gray-300 px-2 py-1 font-bold bg-opacity-50">
              {{ vaccine.approxime }}
            </span>
            <span v-else class="rounded-lg text-red-600 bg-red-300 px-2 py-1 font-bold bg-opacity-50">
              {{ vaccine.approxime }}
            </span>
          </td>
          <td class="py-3 px-6 text-center">
            <span v-if="vaccine.check" class="rounded-lg text-green-600 bg-green-300 px-2 py-1 font-bold bg-opacity-50">
                Habilitada
            </span>
          </td>
        </tr>
      </template>
    </av-table>
  </div>
</template>

<script>
import {useRouter} from "vue-router";
import "dayjs/locale/es"
import AvTable from "./AvTable.vue";
import Paginator from "../Paginator.vue";

export default {

  components: {Paginator, AvTable},

  props: {vaccines: {required: true, type: Array}},

  setup() {
    const router = useRouter();

    return {
      router,
    }

  }

}
</script>