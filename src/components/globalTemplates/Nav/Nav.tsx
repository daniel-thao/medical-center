import React from 'react';
import { Box, Toolbar } from '@mui/material';

import { NavBase } from './organisms/NavBase';
import { AthenaLinks } from './molecules/AthenaLinks';

import css from './Nav.module.css';

export interface NavProps {
  children?: React.ReactNode;
}

export const Nav: React.FC<NavProps> = ({ children }) => {
  return (
    <Box className={css.navContainer}>
      <NavBase></NavBase>
      {/* This is here to add the correct spacing to all the children components underneath the Nav */}
      <Toolbar />
      {/* <AthenaLinks></AthenaLinks> */}
      {/* {children} */}
    </Box>
  );
};
