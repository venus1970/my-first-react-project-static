import React from "react";
import { Divider, Typography } from "@mui/material";
import { useTheme } from "../providers/CustomThemeProvider";
import "./CustomStyle.css"; // Import custom CSS file
import "./CustomStyles.css";

export default function PageHeader({ title, subtitle }) {
  const { isDark } = useTheme();
  const titleColor = isDark ? "#FFFFFF" : "#333333";
  const subtitleColor = isDark ? "#CCCCCC" : "#666666";
  const titleShadow = isDark
    ? "10px 10px 10px rgba(255, 255, 255, 255.5)" // White ionize shadow in dark mode
    : "0 0 10px rgba(0, 0, 255, 0.5)"; // Blue shadow in light mode

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <Typography
        variant="h2"
        component="h1"
        className="entrance-title" // Apply entrance animation for title
        style={{ color: titleColor, textShadow: titleShadow }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        className="entrance-subtitle" // Apply entrance animation for subtitle
        style={{ color: subtitleColor }}
      >
        {subtitle}
      </Typography>
      <p style={{ color: subtitleColor }}>Hello world</p>
      <Divider className="custom-divider" /> {/* Apply custom class */}
    </div>
  );
}

/*
import React from "react";
import { Divider, Typography } from "@mui/material";
import { useTheme } from "../providers/CustomThemeProvider";

export default function PageHeader({ title, subtitle }) {
  const { isDark } = useTheme();
  const elemStyle = isDark ? "white" : "black";

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <Typography variant="h2" component="h1" sx={{ color: elemStyle }}>
        {title}
      </Typography>
      <Typography variant="h5" component="h2" sx={{ color: elemStyle }}>
        {subtitle}
      </Typography>

      <p style={{ color: elemStyle }}>Hello world</p>

      <Divider sx={{ my: 2 }} />
    </div>
  );
}
*/
