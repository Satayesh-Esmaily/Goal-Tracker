import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "70%", md: "50%" },
          textAlign: "center",
          p: 6,
          borderRadius: 3,
          bgcolor: "background.paper",
          boxShadow: 8,
          mx: "auto",
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Typography
            variant="h1"
            fontWeight={900}
            sx={{
              background: "linear-gradient(90deg, #FF512F, #DD2476)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            404
          </Typography>

          <Typography variant="h5" color="text.secondary">
            {t("notFound.title")}
          </Typography>
