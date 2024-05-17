import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import useCards from "../hooks/useCards";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

export default function CardDetailsPage() {
  const { id } = useParams();
  const { card, error, isLoading, getCardById } = useCards();

  useEffect(() => {
    getCardById(id);
  }, [id, getCardById]);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  return (
    <Container>
      <PageHeader
        title="Card details"
        subtitle="Here you can find all the details about specific card"
      />
      <Typography>details of card {id}</Typography>
      <Typography>details of card {card.title}</Typography>
    </Container>
  );
}