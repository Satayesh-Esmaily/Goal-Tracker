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


