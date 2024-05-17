import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function MyBox() {
  const [size, setSize] = useState(10);
  const [boxColor, setBoxColor] = useState('red');

  const increaseSize = () => {
    setSize(prevSize => Math.min(prevSize + 10, 150));
  };

  const decreaseSize = () => {
    setSize(prevSize => Math.max(prevSize - 10, 10));
  };

  const changeBoxColor = () => {
    setBoxColor(prevColor => (prevColor === 'red' ? 'blue' : 'red'));
  };

  return (
    <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" border={1} p={2} borderRadius={10} backgroundColor = 'lightgreen' marginTop={10} height={400}>
      <Typography variant="h4" style={{ color: 'red', marginTop: '60px', fontWeight: '500' }}>MyBox</Typography>
      <Box mt={2} display="flex">
        <Button onClick={increaseSize} sx={{ backgroundColor: 'green', color: 'white', width: '120px', height: '40px', borderRadius: '20px', marginRight: '10px', '&:hover': { backgroundColor: '#4caf50' } }}>Increase Size</Button>
        <Button onClick={decreaseSize} sx={{ backgroundColor: 'green', color: 'white', width: '130px', height: '40px', borderRadius: '20px', marginRight: '10px', '&:hover': { backgroundColor: '#4caf50' } }}>Decrease Size</Button>
        <Button onClick={changeBoxColor} variant="contained" sx={{ backgroundColor: 'green', color: 'white', width: '145px', height: '40px', borderRadius: '20px', '&:hover': { backgroundColor: '#4caf50' } }}>Change Color</Button>
      </Box>
      <Box sx={{ backgroundColor: boxColor, width: `${size}px`, height: `${size}px`, marginTop: '40px' }} />
    </Box>
  );
}


