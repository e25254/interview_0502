export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { newHttpInstance } from "../utils";
import { formatToLineChartData } from "@/app/utils";
export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const stock_code = searchParams.get("stock_code") || "2330";
    const start_date = searchParams.get("start_date") || "2019-02-01";
    const baseUrl = "https://api.finmindtrade.com/api/v4/data";
    const parametersArray: string[] = [
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
    return NextResponse.json(formatToLineChartData(stockMonthRevenueData));
  } catch (error: Error | unknown) {
    console.error("GET FinMind error", error);
    return NextResponse.json([]);
  }
};
