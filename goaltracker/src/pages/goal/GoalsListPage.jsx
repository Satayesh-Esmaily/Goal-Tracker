import { useMemo, useState } from "react";
import {
   b  textTransform: "none",
                  fontWeight: 700,
                }}
                value="all"
                label={isFa ? "همه" : "All"}
              />
              <Tab
                sx={{
                  borderRadius: 999,
                  textTransform: "none",
                  fontWeight: 700,
                }}
                value="active"
                label={isFa ? "فعال" : "Active"}
              />
              <Tab
                sx={{
                  borderRadius: 999,
                  textTransform: "none",
                  fontWeight: 700,
                }}
                value="paused"
                label={isFa ? "متوقف" : "Paused"}
              />
              <Tab
                sx={{
                  borderRadius: 999,
                  textTransform: "none",
                  fontWeight: 700,
                }}
                value="completed"
                label={isFa ? "تکمیل‌شده" : "Completed"}
              />
            </Tabs>
.background.paper,
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
 <Stack direction="row" spacing={1} alignItems="center">
                    <TimelineRoundedIcon
                      sx={{ color: primary }}
                      fontSize="small"
                    />
                    <Typography variant="body2" color="text.secondary">
                      {isFa ? "میانگین پیشرفت" : "Average Progress"}
                    </Typography>
                  </Stack>
                  <Box sx={{ minWidth: 220, width: { xs: "100%", sm: 320 } }}>
                    <Box
                      sx={{
                        height: 12,
                        borderRadius: 999,
                        overflow: "hidden",
                        bgcolor: isDark
                          ? "rgba(148,163,184,0.2)"
                          : "rgba(148,163,184,0.24)",
                      }}
                    >
                      <Box <SectionCard
          title={isFa ? "فیلتر و مرتب‌سازی" : "Filters & Sorting"}
          sx={{
            borderColor: alpha(primary, 0.24),
            background: isDark
              ? `linear-gradient(180deg, ${alpha(
                  theme.palette.background.paper,
                  0.9
                )}, ${alpha(theme.palette.background.paper, 0.78)})`
              : `linear-gradient(180deg, ${alpha("#ffffff", 0.96)}, ${alpha(
                  "#f8fafc",
                  0.9
                )})`,
          }}
        >
          <Stack spacing={2}>
            <Tabs
              value={tab}
              onChange={(_, next) => setTab(next)}
              variant="scrollable"
            >
              <Tab
                sx={{
                  borderRadi
                          width: `${stats.avgProgress}%`,
                          height: "100%",
                          borderRadius: 999,
                          background: `linear-gradient(90deg, ${primary}, ${alpha(
                            primary,
                            0.65
                          )})`,
                        }}
                      />
                    </Box>
                  </Box>
                  <Typography variant="h6" fontWeight={800}>
                    {stats.avgProgress}%
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>








