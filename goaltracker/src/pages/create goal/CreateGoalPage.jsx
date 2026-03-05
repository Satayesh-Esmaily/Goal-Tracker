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
 return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
      <Stack spacing={4}>
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={800}>
            {t("createGoalPage.title")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t("createGoalPage.subtitle")}
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            gap: 3,
            alignItems: "start",
          }}
        >
          <Card elevation={3}>
            <CardContent>
              <GoalForm onPreviewChange={setPreviewData} />
            </CardContent>
          </Card>

