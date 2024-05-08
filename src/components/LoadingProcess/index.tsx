import { Stack, Typography } from "@mui/material";
import React from "react";
import "./index.scss";

export default function LoadingProcess() {
  return (
    <Stack className="loading_process_div">
      <Typography>載入數據中...</Typography>
      <div className="loading_circle" />
    </Stack>
  );
}
