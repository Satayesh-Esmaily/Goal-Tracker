  <Stack direction={{ xs: "column", md: "row" }} gap={1.5}>
              <TextField
                fullWidth
                label={t("goalsPage.searchByTitle")}
                placeholder={
                  isFa ? "عنوان هدف را جستجو کن..." : "Search goals by title..."
                }
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchRoundedIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
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







