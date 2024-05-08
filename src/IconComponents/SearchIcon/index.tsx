import { Stack } from "@mui/material";
import React from "react";
import "./index.scss";

export default function SearchIcon() {
  return (
    <Stack className="search_icon_div">
      <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.0168 12.1667H12.3585L12.1251 11.9417C13.1251 10.775 13.6418 9.18334 13.3585 7.49167C12.9668 5.175 11.0335 3.325 8.70013 3.04167C5.17513 2.60834 2.20846 5.575 2.6418 9.1C2.92513 11.4333 4.77513 13.3667 7.0918 13.7583C8.78346 14.0417 10.3751 13.525 11.5418 12.525L11.7668 12.7583V13.4167L15.3085 16.9583C15.6501 17.3 16.2085 17.3 16.5501 16.9583C16.8918 16.6167 16.8918 16.0583 16.5501 15.7167L13.0168 12.1667ZM8.0168 12.1667C5.9418 12.1667 4.2668 10.4917 4.2668 8.41667C4.2668 6.34167 5.9418 4.66667 8.0168 4.66667C10.0918 4.66667 11.7668 6.34167 11.7668 8.41667C11.7668 10.4917 10.0918 12.1667 8.0168 12.1667Z"
          fill="current"
        />
      </svg>
    </Stack>
  );
}