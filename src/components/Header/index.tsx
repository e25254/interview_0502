"use client";
import React, { useEffect, useState } from "react";
import "./index.scss";
import CommonInput from "../CommonInput";
import useDebounce from "@/hook/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { reqGetSuggestedStock } from "@/api_v1";
import SearchBox from "../SearchBox";
import useStockSelect from "@/hook/useStockSelect";

export default function Header() {
  const { debounceValue, debounceOnChange, clearDebounceValue } = useDebounce();
  const { changeStockSelect } = useStockSelect();
  const [searchResult, setSearchResult] = useState<[]>([]);

  const { data: suggestedStock } = useQuery({
    queryKey: ["getSuggestedStock", debounceValue],
    queryFn: ({ queryKey: [_, searchString] }) =>
      reqGetSuggestedStock(searchString),
    gcTime: 0,
  });

  const selectItem = (value: number) => changeStockSelect(value);
  const clearSearchResult = () => {
    clearDebounceValue();
    setSearchResult([]);
  };

  useEffect(() => {
    if (!suggestedStock) return;
    setSearchResult(suggestedStock);
  }, [suggestedStock]);

  return (
    <header className="header_stack">
      <SearchBox
        inputOnChange={debounceOnChange}
        inputPlaceholder="輸入台／美股代號，查看公司價值"
        searchResult={searchResult}
        searchText={debounceValue}
        clearFunction={clearSearchResult}
        {...{ selectItem, clearDebounceValue }}
      />
    </header>
  );
}
