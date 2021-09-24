<template>
  <div class="w-full">
    <div v-for="(element, key) in metrics" class="relative border-dashed border-gray-300 border-4 p-4 m-6">
      <h1 class="absolute -top-5 bg-white px-2 text-3xl font-glory font-bold text-gray-500">{{ element.name }}</h1>
      <component class="h-96 overflow-auto" :key="key"
                 :is="element.component"
                 v-if="element.attributes.items && element.attributes.items.length"
                 v-bind="element.attributes"></component>
      <div class="w-full h-full m-2 md:m-6 flex flex-col md:flex-row justify-center items-center gap-6" v-else>
        <img class="animate-spin" src="/src/assets/illustrations/loading.svg">
        <div class="flex flex-col">
          <h1 class="text-3xl">Cargando...</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarnChart from "../../components/charts/BarnChart.vue";
import {ref} from 'vue'
import {useBarns} from "../../use";

export default {
  components: {BarnChart},
  setup() {
    const {barns, refreshBarns} = useBarns();
    refreshBarns();

    let metrics = ref([{
      component: 'BarnChart',
      name: 'Lotes por galpones',
      attributes: {
        items: barns
      }
    }]);

    return {metrics};
  },
}
</script>