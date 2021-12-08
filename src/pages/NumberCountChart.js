import React, {useContext, useEffect} from "react";
import {NumbersCountContext} from "../contexts";

import Highcharts from "highcharts";
// Alternatively, this is how to load Highstock. Highmaps and Highcharts Gantt are similar.
// import Highcharts from `highcharts/highstock`;

// Load the exporting module.
import Exporting from "highcharts/modules/exporting";

// Initialize exporting module. (CommonJS only)
Exporting(Highcharts);


function NumberCountChart() {
  const ctx = useContext(NumbersCountContext);

  useEffect(() => {
    Highcharts.chart("chart", {
      chart: {
        type: "column"
      },
      title: {
        text: "Numbers Click Count"
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        type: "category",
        title: {
          text: "Numbers"
        }
      },
      yAxis: {
        title: {
          text: "Number of Clicks"
        }
      },
      legend: {
        enabled: true
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            // format: "{point.y:.1f}%"
          }
        }
      },
      tooltip: {
        headerFormat: `<span style="font-size:11px">{series.name}</span><br>`,
        pointFormat: `<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>`
      },
      series: [
        {
          name: "Numbers Count",
          colorByPoint: true,
          data: ctx.numbersCount.list.map((numberCount) => {
            return { name: numberCount.number, y: numberCount.count, };
          }),
        }
      ]
    });
  });

  return <div id="chart"/>;
}

export default NumberCountChart;
