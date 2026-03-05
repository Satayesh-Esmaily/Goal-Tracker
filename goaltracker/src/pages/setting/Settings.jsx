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
