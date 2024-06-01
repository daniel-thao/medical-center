import React from 'react';
import { Box, Grid } from '@mui/material';

import css from './Footer.module.css';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <Box className={`${css['container']}`}>
      <Box>© St. Paul Family Medical Center</Box>
      <Box>
        This site is presented for information only and is not intended to substitute for professional medical advice.
        St. Paul Family Medical Center® and the St. Paul Family Medical Center logo are registered trademarks of St.
        Paul Family Medical Center System. Presentation and Design © St. Paul Family Medical Center. ALL RIGHTS
        RESERVED
      </Box>
    </Box>
  );
};
