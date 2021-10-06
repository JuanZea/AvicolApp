<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import Chart from "./Chart.vue";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default {
  extends: Chart,
  methods: {
    buildChart() {
      am4core.ready(() => {
        am4core.useTheme(am4themes_animated);
        let data = [{
          "name": "Galpon1",
          "count": 4,
          "color": am4core.color("#dc4534"),
          "breakdown": [{
            "name": "Lote 1",
            "count": 29
          }, {
            "name": "Lote 2",
            "count": 40
          }, {
            "name": "Lote 3",
            "count": 11
          }, {
            "name": "Lote 4",
            "count": 9
          }]
        }, {
          "name": "Galpon2",
          "count": 5,
          "color": am4core.color("#d7a700"),
          "breakdown": [{
            "name": "Lote 1",
            "count": 22
          }, {
            "name": "Lote 2",
            "value": 30
          }, {
            "name": "Lote 3",
            "count": 11
          }, {
            "name": "Lote 4",
            "count": 10
          },
            {
              "name": "Lote 5",
              "count": 2
            }]
        }, {
          "name": "Galpon3",
          "count": 7,
          "color": am4core.color("#68ad5c"),
          "breakdown": [{
            "name": "Lote 1",
            "count": 22
          }, {
            "name": "Lote 2",
            "value": 30
          }, {
            "name": "Lote 3",
            "count": 11
          }, {
            "name": "Lote 4",
            "count": 10
          },
            {
              "name": "Lote 5",
              "count": 2
            }, {
              "name": "Lote 4",
              "count": 10
            },
            {
              "name": "Lote 7",
              "count": 2
            }]
        }];

        /**
         * Chart container
         */

        let chart = am4core.create(this.chartName, am4core.Container);
        chart.width = am4core.percent(100);
        chart.height = am4core.percent(100);
        chart.layout = "horizontal";

        let columnChart = chart.createChild(am4charts.XYChart);

        let categoryAxis = columnChart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.inversed = true;

        let valueAxis = columnChart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.renderer.grid.template.opacity = 0;
        valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
        valueAxis.renderer.ticks.template.stroke = am4core.color("#495C43");
        valueAxis.renderer.ticks.template.length = 10;
        valueAxis.renderer.line.strokeOpacity = 0.5;
        valueAxis.renderer.baseGrid.disabled = true;
        valueAxis.renderer.minGridDistance = 40;

// Create series
        let columnSeries = columnChart.series.push(new am4charts.ColumnSeries());
        columnSeries.dataFields.valueX = "value";
        columnSeries.dataFields.categoryY = "category";
        columnSeries.columns.template.strokeWidth = 0;

        /**
         * Pie chart
         */

// Create chart instance
        let pieChart = chart.createChild(am4charts.PieChart);
        pieChart.data = data;
        pieChart.innerRadius = am4core.percent(50);

// Add and configure Series
        let pieSeries = pieChart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "category";
        pieSeries.slices.template.propertyFields.fill = "color";
        pieSeries.labels.template.disabled = true;

// Set up labels
        let label1 = pieChart.seriesContainer.createChild(am4core.Label);
        label1.text = "";
        label1.horizontalCenter = "middle";
        label1.fontSize = 35;
        label1.fontWeight = 600;
        label1.dy = -30;

        let label2 = pieChart.seriesContainer.createChild(am4core.Label);
        label2.text = "";
        label2.horizontalCenter = "middle";
        label2.fontSize = 12;
        label2.dy = 20;

// Auto-select first slice on load
        pieChart.events.on("ready", function (ev) {
          pieSeries.slices.getIndex(0).isActive = true;
        });

// Set up toggling events
        pieSeries.slices.template.events.on("toggled", function (ev) {
          if (ev.target.isActive) {

            // Untoggle other slices
            pieSeries.slices.each(function (slice) {
              if (slice != ev.target) {
                slice.isActive = false;
              }
            });

            // Update column chart
            columnSeries.appeared = false;
            columnChart.data = ev.target.dataItem.dataContext.breakdown;
            columnSeries.fill = ev.target.fill;
            columnSeries.reinit();

            // Update labels
            label1.text = pieChart.numberFormatter.format(ev.target.dataItem.values.value.percent, "#.'%'");
            label1.fill = ev.target.fill;

            label2.text = ev.target.dataItem.category;
          }
        });
      });
    },
  }
}
</script>