import { useState } from "react";
import {
  Container,
  Stack,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GoalForm from "../../components/goals/GoalForm";

const CreateGoalPage = () => {
  const [previewData, setPreviewData] = useState(null);
  const { t } = useTranslation();
