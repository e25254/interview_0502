"use client";
import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

import localFont from "next/font/local";

const pingFang = localFont({
  src: "./app/_font/PingFang Medium.ttf",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#0386F4",
    },
    secondary: {
      main: orange[500],
    },
  },
  typography: {
    fontFamily: pingFang.style.fontFamily,
    h5: {
      fontSize: "1.125rem",
      lineHeight: "1.125rem",
      fontWeight: "600",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "1rem 1.1875rem",
          boxShadow: "none",
          border: "1px solid #dfdfdf",
          backgroundColor: "#FAFAFA",
        },
      },
    },
  },
});

export default theme;
