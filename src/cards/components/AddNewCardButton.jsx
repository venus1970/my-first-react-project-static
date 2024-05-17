import { Fab, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function AddNewCardButton() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{
        position: "fixed",
        bottom: 75,
        right: 16,
        backgroundColor: theme.palette.mode === "dark" ? "#FFD700" : "#FFC0CB", // Pink color in light mode, gold in dark mode
        borderColor: theme.palette.mode === "dark" ? "#FFD700" : "#0000FF", // Blue border in light mode, gold in dark mode
        boxShadow: theme.palette.mode === "dark" ? "0 2px 5px rgba(255, 255, 255, 0.2)" : "none", // Ionize white shadow in dark mode
        "&:hover": {
          backgroundColor: theme.palette.mode === "dark" ? "#FFA500" : "#FF1493", // Dark pink color in light mode, orange in dark mode
          borderColor: theme.palette.mode === "dark" ? "#FFA500" : "#000080", // Dark blue border in light mode, orange in dark mode
          boxShadow: theme.palette.mode === "dark" ? "0 4px 8px rgba(255, 255, 255, 0.2)" : "none", // Ionize white shadow in dark mode on hover
        },
      }}
      onClick={() => {
        navigate(ROUTES.CREATE_CARD);
      }}
    >
      <AddIcon sx={{ color: theme.palette.mode === "dark" ? "#000000" : "#0000FF" }} /> 
    </Fab>
  );
}
