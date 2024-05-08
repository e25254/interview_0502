export type lineChartData = {
  month_revenue: number[][];
  monthly_revenue_growth_rate: number[][];
};
export type tableData = {
  [key: string]: string | number;
}[];

export type finMindResData = {
  country: string;
  date: string;
  revenue: number;
  revenue_month: number;
  revenue_year: number;
  stock_id: string;
};

export const countGrowthRate = (current: number, pre: number) =>
  Math.round((current / pre - 1) * 10000) / 100;

export const formatToLineChartData = (
  originData: finMindResData[]
): {
  lineChartData: lineChartData;
  tableData: tableData;
} => {
  const formatRevenueDate = (data: finMindResData): number =>
    Date.UTC(data.revenue_year, data.revenue_month - 1); // Date.UTC 月份要 -1

  const formatRevenueValue = (data: finMindResData): number =>
    data.revenue / 1000; // value 要 /1000

  const formatRevenueGrowthRate = (
    data: finMindResData,
    originData: finMindResData[]
  ): number => {
    const {
      revenue: currentMonthRevenue,
      revenue_year: currentYear,
      revenue_month: currentMonth,
    } = data;
    const { revenue: preYearMonthRevenue } = originData.find(
      (data: finMindResData) =>
        data.revenue_year === currentYear - 1 &&
        data.revenue_month === currentMonth
    ) || { revenue: 0 };
    const growthRate = countGrowthRate(
      currentMonthRevenue,
      preYearMonthRevenue
    );
    return growthRate;
  };

  let lineChartMonthRevenue: number[][] =
    originData
      ?.filter((data: finMindResData) => data.revenue_year >= 2019)
      .map((data: finMindResData) => [
        formatRevenueDate(data),
        formatRevenueValue(data),
      ]) || [];

  let lineChartMonthlyRevenueGrowthRate: number[][] = originData
    ?.filter((data: finMindResData) => data.revenue_year >= 2019)
    .map((data: finMindResData) => {
      return (
        [formatRevenueDate(data), formatRevenueGrowthRate(data, originData)] ||
        []
      );
    });

  let tableData = originData
    ?.filter((data: finMindResData) => data.revenue_year >= 2019)
    .map((data) => {
      return {
        year_month: `${data.revenue_year}${data.revenue_month < 10 ? `0${data.revenue_month}` : data.revenue_month}`,
        month_revenue: `${formatRevenueValue(data).toLocaleString()}`,
        monthly_revenue_growth_rate: `${formatRevenueGrowthRate(data, originData).toFixed(2)}`,
      };
    });

  return {
    lineChartData: {
      month_revenue: lineChartMonthRevenue,
      monthly_revenue_growth_rate: lineChartMonthlyRevenueGrowthRate,
    },
    tableData,
  };
};
