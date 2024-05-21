"use client";
import React from "react";
import "./index.scss";
import SearchBox from "../SearchBox";
import useStockSelect from "@/hook/useStockSelect";

export default function Header() {
  const { changeStockSelect } = useStockSelect();

  const selectItem = (value: number) => changeStockSelect(value);

  return (
    <header className="header_stack">
      <SearchBox
        inputPlaceholder="輸入台／美股代號，查看公司價值"
        {...{ selectItem }}
      />
    </header>
  );
}
