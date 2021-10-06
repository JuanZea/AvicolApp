<template>
  <div class="w-full" :id="chartName"></div>
</template>
<script>
import BarAndDounthMultipleChart from "./types/BarAndDounthMultipleChart.vue";
import * as am4core from "@amcharts/amcharts4/core";

export default {
  props: {items: {type: Array, default: []}},
  mixins: [BarAndDounthMultipleChart],
  setup(props) {
    let chartName = 'barns_lots_hens_chart';
    let chart = [];
    let labelX = 'Galpones';
    let labelY = 'Cantidad de lotes';
    let minColor = '#FFBA08';
    let maxColor = '#E85D04';

    return {chartName, chart, labelX, labelY, minColor, maxColor};
  },
  mounted() {
    if (this.items.length) this.buildChart(this.items)
  },
}
</script>
<style>
.amcharts-ampopup-curtain {
  z-index: 1 !important;
}
</style>