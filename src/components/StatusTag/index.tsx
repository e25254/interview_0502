import { Stack } from "@mui/material";
import React from "react";
import "./index.scss";

type StatusTagProps = {
  children: React.ReactNode;
};
export default function StatusTag({ children }: StatusTagProps) {
  return <Stack className="status_tag_div">{children}</Stack>;
}
