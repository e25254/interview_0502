"use client";
import { Paper, Stack, Typography } from "@mui/material";
import "./page.scss";
import LineChart from "@/components/LineChart";
import StatusTag from "@/components/StatusTag";
import HorizontalTable from "@/components/HorizontalTable";
import { useQuery } from "@tanstack/react-query";

import LoadingProcess from "@/components/LoadingProcess";
import { reqGetStockMonthRevenue, reqGetSuggestedStock } from "@/api_v1";
import useStockSelect from "@/hook/useStockSelect";
import { useEffect } from "react";

export default function Home() {
  const { stockCode, start_time } = useStockSelect();
  const { data: stockMonthRevenueData, isLoading: stockMonthRevenueIsLoading } =
    useQuery({
      queryKey: ["getStockMonthRevenue", stockCode, start_time],
      queryFn: ({ queryKey: [_, queryCode, startTime] }) =>
        reqGetStockMonthRevenue(`${queryCode}`, `${startTime}`),
      gcTime: 0,
    });

  const { data: stockInformationData, isLoading: stockInformationIsLoading } =
    useQuery({
      queryKey: ["getStockInformation", stockCode],
      queryFn: ({ queryKey: [_, queryCode] }) =>
        reqGetSuggestedStock(`${queryCode}`),
    });

  return (
    <Stack className="home_page">
      {stockMonthRevenueIsLoading || stockInformationIsLoading ? (
        <LoadingProcess />
      ) : (
        <>
          {/* Stock information */}
          <Paper className="stock_name">
            <Typography variant="h5">{`${stockInformationData[0].stock_name}（${stockInformationData[0].stock_code}）`}</Typography>
          </Paper>

          {stockMonthRevenueData.lineChartData.month_revenue.length > 0 &&
          stockMonthRevenueData.lineChartData.monthly_revenue_growth_rate
            .length > 0 ? (
            <>
              {/* Stock Chart */}
              <Paper className="stock_chart">
                <Stack className="tag_group">
                  <StatusTag>
                    <Typography variant="h6">每月營收</Typography>
                  </StatusTag>
                  <StatusTag>
                    <Typography variant="h6">近 5 年</Typography>
                  </StatusTag>
                </Stack>
                <LineChart stockData={stockMonthRevenueData?.lineChartData} />
              </Paper>
              {/* Stock Table */}
              <Paper className="stock_table">
                <Stack className="table_title_div">
                  <StatusTag>
                    <Typography variant="h6">詳細數據</Typography>
                  </StatusTag>
                </Stack>
                <HorizontalTable stockData={stockMonthRevenueData?.tableData} />
              </Paper>
            </>
          ) : (
            <Stack className="no_data">
              <Typography variant="h5">無近五年數據</Typography>
            </Stack>
          )}
        </>
      )}

      <Stack className="data_from_div">
        <Typography variant="table_common">
          {
            "圖表單位：千元，數據來自公開資訊觀測站\n網頁圖表歡迎轉貼引用，請註明出處為財報狗"
          }
        </Typography>
      </Stack>
    </Stack>
  );
}
