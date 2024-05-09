export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { newHttpInstance } from "../utils";
import yahooFinance from "yahoo-finance2";

type suggestedStockRes = {
  displayContent: string;
  url: string;
  label: string;
  ticker: string;
  name: string;
  country: string;
  exchange: string;
  localLangName: string;
};
export type formatSuggestedStock = {
  stock_code: string;
  stock_name: string;
  display_name: string;
};
export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const search_code = searchParams.get("search_code") || "";

    const baseUrl = "https://statementdog.com/api/v1/autocomplete";
    const parametersArray: string[] = [`q=${search_code}`];
    const instance = newHttpInstance(
      "GET",
      `${baseUrl}?${parametersArray.join("&")}`
    );
    const {
      data: {
        data: { stocks },
      },
    } = await instance.request({});
    const res = stocks
      .filter((stock: suggestedStockRes): boolean => stock.country === "tw")
      .map((stock: suggestedStockRes): formatSuggestedStock => {
        return {
          stock_code: stock.ticker,
          stock_name: stock.localLangName,
          display_name: stock.displayContent,
        };
      });
    return NextResponse.json(res);
  } catch (error: Error | unknown) {
    console.error("GET StatementDog error", error);
    return NextResponse.json([]);
  }
};
