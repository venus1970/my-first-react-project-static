import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper, useTheme } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import StyleIcon from "@mui/icons-material/Style";
import FavoriteIcon from "@mui/icons-material/Favorite"; // Import favorite icon
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function Footer() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.palette.mode === "dark" ? "#1f1f1f" : "#FFC0CB", // Dark gray background in dark mode, pink in light mode
      }}
    >
      <BottomNavigation showLabels sx={{ backgroundColor: theme.palette.mode === "dark" ? "#1f1f1f" : "#FFC0CB" }}> {/* Dark gray background in dark mode, pink in light mode */}
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
      
        <BottomNavigationAction
          label="Favorite"
          icon={<FavoriteIcon />} // Include favorite icon
          onClick={() => navigate(ROUTES.FAVORITE)} // Add the appropriate route for the favorite page
        />
     
      <BottomNavigationAction
          label="Cards"
          icon={<StyleIcon />}
          onClick={() => navigate(ROUTES.CARDS)}
        />
 </BottomNavigation>
    </Paper>
  );
}
