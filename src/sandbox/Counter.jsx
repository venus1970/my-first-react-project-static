import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import useCounter from './hooks/useCounter'; // Import useCounter hook

export default function Counter() {
  const { counter, increment, decrement, reset } = useCounter(20,5);

  return (
    <Box
      style={{
        border: '2px solid black',
        padding: '20px',
        marginTop: '30px',
        backgroundColor: 'lightblue',
        borderRadius: '10px',
      }}
    >
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Typography style={{ fontSize: '40px', marginBottom: '30px', color: 'red', fontWeight: '700' }}>Counter:</Typography>
        <Button
          variant="contained"
          onClick={increment}
          style={{
            marginRight: '20px',
            padding: '15px 30px',
            fontSize: '32px',
            borderRadius: '15px',
            backgroundColor: 'yellow',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          +
        </Button>
        <Button
          variant="contained"
          onClick={decrement}
          style={{
            padding: '15px 34px',
            fontSize: '32px',
            borderRadius: '15px',
            backgroundColor: 'lightcoral',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          -
        </Button>
        <Button
          variant="contained"
          onClick={reset}
          style={{
            marginLeft: '20px',
            padding: '15px 30px',
            fontSize: '32px',
            borderRadius: '15px',
            backgroundColor: 'lightgreen',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          reset
        </Button>
        <div style={{ fontSize: '50px', marginTop: '30px' }}>{counter}</div>
      </div>
    </Box>
  );
}
