<template>
  <div class="w-full" :id="chartName"></div>
</template>
<script>
import _ from "lodash";
import PieChart from "./types/PieChart.vue";

export default {
  props: {data: {type: Array, default: []}},
  mixins: [PieChart],
  setup() {
    let chartName = 'hens_by_barn';
    let chart = [];

    return {chartName, chart};
  },
  watch: {
    data() {
      let items = _.map(this.data, (barn) => {
        if(barn.hens_number) {
          return {
            label: barn.name,
            value: barn.hens_number
          };
        }
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