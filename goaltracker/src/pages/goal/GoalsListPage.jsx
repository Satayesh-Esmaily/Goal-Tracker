import { useMemo, useState } from "react";
import {
   target,
        progress,
        status,
        startDate,
    nst statCardSx = {
    border: "1px solid",
    borderColor: "divider",
    borderRadius: 3,
    height: "100%",
    background: isDark
      ? `linear-gradient(180deg, ${alpha(
          theme.palette.background.paper,
          0.92
        )}, ${alpha(theme.palette.background.paper, 0.72)})`
      : `linear-gradient(180deg, ${alpha(
          theme.palette.background.paper,
          0.96
        )}, ${alpha("#f8fafc", 0.94)})`,
    boxShadow: isDark
      ? "0 12px 30px rgba(2,6,23,0.32)"
      : "0 8px 24px rgba(15,23,42,0.08)",
    transition:
      "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
    "&:hover": {
      transform: "transon;charset=utf-8,${encodeURIComponent(
      JSON.stringify(goalsToExport, null, 2)
    )}`;
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

        category,
        type,
  Container,
  Grid,
  MenuItem,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  InputAdornment,
 useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import PauseCircleOutlineRoundedIcon from "@mui/icons-material/PauseCircleOutlineRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


import GoalsGrid from "../../components/goals/GoalsGrid";
import ConfirmDialog from "../../components/common/ConfirmDialog";
import SectionCard from "../../components/common/SectionCard";
import { useGoals } from "../../context/GoalsContext";
import { sortAndFilterGoals } from "../../utils/goals";
import ExportButton from "../../components/common/ExportButton";

function StatCard({ icon, label, value, color, statCardSx }) {
  return (
    <Card elevation={0} sx={statCardSx}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box sx={{ color }}>{icon}</Box>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
        </Stack>
        <Typography variant="h4" fontWeight={800} sx={{ mt: 1 }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function GoalsListPage() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const isFa = i18n.language === "fa";
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const primary = theme.palette.primary.main;






