import React from 'react';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import NavItem from '../routes/components/NavItem';
import { Outlet } from 'react-router-dom';

export default function SandBox() {
  return (
    <Box sx={{ minHeight: '90vh' }}>
      <AppBar position='sticky'  color="transparent" style={{ backgroundColor: 'azure' }}> {/* Fixed the closing curly brace here */}
        <Toolbar>
          <NavItem to="counter" label={<span style={{ color: 'red', fontWeight: '600' }}>Counter</span>} />
          <NavItem to="counter1" label={<span style={{ color: 'black', fontWeight: '600' }}>Counter1</span>} />
          <NavItem to="changesize" label={<span style={{ color: 'blue', fontWeight: '600' }}>Change size</span>} />
          <NavItem to="shapetransformer" label={<span style={{ color: 'green', fontWeight: '600' }}>Shape transformer</span>} />
          <NavItem to="lifecycle" label={<span style={{ color: 'black', fontWeight: '600' }}>Life Cycle</span>} />
          <NavItem to="countries" label={<span style={{ color: 'orange', fontWeight: '600' }}>Countries list</span>} />
          <NavItem to="spinner" label={<span style={{ color: 'blue', fontWeight: '600' }}>Spinner</span>} />
          <NavItem to="error" label={<span style={{ color: 'brown', fontWeight: '600' }}>Error</span>} />
          <NavItem to="window" label={<span style={{ color: 'blue', fontWeight: '600' }}>Window</span>} />
          <NavItem to="formexample" label={<span style={{ color: 'violet', fontWeight: '600' }}>FormExample</span>} />
          <NavItem to="optimization" label={<span style={{ color: 'red', fontWeight: '600' }}>Optimization</span>} />
          <NavItem to="context" label={<span style={{ color: 'black', fontWeight: '600' }}>Context</span>} />
          </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
}
