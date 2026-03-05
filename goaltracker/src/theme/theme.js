import { createTheme } from "@mui/material/styles";

export const getTheme = (mode, direction = "ltr", primaryColor = "blue") => {
  const colorMap = {
    blue: "#1976d2",
    green: "#2e7d32",
    purple: "#7b1fa2",
    pink: "#c2185b",
  };
