import { Stack } from "@mui/material";
import React from "react";
import "./index.scss";
import CommonTable from "../CommonTable";

type HorizontalTableProps = {
  maxWidth?: string;
};

export default function HorizontalTable({}: HorizontalTableProps) {
  const titleData = [
    {
      header: "年度月份",
      value1: "每月營收",
      value2: "單月營收年增率（％）",
    },
  ];
  const contentData = [
    {
      header: "202312",
      value1: "1154800",
      value2: "26.35",
    },
    {
      header: "202312",
      value1: "1154800",
      value2: "26.35",
    },
    {
      header: "202312",
      value1: "1154800",
      value2: "26.35",
    },
    {
      header: "202312",
      value1: "1154800",
      value2: "26.35",
    },
    {
      header: "202312",
      value1: "1154800",
      value2: "26.35",
    },
    {
      header: "202312",
      value1: "1154800",
      value2: "26.35",
    },
    {
      header: "202312",
      value1: "1154800",
      value2: "26.35",
    },
  ];
  return (
    <Stack className="horizontal_table_div">
      <Stack className="table_static">
        <CommonTable data={titleData} isAllBold />
      </Stack>
      <Stack className="table_scroll">
        <CommonTable data={contentData} />
      </Stack>
    </Stack>
  );
}
