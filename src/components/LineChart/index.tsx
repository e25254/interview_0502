import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./index.scss";
import { lineChartData } from "@/app/utils";

type LineChartProps = {
  stockData: lineChartData;
};

export default function LineChart({ stockData }: LineChartProps) {
  const maxWidthLabel = (() => {
    let temp = stockData.month_revenue.map((revenue) => revenue[1]);
    return Math.max(...temp);
  })();
  const formatLastLabel = (
    isLast: boolean,
    defaultValue: string | number,
    formatString: string
  ) => {
    if (isLast) return formatString;
    if (formatString === "千元") return defaultValue.toLocaleString();
    return defaultValue;
  };
  const options = {
    title: {
      text: "",
      align: "left",
    },
    plotOptions: {
      column: {
        pointWidth: 5,
        pointPadding: 20,
      },
      line: {
        marker: {
          enabled: false,
        },
      },
      series: {
        events: {
          legendItemClick: (e: any) => {
            e.preventDefault();
          },
        },
      },
    },
    xAxis: [
      {
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
        tickWidth: 0,
        lineColor: "#e4e4e4",
        labels: {
          style: {
            color: "#545454",
          },
        },
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          formatter: (
            formatterContextObject: Highcharts.AxisLabelsFormatterContextObject
          ) =>
            formatLastLabel(
              formatterContextObject.isLast,
              formatterContextObject.value,
              "％"
            ),
          style: {
            color: "#545454",
          },
        },
        title: {
          text: "",
        },
        opposite: true,
        alignTicks: false,
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        minorTickInterval: "auto",
        minorTicksPerMajor: 1,
        minorTickLength: 5,
        minorTickWidth: 1,
        lineWidth: 0,
        minorTickColor: "#E4E4E4",
      },
      {
        // Secondary yAxis
        title: {
          text: "",
        },
        labels: {
          formatter: (
            formatterContextObject: Highcharts.AxisLabelsFormatterContextObject
          ) =>
            formatLastLabel(
              formatterContextObject.isLast,
              formatterContextObject.value,
              "千元"
            ),
          style: {
            color: "#545454",
          },
        },
        alignTicks: false,
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      align: "left",
      x: (maxWidthLabel.toString().length / 2) * 13 * 1.5, // 根據左邊label字串長度去計算ｘ偏移
      verticalAlign: "top",
      y: 8,
      floating: true,
      backgroundColor: "rgba(255,255,255,0.25)",
      symbolRadius: 0,
      symbolHeight: 10,
      symbolWidth: 14,
      squareSymbol: false,
      itemStyle: {
        color: "#636363",
        fontSize: "0.7813rem",
        lineHeight: "1.0938rem",
      },
    },
    series: [
      {
        name: "每月營收",
        type: "column",
        legendSymbol: "rectangle",
        color: "#f6df99",
        borderColor: "#e8af00",
        borderRadius: 0,
        yAxis: 1,
        data: stockData?.month_revenue || [],
        tooltip: {
          valueSuffix: " mm",
        },
      },
      {
        name: "單月營收年增率 (%)",
        type: "line",
        color: "#CB4C4C",
        data: stockData?.monthly_revenue_growth_rate || [],
        legendSymbol: "rectangle",
        tooltip: {
          valueSuffix: "°C",
        },
        linecap: "square",
        states: {
          hover: {
            lineWidthPlus: 0,
            enabled: true,
            halo: {
              size: 5,
              attributes: {
                stroke: "#CB4C4C",
                "stroke-width": 4,
                fill: "none",
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
    <div className="line_chart_div">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
