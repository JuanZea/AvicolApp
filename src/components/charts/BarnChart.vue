<template>
  <div class="w-full" style="z-index: 1" :id="chartName"></div>
</template>
<script>
import _ from "lodash";
import {ref} from "vue";
import BarChart from "./types/BarChart.vue";
import hensImage from "../../assets/img/hens.jpg";

export default {
  props: { items: { type: Array, default: [] } },
  mixins: [BarChart],
  setup(props) {
    let chartName = ref('lots_number_by_barn');
    let chart = ref([]);
    let labelX = ref('Galpones');
    let labelY = ref('Cantidad de lotes');

    let items = _.map(props.items, (barn) => {
      return {
        name: barn.name,
        count: barn.lots_number,
        image: hensImage
      };
    });

    return {chartName, items, chart, labelX, labelY};
  },
  mounted() {
    this.buildChart()
  },
}
</script>
<style>
.amcharts-ampopup-curtain {
  z-index: 1 !important;
}
</style>