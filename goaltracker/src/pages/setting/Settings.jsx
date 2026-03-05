import {
  Box,
  Typography,
  Button,
  Stack,
  Switch,
  FormControlLabel,
  Card,
  CardContent,
  RadioGroup,
  Radio,
  Divider,
  Tooltip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Container,
  useTheme as useMuiTheme,
  TextField,
  MenuItem,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import { useTheme as useAppTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

export default function Settings() {
  const { t, i18n } = useTranslation();
  const { mode, toggleMode, primaryColor, setPrimaryColor } = useAppTheme();
  const { user, updateProfile } = useAuth();
  const muiTheme = useMuiTheme();
  const isDark = muiTheme.palette.mode === "dark";
  const primary = muiTheme.palette.primary.main;
  const [profileName, setProfileName] = useState(user?.name || "");
  const [profileEmail, setProfileEmail] = useState(user?.email || "");
  const [profileFocus, setProfileFocus] = useState(user?.focusArea || "study");
  const [profileSaved, setProfileSaved] = useState(false);

  useEffect(() => {
    setProfileName(user?.name || "");
    setProfileEmail(user?.email || "");
    setProfileFocus(user?.focusArea || "study");
  }, [user]);

  // Preferences
  const [reminder, setReminder] = useState(
    JSON.parse(localStorage.getItem("reminder")) ?? false
  );
  useEffect(() => localStorage.setItem("reminder", reminder), [reminder]);

  const [weekStart, setWeekStart] = useState(
    localStorage.getItem("weekStart") ?? "monday"
  );
  useEffect(() => localStorage.setItem("weekStart", weekStart), [weekStart]);

  const [animations, setAnimations] = useState(
    JSON.parse(localStorage.getItem("animations")) ?? true
  );
  useEffect(() => localStorage.setItem("animations", animations), [animations]);

  // Danger Zone
  const [openConfirm, setOpenConfirm] = useState(false);
  const handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };
   // Theme Colors
  const themeColors = [
    { value: "blue", hex: "#1976d2" },
    { value: "green", hex: "#2e7d32" },
    { value: "purple", hex: "#7b1fa2" },
    { value: "pink", hex: "#c2185b" },
  ];

  const sectionCardSx = {
    border: "1px solid",
    borderColor: "divider",
    borderRadius: 3,
    overflow: "hidden",
    background: isDark
      ? `linear-gradient(180deg, ${alpha(
          muiTheme.palette.background.paper,
          0.92
        )}, ${alpha(muiTheme.palette.background.paper, 0.78)})`
      : `linear-gradient(180deg, ${alpha("#ffffff", 0.98)}, ${alpha(
          "#f8fafc",
          0.94
        )})`,
    boxShadow: isDark
      ? "0 10px 26px rgba(2,6,23,0.32)"
      : "0 10px 22px rgba(15,23,42,0.08)",
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
      <Stack spacing={3}>
        <Card
          elevation={0}
          sx={{
            border: "1px solid",
            borderColor: alpha(primary, 0.35),
            borderRadius: 3.2,
            background: isDark
              ? `linear-gradient(120deg, ${alpha(primary, 0.24)}, ${alpha(
                  muiTheme.palette.background.paper,
                  0.9
                )})`
              : `linear-gradient(120deg, ${alpha(primary, 0.12)}, ${alpha(
                  "#ffffff",
                  0.94
                )})`,
          }}
        >
          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            <Stack spacing={0.5}>
              <Typography variant="h4" fontWeight={900}>
                {t("nav.settings")}
              </Typography>
              <Typography color="text.secondary">
                {t("settings.subtitle")}
              </Typography>
            </Stack>
          </CardContent>
        </Card>


