import React from 'react';
import useWindowSize from './hooks/useWindowSize';
import { Box } from '@mui/material';

export default function Window() {
  // Use the useWindowSize hook to get the window's dimensions
  const { width, height } = useWindowSize();
  
  // Log the width and height values to the console
  console.log('Window width:', width, 'Window height:', height);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column layout on extra small screens, row layout on medium screens and above
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '40px',
        backgroundColor: 'lightgreen', // Background color
        padding: '20px', // Padding
        borderRadius: '10px', // Border radius
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)', // Box shadow
      }}
    >
      <div
        sx={{
          flex: { xs: 'none', md: 1 }, // Take up full width on extra small screens, take up half width on medium screens and above
          marginRight: { xs: 0, md: '20px' }, // No margin on extra small screens, 20px margin on medium screens and above (to separate from the image)
          marginBottom: { xs: '20px', md: 0 }, // 20px margin bottom on extra small screens (to separate from the image), no margin bottom on medium screens and above
          textAlign: { xs: 'center', md: 'left' }, // Center text on extra small screens, left-align on medium screens and above
        }}
      >
        <h2 style={{ fontWeight: '700', color: 'red', fontSize: '30px' }}>Window Size:</h2>
        <p style={{ fontWeight: '700', fontSize: '20px'}}>Width: {width}px</p>
        <p style={{ fontWeight: '700', fontSize: '20px' }}>Height: {height}px</p>
      </div>
      <img 
        src="/assets/images/screen.png" 
        alt="screen" 
        style={{ maxWidth: '100%', width: { xs: '80%', md: '40%' } }} // Set the image width to 80% on extra small screens, 40% on medium screens and above
      />
    </Box>
  );
}


