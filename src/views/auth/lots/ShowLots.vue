<template>
  <div v-if="!lot">CARGANDO</div>
  <div v-else class="relative p-4 m-6 container gap-5">

    <button @click="router.push({name: 'showBarns', params: {id: lot.barn_id}})"
            class="absolute -top-5 right-0 bg-white px-2 text-3xl text-av-100">
      <fai icon="hand-point-left"/>
    </button>
    <div class="flex flex-col justify-between lg:flex-row gap-5 my-2">
      <div class="relative pb-4 flex-grow flex border-dashed border-gray-300 border-4 p-4">
        <h1 class="absolute -top-5 bg-white px-2 text-3xl font-glory font-bold text-gray-500">Lote #{{ lot.id }}</h1>
        <div class="flex justify-between gap-6">
          <div>
            <div class="flex gap-5 my-2">
              <div v-if="!editMode">
                <h2 class="font-glory text-gray-600 font-bold text-xl">Número de gallinas</h2>
                <h3 class="font-glory text-gray-500 text-md mb-2">{{ lot.hens_number }}</h3>
              </div>
              <div v-else class="flex flex-col lg:flex-row gap-3 lg:w-full">
                <av-input v-model="newHens" id="name" type="text" label="Número de gallinas:"/>
              </div>

              <div v-if="!editMode" class="flex self-center gap-2">
                <button @click="editMode = true"
                        class="group items-center flex bg-black p-2 bg-opacity-5 rounded-full bg-opacity-5 hover:bg-opacity-10">
                  <fai class="text-av-100 group-hover:text-av-600 animate-wiggle" icon="pencil-alt"/>
                </button>
              </div>
              <div class="flex flex-col self-start gap-2 ml-4" v-else>
                <button
                    @click="updateLot"
                    class="bg-opacity-10 self-start flex bg-black p-1 bg-opacity-5 rounded-full">
                  <fai class="text-av-100" :icon="['far', 'check-circle']" size="lg"/>
                </button>
                <button @click="editMode = false; newHens = lot.hens_number"
                        class="bg-opacity-10 self-start flex bg-black p-1 bg-opacity-5 rounded-full">
                  <fai class="text-av-100" :icon="['far', 'times-circle']" size="lg"/>
                </button>
              </div>
            </div>
            <h2 class="font-glory text-gray-600 font-bold text-xl">Edad</h2>
            <h3 class="font-glory text-gray-500 text-md mb-2">{{ lot.age }} semanas</h3>
          </div>
        </div>
      </div>
      <gauge-chart v-if="vaccines && vaccines.length" :score="proxime" class="max-w-2xl"/>
    </div>
    <div class="relative mt-6 flex-grow flex border-dashed border-gray-300 border-4 p-4">
      <h1 class="absolute -top-5 bg-white px-2 text-3xl font-glory font-bold text-gray-500">Vacunas</h1>
      <vaccines-table v-if="vaccines && vaccines.length" :vaccines="vaccines"/>
      <div class="w-full m-2 md:m-6 flex flex-grow flex-col md:flex-row justify-center items-center gap-6" v-else>
        <img class="object-contain max-h-96" src="/src/assets/illustrations/not_found.svg">
        <div class="flex flex-col">
          <h1 class="text-3xl">No se han encontrado vacunas para este lote.</h1>
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
import {lotsService} from "../../../services";
import LotsTable from "../../../components/tables/LotsTable.vue";
import {_updateBarn} from "../../../services/avicolappAssembler";
import AvInput from "../../../components/forms/AvInput.vue";
import AvSelect from "../../../components/forms/AvSelect.vue";
import {useModals} from "../../../use";
import GaugeChart from "../../../components/charts/GaugeChart.vue";
import VaccinesTable from "../../../components/tables/VaccinesTable.vue";
import {compareDate, convertDate} from "../../../helpers";
import {useToast} from "vue-toastification";

export default {

  components: {VaccinesTable, GaugeChart, AvInput, AvSelect, LotsTable},
  setup() {
    const editMode = ref(false);
    const router = useRouter();
    const lot = ref();
    const id = computed(() => router.currentRoute.value.params.id);
    const barn = computed(() => router.currentRoute.value.params.barn);
    const newHens = ref();
    const vaccines = ref();
    const proxime = ref(100);
    _updateBarn(barn.value);
    const toast = useToast()

    function updateLot() {
      lotsService.update(id.value, {
        'hens_number': newHens.value,
      }).then(response => {
        editMode.value = false;
        lot.value = response;
        toast.success('Lote actualizado con éxito')
      }).catch(() => {
        toast.error('El Lote no pudo ser actualizado')
      })
    }

    lotsService.one(id.value).then(response => {
      lot.value = response;
      newHens.value = lot.value.hens_number;
      vaccines.value =  lot.value.vaccines && lot.value.vaccines.length ? lot.value.vaccines.map((vaccine) => {
        if (vaccine.check) {
          vaccine.first = convertDate(vaccine.date, 'first');
          vaccine.last = convertDate(vaccine.date, 'last');
          vaccine.approxime = compareDate(vaccine.date);
          proxime.value = vaccine.approxime < proxime.value ? vaccine.approxime : proxime.value;

          return vaccine;
        }

        return null;
      }).filter(x => x !== null) : [];
    })

    return {lot, router, capitalize, lowerCase, editMode, newHens, updateLot, proxime, vaccines}

  }

}
</script>