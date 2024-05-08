import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import "./index.scss";
import SearchIcon from "@/IconComponents/SearchIcon";
import useDebounce from "@/hook/useDebounce";

type CommonInputProps = {
  inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function CommonInput({ inputOnChange }: CommonInputProps) {
  return (
    <Stack className="common_input_div">
      <input
        placeholder="輸入台／美股代號，查看公司價值"
        onChange={inputOnChange}
      />
      <SearchIcon />
    </Stack>
  );
}
