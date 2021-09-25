<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

export default {
  methods: {
    getSeries() {
      let series = this.chart.series.push(new am4charts.ColumnSeries);
      series.dataFields.valueY = "count";
      series.dataFields.categoryX = "name";
      series.tooltip.label.textAlign = "middle";
      series.tooltipText = "[bold]{categoryX}:[/]\n {valueY}";
      series.tooltip.pointerOrientation = "vertical";
      series.tooltip.dy = -6;
      series.columnsContainer.zIndex = 100;

      return series;
    },
    buildResponsive() {
      this.chart.zoomOutButton.background.fill = am4core.color("#FAA307");
      this.chart.zoomOutButton.icon.stroke = am4core.color("#EFD9CE");
      this.chart.zoomOutButton.icon.strokeWidth = 2;
      this.chart.zoomOutButton.background.states.getKey("hover").properties.fill = am4core.color("#E85D04");

      this.chart.exporting.menu = new am4core.ExportMenu();
      this.chart.exporting.menu.align = "right";
      this.chart.exporting.menu.verticalAlign = "top";

      this.chart.responsive.rules.push({
            relevant: function (target) {
              return target.pixelWidth <= 600;
            },
            state: function (target, stateId) {
              if (target instanceof am4charts.Chart) {
                let state = target.states.create(stateId);
                state.properties.paddingTop = 4;
                state.properties.paddingRight = 4;
                state.properties.paddingBottom = 4;
                state.properties.paddingLeft = 4;
                return state;
              }
              return null;
            }
          }
      );
    }
  }
}
</script>