  <Stack direction={{ xs: "column", md: "row" }} gap={1.5}>
      
        {filteredGoals.length === 0 ? (
          <Card
            elevation={0}
            sx={<ConfirmDialog
          open={Boolean(goalToDelete)}
          title={isFa ? "⚠️ مطمئن هستید؟" : "⚠️ Are you sure?"}
          description={
            goalToDelete
              ? `${isFa ? "حذف" : "Delete"} "${goalToDelete.title}"?`
              : ""
          }
          confirmLabel={isFa ? "حذف" : "Delete"}
          onCancel={() => setGoalToDelete(null)}
          onConfirm={() => {
            if (!goalToDelete) return;
            deleteGoal(goalToDelete.id);
            setGoalToDelete(null);
          }}
        />
      </Stack>
    </Container>
  );
}
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









