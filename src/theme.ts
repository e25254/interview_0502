"use client";
import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

import localFont from "next/font/local";

const pingFang = localFont({
  src: "./app/_font/PingFang Medium.ttf",
});

declare module "@mui/material/styles" {
  interface TypographyVariants {
    table_bold?: React.CSSProperties;
    table_common?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    table_bold?: React.CSSProperties;
    table_common?: React.CSSProperties;
  }
}
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    table_bold: true;
    table_common: true;
  }
}

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
    h6: {
      fontWeight: "800",
      fontSize: "0.8125rem",
      lineHeight: "1.1375rem",
    },
    body1: {
      fontSize: "0.9375rem",
      lineHeight: "164%",
    },
    table_bold: {
      fontWeight: "600",
      fontSize: "0.8126rem",
      lineHeight: "1.4625rem",
    },
    table_common: {
      fontWeight: "400",
      fontSize: "0.8126rem",
      lineHeight: "1.4625rem",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "1rem 1.1875rem",
          boxShadow: "none",
          border: "1px solid #dfdfdf",
          backgroundColor: "#fffff",
        },
      },
    },
  },
});

export default theme;
