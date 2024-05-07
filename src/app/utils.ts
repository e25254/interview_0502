export type lineChartData = {
  month_revenue: number[][];
  monthly_revenue_growth_rate: number[][];
};
export type tableData = {
  [key: string]: string | number;
}[];

export const formatToLineChartData = (
  originData: {
    country: string;
    date: string;
    revenue: number;
    revenue_month: number;
    revenue_year: number;
    stock_id: string;
  }[]
): {
  lineChartData: lineChartData;
  tableData: tableData;
} => {
  let lineChartMonthRevenue: number[][] =
    originData?.map((data) => [
      Date.UTC(data.revenue_year, data.revenue_month - 1), // Date.UTC 月份要 -1
      data.revenue / 1000,
    ]) || [];

  let lineChartMonthlyRevenueGrowthRate: number[][] = [];

  let tableData = originData?.map((data) => {
    return {
      year_month: `${data.revenue_year}${data.revenue_month < 10 ? `0${data.revenue_month}` : data.revenue_month}`,
      month_revenue: `${data.revenue / 1000}`,
      monthly_revenue_growth_rate: "26.35",
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
