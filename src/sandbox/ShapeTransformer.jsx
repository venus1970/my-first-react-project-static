import React, { useState } from 'react';
import './ShapeTransformer.css'; 
import { Typography } from '@mui/material';

const ShapeTransformer = () => {
  const [shape, setShape] = useState('square');

  const changeShape = (newShape) => {
    setShape(newShape);
  };

  return (
    <div className="shape-container">
      <Typography variant="h4" gutterBottom>Shape Transformer:</Typography> 
      <div className="button-container" style={{ marginTop: '40px',marginBottom: '40px' }}>
        <button onClick={() => changeShape('square')}>Square</button>
        <button onClick={() => changeShape('circle')}>Circle</button>
        <button onClick={() => changeShape('ellipse')}>Ellipse</button>
        <button onClick={() => changeShape('triangle')}>Triangle</button>
        <button onClick={() => changeShape('rhombus')}>Rhombus</button>
        <button onClick={() => changeShape('rectangle')}>Rectangle</button>
      </div>
      <div className={`shape ${shape}`} ></div>
    </div>
  );
};

export default ShapeTransformer;
