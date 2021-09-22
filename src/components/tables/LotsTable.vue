<template>
  <div class="flex flex-col justify-between h-full">
    <delete-lot-modal v-if="lotActive" :open="openDeleteLotModal" :lot="lotActive" @close="openDeleteLotModal = false" @deleted="refresh"/>
    <av-table>
      <template #headers>
        <th class="py-3 px-6 text-center" v-for="header in ['Numero de lote', 'Edad (Semanas)', 'Numero de Gallinas', 'Fecha de creación']">{{ header }}</th>
        <th class="py-2 px-6">
        <button @click="openCreateBarnModal = true" class="btn h-8 btn-persimmon text-white">
          <fai class="mr-2" size="sm" icon="plus"/>
            Crear lote
          </button>
        </th>
      </template>
      <template #default>
        <tr v-for="(lot, key) in lotsByPage" :key="key" class="border-b border-gray-200 hover:bg-gray-100">
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
            {{ convertDate(lot.created_at) }}
          </td>
          <td class="py-3 px-6 text-center">
            <div class="flex item-center justify-center gap-2">
              <button @click="router.push({name: 'showLots', params: {id: lot.id}})"
                      class="w-4 mr-2 transform hover:scale-125 cursor-pointer">
                <fai class="text-av-100 hover:text-av-300" size="lg" icon="eye"/>
              </button>
              <button type="button" @click="openDeleteModal(lot)"
                      class="w-4 mr-2 transform hover:scale-110 cursor-pointer">
                <fai class="text-av-100 hover:text-av-300" size="lg" icon="trash-alt"/>
              </button>
            </div>
          </td>
        </tr>
      </template>
    </av-table>
    <paginator v-if="lots" :items="lots" :page-size="10" @changePage="onChangePage"></paginator>
  </div>
</template>

<script>
import {ref} from "vue";
import {useSettlements} from "../../use";
import dayjs from "dayjs";
import {useRouter} from "vue-router";
import lowerCase from "lodash/lowerCase";
import capitalize from "lodash/capitalize";
import "dayjs/locale/es"
import AvTable from "./AvTable.vue";
import Paginator from "../Paginator.vue";
import DeleteLotModal from "../modals/DeleteLotModal.vue";

export default {

  components: {DeleteLotModal, Paginator, AvTable},

  props: {lots: {required: true, type: Array}},

  setup(props, computed) {

    let openDeleteLotModal = ref(false);
    let lotActive = ref();
    const router = useRouter();
    let lotsByPage = ref([]);
    const {activeSettlement} = useSettlements();

    const convertDate = (date) => dayjs(date).locale('es').format('MMMM D, h:mm a');

    const onChangePage = (pageOfItems) => {
      lotsByPage.value = pageOfItems;
    }

    const openDeleteModal = (lot) => {
      lotActive.value = lot;
      openDeleteLotModal.value = true;
    }

    const refresh = async () => {
      computed.emit('deleteAny')
    }

    return {
      router,
      capitalize,
      lowerCase,
      lotsByPage: lotsByPage,
      convertDate,
      onChangePage,
      activeSettlement,
      openDeleteModal,
      lotActive,
      openDeleteLotModal,
      refresh
    }

  }

}
</script>