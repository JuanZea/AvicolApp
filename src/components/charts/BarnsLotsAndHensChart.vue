<template>
  <div class="w-full" :id="chartName">
    dcxafa
  </div>
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

    let items =  [{
      "name": "Critical",
      "count": 89,
      "color": am4core.color("#dc4534"),
      "breakdown": [{
        "name": "Sales inquiries",
        "count": 29
      }, {
        "name": "Support requests",
        "count": 40
      }, {
        "name": "Bug reports",
        "count": 11
      }, {
        "name": "Other",
        "count": 9
      }]
    }, {
      "name": "Acceptable",
      "count": 71,
      "color": am4core.color("#d7a700"),
      "breakdown": [{
        "name": "Sales inquiries",
        "count": 22
      }, {
        "name": "Support requests",
        "value": 30
      }, {
        "name": "Bug reports",
        "count": 11
      }, {
        "name": "Other",
        "count": 10
      }]
    }, {
      "name": "Good",
      "count": 120,
      "color": am4core.color("#68ad5c"),
      "breakdown": [{
        "name": "Sales inquiries",
        "count": 60
      }, {
        "name": "Support requests",
        "count": 35
      }, {
        "name": "Bug reports",
        "count": 15
      }, {
        "name": "Other",
        "count": 10
      }]
    }]

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