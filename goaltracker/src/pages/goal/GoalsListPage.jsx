  <Stack direction={{ xs: "column", md: "row" }} gap={1.5}>
      
        {filteredGoals.length === 0 ? (
          <Card
            elevation={0}
            sx={{
              border: "1px dashed",
              borderColor: "divider",
              borderRadius: 3,
              textAlign: "center",
              py: { xs: 5, md: 7 },
              px: 2,
              background: isDark
                ? "linear-gradient(180deg, rgba(15,23,42,0.75), rgba(15,23,42,0.55))"
                : "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(248,250,252,0.92))",
              boxShadow: isDark
                ? "0 12px 30px rgba(2,6,23,0.35)"
                : "0 10px 24px rgba(15,23,42,0.08)",
            }}
          >
            <Stack spacing={1.2} alignItems="center">
              <Box
                sx={{
                  width: 54,
                  height: 54,
                  borderRadius: 99,
                  display: "grid",
                  placeItems: "center",
                  bgcolor: alpha(primary, isDark ? 0.16 : 0.12),
                  color: primary,
                }}
              >
                <Inventory2OutlinedIcon />
              </Box>
              <Typography variant="h6" fontWeight={800}>
                {isFa ? "هیچ هدفی یافت نشد" : "No goals found"}
              </Typography>
              <Typography color="text.secondary">
                {isFa
                  ? "فیلترها را تغییر بده یا هدف جدید بساز."
                  : "Try changing filters or create a new goal."}
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/goals/new")}
                sx={{ mt: 1, borderRadius: 999 }}
              >
                {isFa ? "ساخت هدف جدید" : "Create New Goal"}
              </Button>
            </Stack>
          </Card>
        ) : (
          <SectionCard
            title={
              isFa
                ? `لیست اهداف (${filteredGoals.length})`
                : `Goals (${filteredGoals.length})`
            }
          >
            <GoalsGrid
              goals={filteredGoals}
              onAddProgress={(goalId) => addProgress(goalId, 1)}
              onTogglePause={togglePause}
              onEdit={(goalId) => navigate(`/goals/${goalId}/edit`)}
              onDelete={(goalId) => {
                const targetGoal = visibleGoals.find(
                  (goal) => goal.id === goalId
                );
                if (targetGoal) setGoalToDelete(targetGoal);
              }}
            />
          </SectionCard>
        )}

                select
                label={t("goalsPage.sortBy")}
                sx={{ minWidth: 240 }}
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <MenuItem value="newest">{t("goalsPage.newest")}</MenuItem>
                <MenuItem value="progress">{t("goalsPage.progress")}</MenuItem>
                <MenuItem value="category">{t("goalsPage.category")}</MenuItem>
              </TextField>
            </Stack>
          </Stack>
        </SectionCard>








