<template>
  <div class="w-full" :id="chartName"></div>
</template>
<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";

export default {
  props: {data: {type: Array, default: []}},
  setup() {
    let chartName = 'gauge';
    let chart = [];
    let labelX = 'Galpones';
    let labelY = 'Cantidad de lotes';
    let minColor = '#FFBA08';
    let maxColor = '#E85D04';

    return {chartName, chart, labelX, labelY, minColor, maxColor};
  },
  mounted() {

    am4core.ready(function() {

      am4core.useTheme(am4themes_dataviz);
      am4core.useTheme(am4themes_animated);

      let chartMin = 0;
      let chartMax = 60;

      let data = {
        score: 2,
        gradingData: [
          {
            title: "Se aproxima vacunación",
            color: "#ee1f25",
            lowScore: 0,
            highScore: 20
          },
          {
            title: "Tiempo intermedio",
            color: "#f3eb0c",
            lowScore: 21,
            highScore: 40
          },
          {
            title: "Vacunas al dia",
            color: "#0f9747",
            lowScore: 41,
            highScore: 60
          }
        ]
      };

      function lookUpGrade(lookupScore, grades) {
        for (let i = 0; i < grades.length; i++) {
          if (grades[i].lowScore < lookupScore && grades[i].highScore >= lookupScore) {
            return grades[i];
          }
        }
        return null;
      }

      let chart = am4core.create('gauge', am4charts.GaugeChart);
      chart.hiddenState.properties.opacity = 0;
      chart.fontSize = 11;
      chart.innerRadius = am4core.percent(80);
      chart.resizable = true;

      let axis = chart.xAxes.push(new am4charts.ValueAxis());
      axis.min = chartMin;
      axis.max = chartMax;
      axis.strictMinMax = true;
      axis.renderer.radius = am4core.percent(80);
      axis.renderer.inside = true;
      axis.renderer.line.strokeOpacity = 0.1;
      axis.renderer.ticks.template.disabled = false;
      axis.renderer.ticks.template.strokeOpacity = 1;
      axis.renderer.ticks.template.strokeWidth = 0.5;
      axis.renderer.ticks.template.length = 5;
      axis.renderer.grid.template.disabled = true;
      axis.renderer.labels.template.radius = am4core.percent(15);
      axis.renderer.labels.template.fontSize = "0.9em";

      let axis2 = chart.xAxes.push(new am4charts.ValueAxis());
      axis2.min = chartMin;
      axis2.max = chartMax;
      axis2.strictMinMax = true;
      axis2.renderer.labels.template.disabled = true;
      axis2.renderer.ticks.template.disabled = true;
      axis2.renderer.grid.template.disabled = false;
      axis2.renderer.grid.template.opacity = 0.5;
      axis2.renderer.labels.template.bent = true;
      axis2.renderer.labels.template.fill = am4core.color("#000");
      axis2.renderer.labels.template.fontWeight = "bold";
      axis2.renderer.labels.template.fillOpacity = 0.3;

      for (let grading of data.gradingData) {
        let range = axis2.axisRanges.create();
        range.axisFill.fill = am4core.color(grading.color);
        range.axisFill.fillOpacity = 0.8;
        range.axisFill.zIndex = -1;
        range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
        range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
        range.grid.strokeOpacity = 0;
        range.stroke = am4core.color(grading.color).lighten(-0.1);
        range.label.inside = true;
        range.label.text = grading.title.toUpperCase();
        range.label.inside = true;
        range.label.location = 0.5;
        range.label.inside = true;
        range.label.radius = am4core.percent(10);
        range.label.paddingBottom = -5; // ~half font size
        range.label.fontSize = "0.9em";
      }

      let matchingGrade = lookUpGrade(data.score, data.gradingData);

      let label = chart.radarContainer.createChild(am4core.Label);
      label.isMeasured = false;
      label.fontSize = "3em";
      label.x = am4core.percent(50);
      label.paddingBottom = 15;
      label.horizontalCenter = "middle";
      label.verticalCenter = "bottom";
      label.text = data.score.toFixed(1);
      label.fill = am4core.color(matchingGrade.color);

      let label2 = chart.radarContainer.createChild(am4core.Label);
      label2.isMeasured = false;
      label2.fontSize = "1em";
      label2.horizontalCenter = "middle";
      label2.verticalCenter = "bottom";
      label2.text = matchingGrade.title.toUpperCase();
      label2.fill = am4core.color(matchingGrade.color);

      let hand = chart.hands.push(new am4charts.ClockHand());
      hand.axis = axis2;
      hand.innerRadius = am4core.percent(55);
      hand.startWidth = 7;
      hand.pin.disabled = true;
      hand.value = data.score;
      hand.stroke = am4core.color("#000");

      hand.events.on("positionchanged", function(){
        label.text = axis2.positionToValue(hand.currentPosition).toFixed(1);
        let matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
        label2.text = matchingGrade.title.toUpperCase();
        label2.fill = am4core.color(matchingGrade.color);
        label2.stroke = am4core.color(matchingGrade.color);
        label.fill = am4core.color(matchingGrade.color);
      })

    });
  }
}
</script>
<style>
.amcharts-ampopup-curtain {
  z-index: 1 !important;
}
</style>