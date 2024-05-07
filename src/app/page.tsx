"use client";
import { Paper, Stack, Typography } from "@mui/material";
import "./page.scss";
import LineChart from "@/components/LineChart";
import StatusTag from "@/components/StatusTag";

export default function Home() {
  return (
    <Stack className="home_page">
      <Paper className="stock_name">
        <Typography variant="h5">三商壽（2867）</Typography>
      </Paper>
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
    </Stack>
  );
}
