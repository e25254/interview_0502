"use client";
import { Paper, Stack, Typography } from "@mui/material";
import "./page.scss";
import LineChart from "@/components/LineChart";
import StatusTag from "@/components/StatusTag";
import HorizontalTable from "@/components/HorizontalTable";
import { useQuery } from "@tanstack/react-query";
import { reqGetStockMonthRevenue } from "./api/utils";

export default function Home() {
  const { data: stockMonthRevenueData, isLoading: stockMonthRevenueIsLoading } =
    useQuery({
      queryKey: ["getStockMonthRevenue"],
      queryFn: () => reqGetStockMonthRevenue("2330", "2018-02-01"),
      gcTime: 0,
    });
  return (
    <Stack className="home_page">
      {/* Stock information */}
      <Paper className="stock_name">
        <Typography variant="h5">三商壽（2867）</Typography>
      </Paper>

      {stockMonthRevenueIsLoading ? (
        <></>
      ) : (
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
