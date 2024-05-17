import React from "react";
import { Typography, useTheme } from "@mui/material";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

export default function Logo() {
  const theme = useTheme();

  return (
    <>
      <NavBarLink to={ROUTES.ROOT}>
        <Typography
          variant="h4"
          sx={{
            marginRight: 2,
            fontFamily: "fantasy",
            display: { xs: "none", md: "inline-flex" },
            color: theme.palette.mode === "dark" ? "primary.light" : "primary.dark",
          }}
        >
          BCard
        </Typography>
      </NavBarLink>
    </>
  );
}
