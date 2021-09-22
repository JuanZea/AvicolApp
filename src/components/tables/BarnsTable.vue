<template>
  <div class="flex flex-col justify-between h-full">
    <div>
      <delete-barn-modal v-if="barnActive" :open="openDeleteBarnModal" :barn="barnActive" @close="openDeleteBarnModal = false" @deleted="refresh" />
      <av-table :headers="['Nombre', 'Tipo', 'Lotes', 'Fecha de creación', '']">
        <tr v-for="(barn, key) in barnsByPage" :key="key" class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6 text-center whitespace-nowrap">
            <div class="flex items-center">
              <span class="font-medium text-2xl">{{ barn.name }}</span>
            </div>
          </td>
          <td class="py-3 px-6 text-center">
            <div class="flex items-center justify-center">
              <span class="rounded-lg text-md px-2 py-1 font-bold w-28 text-center whitespace-nowrap" :class="{'bg-av-900 text-gray-300': barn.type === 'gallinasFelices', 'bg-av-100 text-av-900': barn.type === 'cautividad'}">{{ capitalize(lowerCase(barn.type)) }}</span>
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
              <button @click="router.push({name: 'showBarns', params: {id: barn.id}})" class="w-4 mr-2 transform hover:scale-125 cursor-pointer">
                <fai class="text-av-100 hover:text-av-300" size="lg" icon="eye"/>
              </button>
              <button type="button" @click="openDeleteModal(barn)"  class="w-4 mr-2 transform hover:scale-110 cursor-pointer">
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
import { useRouter } from "vue-router";
import lowerCase from "lodash/lowerCase";
import capitalize from "lodash/capitalize";
import "dayjs/locale/es"
import AvTable from "./AvTable.vue";
import Paginator from "../Paginator.vue";
import DeleteBarnModal from "../modals/DeleteBarnModal.vue";

export default {

  components: { DeleteBarnModal, Paginator, AvTable },

  props: { barns: {required: true, type: Array} },

  setup(props, computed) {

    let openDeleteBarnModal = ref(false);
    let barnActive = ref();
    const router = useRouter();
    let barnsByPage = ref([]);
    const { activeSettlement } = useSettlements();

    const convertDate = (date) => dayjs(date).locale('es').format('MMMM D, h:mm a');

    const onChangePage = (pageOfItems) => {
      barnsByPage.value = pageOfItems;
    }

    const openDeleteModal = (barn) => {
      barnActive.value = barn;
      openDeleteBarnModal.value = true;
    }

    const refresh = async () => {
      computed.emit('deleteAny')
    }

    return {
      router,
      capitalize,
      lowerCase,
      barnsByPage: barnsByPage,
      convertDate,
      onChangePage,
      activeSettlement,
      openDeleteModal,
      barnActive,
      openDeleteBarnModal,
      refresh
    }

  }

}
</script>