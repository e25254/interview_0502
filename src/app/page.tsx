"use client";
import { Paper, Stack, Typography } from "@mui/material";
import "./page.scss";
import LineChart from "@/components/LineChart";
import StatusTag from "@/components/StatusTag";
import HorizontalTable from "@/components/HorizontalTable";

export default function Home() {
  return (
    <Stack className="home_page">
      {/* Stock information */}
      <Paper className="stock_name">
        <Typography variant="h5">三商壽（2867）</Typography>
      </Paper>
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
        <LineChart />
      </Paper>
      {/* Stock Table */}
      <Paper className="stock_table">
        <Stack className="table_title_div">
          <StatusTag>
            <Typography variant="h6">詳細數據</Typography>
          </StatusTag>
        </Stack>
        <HorizontalTable />
      </Paper>
    </Stack>
  );
}
