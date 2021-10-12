<template>
  <div v-if="!barn">CARGANDO</div>
  <div v-else class="relative border-dashed border-gray-300 border-4 p-4 w-full m-6">
    <button @click="router.push({name: 'indexBarns'})" class="absolute -top-5 right-0 bg-white px-2 text-3xl text-av-100">
      <fai icon="hand-point-left"/>
    </button>
    <div class="w-full border-b-2 pb-4">
      <div class="flex justify-between">
        <div v-if="!editMode">
          <h1 class="font-glory font-bold text-3xl">{{ barn.name }}</h1>
          <div><span class="font-glory text-2xl text-gray-500">{{ capitalize(lowerCase(barn.type)) }}</span></div>
        </div>

        <div v-else class="flex flex-col lg:flex-row gap-3 w-96 lg:w-full px-4">
          <av-input v-model="newName" id="name" type="text" label="Nuevo nombre:"/>
          <av-select v-model="newType" id="type" class="w-full" label="Tipo:">
            <option class="bg-av-50 bg-opacity-10" value="cautividad">Cautividad</option>
            <option class="bg-av-50 bg-opacity-10" value="gallinasFelices">Gallinas Felices</option>
          </av-select>
        </div>

        <div v-if="!editMode" class="flex self-center gap-2 lg:ml-0">
          <button @click="editMode = true"
                  class="group items-center flex bg-black p-2 bg-opacity-5 rounded-full bg-opacity-5 hover:bg-opacity-10 lg:rounded lg:py-1">
            <span class="hidden lg:block text-av-100 group-hover:text-av-600 mr-2">Editar</span>
            <fai class="text-av-100 group-hover:text-av-600 animate-wiggle" icon="pencil-alt"/>
          </button>
        </div>
        <div class="flex flex-col self-start gap-2 ml-4 lg:ml-0 lg:flex-row" v-else>
          <button @click="updateBarn"
                  class="bg-opacity-10 self-start flex bg-black p-1 bg-opacity-5 rounded-full">
            <fai class="text-av-100" :icon="['far', 'check-circle']" size="lg"/>
          </button>
          <button @click="editMode = false; newName = barn.name"
                  class="bg-opacity-10 self-start flex bg-black p-1 bg-opacity-5 rounded-full">
            <fai class="text-av-100" :icon="['far', 'times-circle']" size="lg"/>
          </button>
        </div>
      </div>
    </div>
    <lots-table v-if="lots && lots.length" :lots="lots"/>
    <div class="w-full m-2 md:m-6 flex flex-grow flex-col md:flex-row justify-center items-center gap-6" v-else>
      <img class="object-contain max-h-96" src="/src/assets/illustrations/not_found.svg">
      <div class="flex flex-col">
        <h1 class="text-3xl">No se han encontrado lotes para este galpón.</h1>
        <div class="my-3">
          <h2>Puedes crear uno aquí...</h2>
          <button @click="openModal('createLot')" class="btn btn-persimmon text-white font-glory my-3">
            Crear lote
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, computed} from "vue";
import capitalize from "lodash/capitalize";
import lowerCase from "lodash/lowerCase";
import {useRouter} from "vue-router";
import {barnsService} from "../../../services";
import LotsTable from "../../../components/tables/LotsTable.vue";
import {_updateBarn} from "../../../services/avicolappAssembler";
import AvInput from "../../../components/forms/AvInput.vue";
import AvSelect from "../../../components/forms/AvSelect.vue";
import {useLots, useModals} from "../../../use";
import {useToast} from "vue-toastification";

export default {

  components: { AvInput, AvSelect, LotsTable },
  setup() {

    const { openModal } = useModals();
    const { refreshLots, lots } = useLots();
    const editMode = ref(false);
    const router = useRouter();
    const barn = ref();
    const id = computed(() => router.currentRoute.value.params.id);
    const newName = ref();
    const newType = ref();
    const toast = useToast()
    _updateBarn(id.value);
    refreshLots(true);

    barnsService.one(id.value).then(response => {
        barn.value = response;
        newName.value = barn.value.name;
        newType.value = barn.value.type;
    })

    const updateBarn = () => {
      barnsService.update(id.value, {
        'name': newName.value,
        'type': newType.value,
      }).then(response => {
        editMode.value = false;
        barn.value = response;
        toast.success('Galpón actualizado con éxito')
      }).catch(() => {
        toast.error('El Galpón no pudo ser actualizado')
      })
    }

    return { barn, router, capitalize, lowerCase, editMode, newName, newType, updateBarn, lots, openModal }

  }

}
</script>