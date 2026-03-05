import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
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
