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
        this.getChart();
        this.getCategoryX();
        this.getCategoryY();
        let series = this.getSeries();
        let columnTemplate = this.getColumns(series);

        series.heatRules.push({
          target: columnTemplate,
          property: "fill",
          dataField: "valueY",
          min: am4core.color(this.minColor),
          max: am4core.color(this.maxColor)
        });

        series.mainContainer.mask = null;

        this.buildEventsAndStates(series);
        this.buildResponsive();
      });
    },
    getCategoryX() {
      let categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "name";
      categoryAxis.renderer.grid.template.strokeOpacity = 0;
      categoryAxis.renderer.labels.template.dy = 35;
      categoryAxis.renderer.tooltip.dy = 35;
      categoryAxis.cursorTooltipEnabled = false;
      categoryAxis.title.text = `[bold]${this.labelX}[/]`;
      categoryAxis.title.paddingTop = 35;
      categoryAxis.zoomToIndexes(0, 2, true, true);
      return categoryAxis;
    },
    getCategoryY() {
      let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.fillOpacity = 0.3;
      valueAxis.renderer.grid.template.strokeOpacity = 0;
      valueAxis.min = 0;
      valueAxis.cursorTooltipEnabled = false;
      valueAxis.title.text = `[bold]${this.labelY}[/]`;
      valueAxis.renderer.baseGrid.strokeOpacity = 0;
      return valueAxis;
    },
    getChart() {
      this.chart = am4core.create(this.chartName, am4charts.XYChart);
      this.chart.hiddenState.properties.opacity = 0;
      this.chart.responsive.enabled = true;
      this.chart.padding(30, 30, 30, 30);
      this.chart.data = this.items;
      this.chart.scrollbarX = new am4core.Scrollbar();
    },
    buildEventsAndStates(series) {
      let hoverState = series.columns.template.states.create("hover");
      hoverState.properties.dx = -5;
      hoverState.properties.dy = -5;
      let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
      hoverShadow.dx = 6;
      hoverShadow.dy = 6;
      hoverShadow.opacity = 0.3;
      let previousBullet = {};
      this.chart.cursor.events.on("cursorpositionchanged", function (event) {
        let dataItem = series.tooltipDataItem;
        if (dataItem.column) {
          let bullet = dataItem.column.children.getIndex(1);
          previousBullet.isHover = !(previousBullet && previousBullet !== bullet);

          if (previousBullet !== bullet) {
            let hs = bullet.states.getKey("hover");
            hs.properties.dy = bullet.parent.pixelHeight !== 0 ? -bullet.parent.pixelHeight + 20 : bullet.parent.pixelHeight;
            bullet.isHover = true;
            previousBullet = bullet;
          }
        }
      })
    },
    getColumns(series) {
      let columnTemplate = series.columns.template;
      columnTemplate.width = am4core.percent(50);
      columnTemplate.maxWidth = 66;
      columnTemplate.column.cornerRadius(60, 60, 10, 10);
      columnTemplate.strokeOpacity = 0;

      let cursor = new am4charts.XYCursor();
      this.chart.cursor = cursor;
      cursor.lineX.disabled = true;
      cursor.lineY.disabled = true;
      cursor.behavior = "none";

      let bullet = columnTemplate.createChild(am4charts.CircleBullet);
      bullet.circle.radius = am4core.percent(30).percent;
      bullet.valign = "bottom";
      bullet.align = "center";
      bullet.isMeasured = true;
      bullet.verticalCenter = "bottom";
      bullet.states.create("hover");

      let outlineCircle = bullet.createChild(am4core.Circle);
      outlineCircle.adapter.add("radius", function (radius, target) {
        return target.parent.circle.pixelRadius + 5;
      })

      let image = bullet.createChild(am4core.Image);
      image.width = 100;
      image.height = 100;
      image.horizontalCenter = "middle";
      image.verticalCenter = "middle";
      image.propertyFields.href = "image";

      image.adapter.add("mask", function (mask, target) {
        let circleBullet = target.parent;
        return circleBullet.circle;
      })

      return columnTemplate
    }
  }
}
</script>