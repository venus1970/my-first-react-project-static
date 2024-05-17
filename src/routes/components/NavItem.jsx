import React from "react";
import NavBarLink from "./NavBarLink";
import { Button, Typography } from "@mui/material";
import { useTheme } from "../../providers/CustomThemeProvider";

export default function NavItem({ to, sx, label }) {
  const { isDark } = useTheme()

  const elemStyle = isDark ? 'white' : 'black'
  return (
    <NavBarLink to={to} sx={{...sx, color: elemStyle}}>
      <Button color="inherit">
        <Typography>{label}</Typography>
      </Button>
    </NavBarLink>
  );
}