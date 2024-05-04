"use client";
import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0386F4",
    },
    secondary: {
      main: orange[500],
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "1rem 1.1875rem",
        },
      },
    },
  },
});

export default theme;
