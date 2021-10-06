<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import Chart from "./Chart.vue";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_moonrisekingdom from "@amcharts/amcharts4/themes/moonrisekingdom";

export default {
  extends: Chart,
  methods: {
    buildChart(items) {
      am4core.ready(() => {
        am4core.useTheme(am4themes_moonrisekingdom);
        am4core.useTheme(am4themes_animated);
        this.getChart(items);
        this.chart.innerRadius = am4core.percent(30);

        let series = this.chart.series.push(new am4charts.PieSeries());
        series.slices.template.stroke = am4core.color("#fff");
        series.slices.template.strokeWidth = 2;
        series.slices.template.strokeOpacity = 1;
        series.slices.template.cursorOverStyle = [
          {
            "property": "cursor",
            "value": "pointer"
          }
        ];

        series.dataFields.value = "value";
        series.dataFields.depthValue = "value";
        series.dataFields.category = "label";
        series.slices.template.cornerRadius = 5;
        series.colors.step = 3;

        series.alignLabels = false;
        series.labels.template.bent = true;
        series.labels.template.radius = 3;
        series.labels.template.padding(0,0,0,0);

        series.ticks.template.disabled = true;

        let shadow = series.slices.template.filters.push(new am4core.DropShadowFilter);
        shadow.opacity = 0;

        let hoverState = series.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

        let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
        hoverShadow.opacity = 0.7;
        hoverShadow.blur = 5;
      });
    },
    getChart(items) {
      this.chart = am4core.create(this.chartName, am4charts.PieChart);
      this.chart.hiddenState.properties.opacity = 0;
      this.chart.responsive.enabled = true;
      this.chart.padding(30, 30, 30, 30);
      this.chart.data = items;
      this.chart.scrollbarX = new am4core.Scrollbar();
    },
  }
}
</script>