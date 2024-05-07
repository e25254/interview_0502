import { Stack } from "@mui/material";
import React, { useEffect, useRef } from "react";
import "./index.scss";
import CommonTable from "../CommonTable";
import { tableData } from "@/app/utils";

type HorizontalTableProps = {
  maxWidth?: string;
  stockData: tableData;
};

export default function HorizontalTable({ stockData }: HorizontalTableProps) {
  const scrollTableDivRef = useRef(null);

  const titleData: tableData = [
    {
      year_month: "年度月份",
      month_revenue: "每月營收",
      monthly_revenue_growth_rate: "單月營收年增率（％）",
    },
  ];

  useEffect(() => {
    if (!scrollTableDivRef || !scrollTableDivRef.current) return;
    const contentElement = scrollTableDivRef.current as HTMLElement;
    contentElement.scrollLeft =
      contentElement.scrollWidth - contentElement.clientWidth;
  }, [scrollTableDivRef]);

  return (
    <Stack className="horizontal_table_div">
      <Stack className="table_static">
        <CommonTable data={titleData} isAllBold />
      </Stack>
      <Stack className="table_scroll" ref={scrollTableDivRef}>
        <CommonTable data={stockData} />
      </Stack>
    </Stack>
  );
}
