import { NextRequest, NextResponse } from "next/server";
import { newHttpInstance } from "../utils";
export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const stock_code = searchParams.get("stock_code") || "2330";
    const start_date = searchParams.get("start_date") || "2024-01-01";
    const baseUrl = "https://api.finmindtrade.com/api/v4/data";
    const parametersArray = [
      `token=${process.env.FINMIND_API_TOKEN}`,
      `dataset=TaiwanStockMonthRevenue`,
      `data_id=${stock_code}`,
      `start_date=${start_date}`,
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
