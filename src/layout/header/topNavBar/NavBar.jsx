import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
import { AppBar, Toolbar, useTheme } from "@mui/material";
import RightNavBar from "./right-navigation/RightNavBar";
import { MenuProvider } from "./menu/MenuProvider";

export default function NavBar() {
  const theme = useTheme();

  return (
    <MenuProvider>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={10}
        sx={{
          backgroundColor: theme.palette.mode === "dark" ? "#FFD900" : "#FFC0CB", // Yellow background in dark mode, pink in light mode
          transition: "background-color 0.3s", // Smooth transition
          "&:hover": {
            backgroundColor: theme.palette.mode === "dark" ? "#00BFFF" : "#FF69B4", // Lighter blue in dark mode, lighter pink in light mode
          },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavBar />
          <RightNavBar />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
}
/*
import React, { useContext } from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
import { AppBar, Input, Toolbar } from "@mui/material";
import RightNavBar from "./right-navigation/RightNavBar";
import { MenuProvider } from "./menu/MenuProvider";
import UserSearchContext from "../../../providers/UserSearchContext";

export default function NavBar() {
  const { handleKeySearchContext } = useContext(UserSearchContext)

  const handleChange = (userInput) => {
    handleKeySearchContext(userInput)
  }

  return (
    <MenuProvider>
      <AppBar position="sticky" color="primary" elevation={10}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavBar />

          <Input onChange={e => handleChange(e.target.value)} />

          <RightNavBar />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
}
*/