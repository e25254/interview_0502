import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function LineChart() {
  const options = {
    chart: {
      zoomType: "xy",
    },
    title: {
      text: "",
      align: "left",
    },
    plotOptions: {
      column: {
        pointWidth: 5,
        pointPadding: 20,
      },
      spline: {
        marker: {
          enabled: false,
        },
      },
    },
    xAxis: [
      {
        // categories: [
        //   Date.UTC(2019),
        //   Date.UTC(2020),
        //   Date.UTC(2021),
        //   Date.UTC(2022),
        // ],
        type: "datetime",
        dateTimeLabelFormats: {
          day: "%m/%d",
          week: "%m/%d",
          month: "%Y %b",
          year: "%Y",
        },
        crosshair: true,
        alignTicks: true,
        gridLineWidth: 2,
        tickmarkPlacement: "on",
        tickInterval: 24 * 3600 * 1000 * 30 * 12,
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          format: "{value}°C",
          style: {
            color: "red",
          },
        },
        title: {
          text: "%",
          style: {
            color: "red",
          },
          align: "high",
          rotation: 0,
        },
        opposite: true,
      },
      {
        // Secondary yAxis
        title: {
          text: "千元",
          style: {
            color: "red",
          },
        },
        labels: {
          format: "{value} mm",
          style: {
            color: "red",
          },
        },
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      align: "left",
      x: 80,
      verticalAlign: "top",
      y: 60,
      floating: true,
      backgroundColor: "rgba(255,255,255,0.25)",
    },
    series: [
      {
        name: "Precipitation",
        type: "column",
        color: "#f6df99",
        borderColor: "#e8af00",
        borderRadius: 0,
        yAxis: 1,
        data: [
          [Date.UTC(2019, 0), 21.5],
          [Date.UTC(2019, 1), 29.5],
          [Date.UTC(2019, 2), 19.5],
          [Date.UTC(2019, 3), 23.5],
          [Date.UTC(2019, 4), 17.5],
          [Date.UTC(2019, 5), 14.5],
          [Date.UTC(2019, 6), 16.5],
          [Date.UTC(2019, 7), 29.5],
          [Date.UTC(2019, 8), 24.5],
          [Date.UTC(2019, 9), 21.5],
          [Date.UTC(2019, 10), 20.5],
          [Date.UTC(2019, 11), 20.5],
          [Date.UTC(2020, 0), 21.5],
          [Date.UTC(2020, 1), 29.5],
          [Date.UTC(2020, 2), 19.5],
          [Date.UTC(2020, 3), 23.5],
          [Date.UTC(2020, 4), 17.5],
          [Date.UTC(2020, 5), 14.5],
          [Date.UTC(2020, 6), 16.5],
          [Date.UTC(2020, 7), 29.5],
          [Date.UTC(2020, 8), 24.5],
          [Date.UTC(2020, 9), 21.5],
          [Date.UTC(2020, 10), 20.5],
          [Date.UTC(2020, 11), 20.5],
          [Date.UTC(2021, 0), 21.5],
          [Date.UTC(2021, 1), 29.5],
          [Date.UTC(2021, 2), 19.5],
          [Date.UTC(2021, 3), 23.5],
          [Date.UTC(2021, 4), 17.5],
          [Date.UTC(2021, 5), 14.5],
          [Date.UTC(2021, 6), 16.5],
          [Date.UTC(2021, 7), 29.5],
          [Date.UTC(2021, 8), 24.5],
          [Date.UTC(2021, 9), 21.5],
          [Date.UTC(2021, 10), 20.5],
          [Date.UTC(2021, 11), 20.5],
          [Date.UTC(2022, 0), 21.5],
          [Date.UTC(2022, 1), 29.5],
          [Date.UTC(2022, 2), 19.5],
          [Date.UTC(2022, 3), 23.5],
          [Date.UTC(2022, 4), 17.5],
          [Date.UTC(2022, 5), 14.5],
          [Date.UTC(2022, 6), 16.5],
          [Date.UTC(2022, 7), 29.5],
          [Date.UTC(2022, 8), 24.5],
          [Date.UTC(2022, 9), 21.5],
          [Date.UTC(2022, 10), 20.5],
          [Date.UTC(2022, 11), 20.5],
          [Date.UTC(2023, 0), 21.5],
          [Date.UTC(2023, 1), 29.5],
          [Date.UTC(2023, 2), 19.5],
          [Date.UTC(2023, 3), 23.5],
          [Date.UTC(2023, 4), 17.5],
          [Date.UTC(2023, 5), 14.5],
          [Date.UTC(2023, 6), 16.5],
          [Date.UTC(2023, 7), 29.5],
          [Date.UTC(2023, 8), 24.5],
          [Date.UTC(2023, 9), 21.5],
          [Date.UTC(2023, 10), 20.5],
          [Date.UTC(2023, 11), 20.5],
        ],
        tooltip: {
          valueSuffix: " mm",
        },
      },
      {
        name: "Temperature",
        type: "spline",
        color: "#CB4C4C",
        data: [
          [Date.UTC(2019, 0), 21.5],
          [Date.UTC(2019, 1), 29.5],
          [Date.UTC(2019, 2), 19.5],
          [Date.UTC(2019, 3), 23.5],
          [Date.UTC(2019, 4), 17.5],
          [Date.UTC(2019, 5), 14.5],
          [Date.UTC(2019, 6), 16.5],
          [Date.UTC(2019, 7), 29.5],
          [Date.UTC(2019, 8), 24.5],
          [Date.UTC(2019, 9), 21.5],
          [Date.UTC(2019, 10), 20.5],
          [Date.UTC(2019, 11), 20.5],
          [Date.UTC(2020, 0), 21.5],
          [Date.UTC(2020, 1), 29.5],
          [Date.UTC(2020, 2), 19.5],
          [Date.UTC(2020, 3), 23.5],
          [Date.UTC(2020, 4), 17.5],
          [Date.UTC(2020, 5), 14.5],
          [Date.UTC(2020, 6), 16.5],
          [Date.UTC(2020, 7), 29.5],
          [Date.UTC(2020, 8), 24.5],
          [Date.UTC(2020, 9), 21.5],
          [Date.UTC(2020, 10), 20.5],
          [Date.UTC(2020, 11), 20.5],
          [Date.UTC(2021, 0), 21.5],
          [Date.UTC(2021, 1), 29.5],
          [Date.UTC(2021, 2), 19.5],
          [Date.UTC(2021, 3), 23.5],
          [Date.UTC(2021, 4), 17.5],
          [Date.UTC(2021, 5), 14.5],
          [Date.UTC(2021, 6), 16.5],
          [Date.UTC(2021, 7), 29.5],
          [Date.UTC(2021, 8), 24.5],
          [Date.UTC(2021, 9), 21.5],
          [Date.UTC(2021, 10), 20.5],
          [Date.UTC(2021, 11), 20.5],
          [Date.UTC(2022, 0), 21.5],
          [Date.UTC(2022, 1), 29.5],
          [Date.UTC(2022, 2), 19.5],
          [Date.UTC(2022, 3), 23.5],
          [Date.UTC(2022, 4), 17.5],
          [Date.UTC(2022, 5), 14.5],
          [Date.UTC(2022, 6), 16.5],
          [Date.UTC(2022, 7), 29.5],
          [Date.UTC(2022, 8), 24.5],
          [Date.UTC(2022, 9), 21.5],
          [Date.UTC(2022, 10), 20.5],
          [Date.UTC(2022, 11), 20.5],
          [Date.UTC(2023, 0), 21.5],
          [Date.UTC(2023, 1), 29.5],
          [Date.UTC(2023, 2), 19.5],
          [Date.UTC(2023, 3), 23.5],
          [Date.UTC(2023, 4), 17.5],
          [Date.UTC(2023, 5), 14.5],
          [Date.UTC(2023, 6), 16.5],
          [Date.UTC(2023, 7), 29.5],
          [Date.UTC(2023, 8), 24.5],
          [Date.UTC(2023, 9), 21.5],
          [Date.UTC(2023, 10), 20.5],
          [Date.UTC(2023, 11), 20.5],
        ],
        tooltip: {
          valueSuffix: "°C",
        },
        states: {
          hover: {
            lineWidthPlus: 0,
            enabled: true,
            halo: {
              size: 5,
              attributes: {
                stroke: "#CB4C4C", // 边框颜色
                "stroke-width": 4, // 边框宽度
                fill: "none", // 填充颜色设为'none'表示不填充
                opacity: "0.5",
              },
            },
          },
        },
        marker: {
          states: {
            hover: {
              fillColor: "transparent",
              lineColor: "transparent",
            },
          },
        },
        opacity: 1,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}