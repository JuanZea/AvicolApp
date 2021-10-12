<template>
  <div class="w-full" :id="chartName"></div>
</template>
<script>
import _ from "lodash";
import BarChart from "./types/BarChart.vue";
import hensImage from "../../assets/img/hens.jpg";

export default {
  props: {data: {type: Array, default: []}},
  mixins: [BarChart],
  setup() {
    let chartName = 'lots_number_by_barn';
    let chart = [];
    let labelX = 'Galpones';
    let labelY = 'Cantidad de lotes';
    let minColor = '#FFBA08';
    let maxColor = '#E85D04';

    return {chartName, chart, labelX, labelY, minColor, maxColor};
  },
  mounted() {
    this.refresh()
  },
  methods: {
    refresh() {
      let items = _.map(this.data, (barn) => {
        return {
          name: barn.name,
          count: barn.lots_number,
          image: hensImage
        };
      });

      this.buildChart(items)
    }
  },
  watch: {
    data() {
      let items = _.map(this.data, (barn) => {
        return {
          name: barn.name,
          count: barn.lots_number,
          image: hensImage
        };
      });

      this.buildChart(items)
    }
  },
}
</script>
<style>
.amcharts-ampopup-curtain {
  z-index: 1 !important;
}
</style>