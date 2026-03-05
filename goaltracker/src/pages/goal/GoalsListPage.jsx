import { useMemo, useState } from "react";
import {
  Box,
  Button, const stats = useMemo(() => {
    const active = visibleGoals.filter((g) => g.status === "active").length;
    const completed = visibleGoals.filter(
      (g) => g.status === "completed"
    ).length;
    const paused = visibleGoals.filter((g) => g.status === "paused").length;
    const avgProgress =
      visibleGoals.length === 0
        ? 0
        : Math.round(
            (visibleGoals.reduce(
              (acc, g) =>
                acc +
  );
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


