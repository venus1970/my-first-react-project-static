import { Box, Button, Typography } from '@mui/material';
import useCounter from './hooks/useCounter';

export default function Counter1() {
  const {counter, increment, decrement} = useCounter(100);

  
  return (
    <Box style={{ border: '2px solid black', padding: '20px',
    marginTop: '30px', backgroundColor: 'lightgreen', borderRadius: '10px' }}>
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Typography style={{ fontSize: '40px', marginBottom: '30px', color: 'red', fontWeight: '700' }}>Counter1:</Typography> 
      <Button variant ="contained" onClick={increment} style={{ marginRight: '20px', padding: '15px 30px', fontSize: '32px', borderRadius: '15px', backgroundColor: 'yellow', border: 'none', cursor: 'pointer' }}>+</Button>
      <Button  variant = "contained" onClick={decrement} style={{ padding: '15px 34px', fontSize: '32px', borderRadius: '15px', backgroundColor: 'lightcoral', border: 'none', cursor: 'pointer' }}>-</Button>
      <div style={{ fontSize: '50px', marginTop: '30px' }}>{counter}</div> 
    </div>
    </Box>
  );
}
