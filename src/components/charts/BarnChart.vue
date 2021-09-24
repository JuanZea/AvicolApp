<template>
  <div class="w-full" :id="chartName"></div>
</template>
<script>
import _ from "lodash";
import BarChart from "./types/BarChart.vue";
import hensImage from "../../assets/img/hens.jpg";

export default {
  props: {items: {type: Array, default: []}},
  mixins: [BarChart],
  setup(props) {
    let chartName = 'lots_number_by_barn';
    let chart = [];
    let labelX = 'Galpones';
    let labelY = 'Cantidad de lotes';
    let minColor = '#FFBA08';
    let maxColor = '#E85D04';

    let items = _.map(props.items, (barn) => {
      return {
        name: barn.name,
        count: barn.lots_number,
        image: hensImage
      };
    });

    return {chartName, items, chart, labelX, labelY, minColor, maxColor};
  },
  mounted() {
    if (this.items.length) this.buildChart()
  },
}
</script>
<style>
.amcharts-ampopup-curtain {
  z-index: 1 !important;
}
</style>