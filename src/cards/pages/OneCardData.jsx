import React from 'react';
import { Typography, Avatar } from '@mui/material';

const OneCardData = ({ cardData }) => {
  const { street, city, state, country, zip } = cardData.address;

  return (
    <div>
      <Typography variant="h4" style={{ color: 'red', marginBottom: '10px' }}>Card Description:</Typography>
      <Avatar src={cardData.image.url} alt={cardData.image.alt} sx={{ width: 200, height: 200, border: 'solid blue 3px', borderRadius: '20px' }} />
      <p>Title: {cardData.title}</p>
      <p>Subtitle: {cardData.subtitle}</p>
      <p>Description: {cardData.description}</p>
      <p>Card Number: {cardData.bizNumber}</p>
      <p>Card ID: {cardData._id}</p>
      <p>Phone: {cardData.phone}</p>
      <p>Email: {cardData.email}</p>
      <p>Website: {cardData.web}</p>
      <p>Address:</p>
      <ul>
        <li>Street: {street}</li>
        <li>City: {city}</li>
        <li>State: {state}</li>
        <li>Country: {country}</li>
        <li>Zip: {zip}</li>
      </ul>
      {/* Add more details as needed */}
    </div>
  );
};

export default OneCardData;
