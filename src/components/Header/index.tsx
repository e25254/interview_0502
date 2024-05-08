"use client";
import React, { useEffect } from "react";
import "./index.scss";
import CommonInput from "../CommonInput";
import useDebounce from "@/hook/useDebounce";

export default function Header() {
  const { debounceValue, debounceOnChange } = useDebounce(500);
  return (
    <header className="header_stack">
      <CommonInput inputOnChange={debounceOnChange} />
    </header>
  );
}
