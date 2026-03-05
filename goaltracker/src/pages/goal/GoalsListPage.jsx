import { useMemo, useState } from "react";
import {
   borderColor: alpha(primary, 0.55),
      boxShadow: isDark
        ? "0 16px 34px rgba(2,6,23,0.44)"
        : "0 12px 28px rgba(15,23,42,0.12)",
    },
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
                  theme.palette.background.paper,
                  0.9
                )})`
              : `linear-gradient(120deg, ${alpha(primary, 0.12)}, ${alpha(
                  "#ffffff",
                  0.94
                )})`,
          }}
        >

            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", md: "center" }}
              spacing={2}
            >
              <Stack spacing={0.75}>
                <Typography variant="h4" fontWeight={900}>
                  {t("goalsPage.title")}
                </Typography>
                <Typography color="text.secondary">
                  {isFa
                    ? "اهداف خود را مدیریت، فیلتر و پیگیری کنید."
                    : "Manage, filter, and track all your goals."}
                </Typography>
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} gap={1.5}>
                <Button
                  variant="contained"
                  startIcon={<AddRoundedIcon />}
                  onClick={() => navigate("/goals/new")}
                >
                  {isFa ? "هدف جدید" : "New Goal"}
                </Button>
                <ExportButton
                  goals={visibleGoals}
                  fileName="goals_export.json"
                  disabled={visibleGoals.length === 0}
                />
              </Stack>
            </Stack>
          </CardContent>
        </Card>

          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", md: "center" }}
              spacing={2}
            >
              <Stack spacing={0.75}>
                <Typography variant="h4" fontWeight={900}>
                  {t("goalsPage.title")}
                </Typography>
                <Typography color="text.secondary">
                  {isFa
                    ? "اهداف خود را مدیریت، فیلتر و پیگیری کنید."
                    : "Manage, filter, and track all your goals."}
                </Typography>
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} gap={1.5}>
                <Button
                  variant="contained"
                  startIcon={<AddRoundedIcon />}
                  onClick={() => navigate("/goals/new")}
                >
                  {isFa ? "هدف جدید" : "New Goal"}
                </Button>
                <ExportButton
                  goals={visibleGoals}
                  fileName="goals_export.json"
                  disabled={visibleGoals.length === 0}
                />
              </Stack>
            </Stack>
              icon={<TaskAltRoundedIcon fontSize="small" />}
              label={t("common.completed")}
              value={stats.completed}
              color={theme.palette.success.main}
              statCardSx={statCardSx}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<PauseCircleOutlineRoundedIcon fontSize="small" />}
              label={t("common.paused")}
              value={stats.paused}
              color={theme.palette.warning.main}
              statCardSx={statCardSx}
            />
          </Grid>
          <Grid item xs={12}>
            <Card elevation={0} sx={statCardSx}>
              <CardContent>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  justifyContent="space-between"
                >
          </CardContent>
        </Card>





