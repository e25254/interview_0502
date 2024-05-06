"use client";
import { Paper, Stack, Typography } from "@mui/material";
import "./page.scss";
import LineChart from "@/components/LineChart";

export default function Home() {
  return (
    <Stack className="home_page">
      <Paper className="stock_name">
        <Typography variant="h5">三商壽（2867）</Typography>
      </Paper>
      <Paper>
        <LineChart />
      </Paper>
    </Stack>
  );
}
