import { NextResponse } from "next/server";
import { newHttpInstance } from "../utils";
export const GET = async (
  stockCode: string = "2330",
  startDate: string = "2021-01-01"
) => {
  try {
    const baseUrl = "https://api.finmindtrade.com/api/v4/data";
    const parametersArray = [
      `token=${process.env.FINMIND_API_TOKEN}`,
      `dataset=TaiwanStockMonthRevenue`,
      `data_id=${stockCode}`,
      `start_date=${startDate}`,
    ];
    const instance = newHttpInstance(
      "GET",
      `${baseUrl}?${parametersArray.join("&")}`
    );
    const {
      data: { data: stockMonthRevenueData },
    } = await instance.request({});
    return NextResponse.json(stockMonthRevenueData);
  } catch (error: Error | unknown) {
    console.error("GET FinMind error", error);
    return NextResponse.json([]);
  }
};
