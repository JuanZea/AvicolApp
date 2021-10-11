<template>
  <div class="w-full bg-av-10 h-full">
    <div class=" relative bg-av-50 pb-48 pt-24">
      <div class="px-4 md:px-10 mx-auto w-full">
        <div class="flex flex-wrap">
          <mini-card>
            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 class="text-gray-400 uppercase font-bold text-xs">Galpones</h5>
              <span class="font-semibold text-xl text-gray-600">{{ barns ? barns.length : 0 }}</span>
            </div>
            <div class="relative w-auto pl-4 flex-initial">
              <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-av-400">
                <fai icon="home"/>
              </div>
            </div>
          </mini-card>
          <mini-card>
            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 class="text-gray-400 uppercase font-bold text-xs">Lotes</h5>
              <span class="font-semibold text-xl text-gray-600">{{ lots ? lots.length : 0 }}</span>
            </div>
            <div class="relative w-auto pl-4 flex-initial">
              <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-av-300">
                <fai icon="tractor"/>
              </div>
            </div>
          </mini-card>
          <mini-card>
            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 class="text-gray-400 uppercase font-bold text-xs">Gallínas</h5>
              <span class="font-semibold text-xl text-gray-600">{{ hens }}</span>
            </div>
            <div class="relative w-auto pl-4 flex-initial">
              <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-av-100">
                <fai icon="kiwi-bird"/>
              </div>
            </div>
          </mini-card>
          <mini-card>
            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 class="text-gray-400 uppercase font-bold text-xs">Proxímas vacunas</h5>
              <span class="font-semibold text-xl text-gray-600">{{ vaccinesProximate.length ?? 0 }}</span>
            </div>
            <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-av-50">
              <fai icon="exclamation-triangle"/>
            </div>
          </mini-card>
        </div>
      </div>
    </div>
    <div class="px-4 md:px-10 mx-auto w-full -mt-32 mb-32">
      <div>
        <div class="flex flex-wrap">
          <div class="w-full xl:w-8/12 mb-12 px-4 flex-grow mb-6">
            <div
                class="relative bg-white flex flex-col h-full min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
              <div class="rounded-t mb-0 px-4 py-3">
                <div class="flex flex-col items-center">
                  <h2 class="text-gray-600 text-xl font-semibold"> Lotes por galpones </h2>
                  <h6 class="text-gray-400 uppercase text mb-1 text-xs font-semibold"> Cantidades </h6>
                </div>
              </div>
              <div class="p-4 flex-auto h-full">
                <barn-chart class="h-full" :data="barns"></barn-chart>
              </div>
            </div>
          </div>
          <div class="w-full flex-grow xl:w-4/12 px-4 mb-6">
            <div class="relative p-2 bg-white w-full mb-6 shadow-lg rounded">
              <div>
                <a href="https://lohmann-breeders.com/media/2021/06/LB_MG_LB-Classic_ESP.pdf" target="_blank">
                  <button class="flex items-center ml-auto" title="Más información">
                    <span>Más información</span>
                    <fai class="text-av-100 mx-2" icon="question-circle" size="lg"/>
                  </button>
                </a>
              </div>
              <img class="object-fill h-full w-full h-96"
                   src="/src/assets/img/InfoTable.jpeg"/>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap mt-4">
          <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div class="rounded-t mb-0 px-4 border-0 pt-3">
                <h3 class="text-gray-600 text-xl font-semibold"> Top 10 de lotes </h3>
              </div>
              <div class="block w-full overflow-x-auto">
                <top-lots-table :lots="lotsTop10"></top-lots-table>
              </div>
            </div>
          </div>
          <div class="w-full xl:w-4/12 px-4  mb-6">
            <div class="relative h-full flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div class="rounded-t mb-0 px-4 py-3">
                <div class="flex flex-col items-center">
                  <h2 class="text-gray-600 text-xl font-semibold"> Gallinas por galpón </h2>
                  <h6 class="text-gray-400 uppercase text mb-1 text-xs font-semibold"> Porcentaje </h6>
                </div>
              </div>
              <hens-by-barn class="h-full w-full" :data="barns"></hens-by-barn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarnChart from "../../components/charts/BarnChart.vue";
import HensByBarn from "../../components/charts/HensByBarn.vue";
import BarnsLotsAndHensChart from "../../components/charts/BarnsLotsAndHensChart.vue";
import {useMetrics, useModals, useSettlements} from "../../use";
import MiniCard from "../../components/MiniCard.vue";
import TopLotsTable from "../../components/tables/TopLotsTable.vue";
import _ from "lodash";
import {computed, ref, watch} from "vue";
import {compareDate, compareDateGetDate, convertDate} from "../../helpers";
import dayjs from "dayjs";
import {useRouter} from "vue-router";

export default {
  components: {TopLotsTable, MiniCard, BarnChart, BarnsLotsAndHensChart, HensByBarn},
  setup() {
    const {metrics, refreshMetrics} = useMetrics();
    let barns = ref([]);
    let lots = ref([]);
    let settlements = ref([]);
    let lotsTop10 = ref([]);
    let hens = ref(0);
    let vaccinesProximate = ref([]);
    refreshMetrics()

    const { openModal } = useModals();
    const openAlertInfoModal = ref(false);

    watch(computed(() => metrics.value), () => {
      if (metrics.value) {
        settlements.value = metrics.value.settlements
        barns.value = metrics.value.barns
        lots.value = metrics.value.lots


        _.forEach(lots.value, (lot) => {
          hens.value += lot.hens_number
          lot.vaccinesPorcentage = 0;
          if (lot.vaccines && lot.vaccines.length) {
            let proxime = ref(100);
            _.forEach(lot.vaccines, (vaccine) => {
              if(vaccine.check) {
                let diffFirst = dayjs(vaccine.date.first).diff(dayjs(), 'day')
                let diffLast = dayjs(vaccine.date.last).diff(dayjs(), 'day')
                vaccine.approxime = compareDate(vaccine.date);
                vaccine.approximeDate = convertDate(compareDateGetDate(vaccine.date));
                lot.vaccinesPorcentage += (diffFirst + diffLast) === 0 ? 100 : diffFirst === 0 ? 50 : 0;
                proxime.value = vaccine.approxime < proxime.value ? vaccine.approxime : proxime.value;
                if (proxime.value > 0 && proxime.value <= 6) {
                  vaccinesProximate.value.push(vaccine);
                }
              }
            });
            lot.vaccinesPorcentage = (lot.vaccinesPorcentage/lot.vaccines.length) ?? 0;
          }
        });

        lotsTop10.value = _.take(_.sortBy(lots.value, (lot) => lot.vaccinesPorcentage), 10)
      }
    });


    return { barns, lots, hens, lotsTop10, vaccinesProximate, openModal, openAlertInfoModal };
  },
}
</script>