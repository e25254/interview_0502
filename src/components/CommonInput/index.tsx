import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./index.scss";
import SearchIcon from "@/IconComponents/SearchIcon";

export type CommonInputProps = {
  inputPlaceholder?: string;
  inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputOnFocus?: () => void;
  inputOnBlur?: () => void;
};

export default function CommonInput({
  inputOnChange,
  inputPlaceholder = "",
  inputValue,
  setInputValue,
  inputOnFocus = () => {},
  inputOnBlur = () => {},
}: CommonInputProps) {
  return (
    <Stack className="common_input_div">
      <input
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
          inputOnChange(event);
        }}
        onFocus={inputOnFocus}
        onBlur={inputOnBlur}
      />
      <SearchIcon />
    </Stack>
  );
}
