import React from 'react';
import { useLocation } from 'react-router-dom';

import { Box, Toolbar, Grid, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

import css from './athena-links-desktop-view.module.css';

export interface AthenaLinksDesktopViewProps {}

export const AthenaLinksDesktopView: React.FC<AthenaLinksDesktopViewProps> = () => {
  const location = useLocation();

  const phoneWidth = useMediaQuery('(max-width:450px)');
  const tabletWidth = useMediaQuery('(max-width:1060px)');

  return (
    <Grid
      container
      className={`${css['athena-link-grid-container']}`}>
      <Grid xs={4}></Grid>
      <Grid
        item
        className={css['athena-link-grid-item']}
        sx={{ mr: '10px' }}>
        <Link
          to="https://12803.portal.athenahealth.com/"
          target="_blank"
          className={css['athena-link']}>
          <Box className={css['athena-item']}>
            <img
              className={css['athena-logo']}
              src="./athenaHealthLogo.png"
            />{' '}
            <span>Patient Portal Login</span>
          </Box>
        </Link>
      </Grid>

      <Grid
        item
        className={css['athena-link-grid-item']}
        sx={{ ml: '10px' }}>
        <Link
          to="https://payment.patient.athenahealth.com/statement/?src=statement"
          target="_blank"
          className={css['athena-link']}>
          <Box className={css['athena-item']}>
            <img
              className={css['athena-logo']}
              src="./athenaHealthLogo.png"
            />{' '}
            <span>Pay</span>
          </Box>
        </Link>
      </Grid>
      <Grid xs={4}></Grid>
    </Grid>
  );
};
