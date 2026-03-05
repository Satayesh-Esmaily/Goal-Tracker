import {
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  Chip,
  Box,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GoalForm from "../../components/goals/GoalForm";
import { useGoals } from "../../context/GoalsContext";

export default function EditGoalPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { goals, updateGoal, deleteGoal } = useGoals();
  const [openDelete, setOpenDelete] = useState(false);
  const goal = goals.find(
    (item) => item.id === id && item.status !== "deleted"
  );

  if (!goal) {
    return <Navigate to="/goals" replace />;
  }

  const progressRate = Math.round(
    (goal.progress / Math.max(1, goal.target)) * 100
  );

  const xpEarned = (goal.logs?.length || 0) * 20;

 return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <Typography variant="h4" fontWeight={800}>
          ✏️ Edit Goal
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
            gap: 3,
          }}
        >
          <Stack spacing={2}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  Progress
                </Typography>
                <Typography variant="h5" fontWeight={700}>
                  {progressRate}%
                </Typography>
              </CardContent>
            </Card>
