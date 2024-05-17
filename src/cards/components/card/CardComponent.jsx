import React from "react";
import { Card, CardActionArea, useTheme } from "@mui/material";

import CardHeaderComponent from "./CardHeaderComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function CardComponent({
  card,
  handleCardLike,
  handleCardDelete,
}) {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Card sx={{
      width: 250,
      m: 2,
      borderRadius: 8, // Custom border radius
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Custom box shadow
      transition: "transform 0.3s ease-in-out", // Custom transition
      border: `3px solid ${theme.palette.mode === "dark" ? "#ffffff" : "#0000ff"}`, // Border color based on theme mode
      "&:hover": { // Custom hover effect
        transform: "scale(1.05)",
        boxShadow: theme.palette.mode === "dark" 
          ? "0 16px 16px rgba(173, 216, 230, 0.8)" // Light blue ionize CSS style of shadow in dark mode
          : "0 16px 16px rgba(173, 216, 230, 0.5)", // Light blue ionize CSS style of shadow in light mode
      }
    }}>
      <CardActionArea
        onClick={() => navigate(ROUTES.CARD_INFO + "/" + card._id)}
      >
        <CardHeaderComponent image={card.image} />
        <CardBody
          title={card.title}
          subtitle={card.subtitle}
          phone={card.phone}
          address={card.address}
          cardNumber={card.bizNumber}
        />
      </CardActionArea>
      <CardActionBar
        handleCardLike={handleCardLike}
        handleCardDelete={handleCardDelete}
        cardId={card._id}
        userId={card.user_id}
      />
    </Card>
  );
}
