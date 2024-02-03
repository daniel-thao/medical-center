import React from 'react';
import { useLocation } from 'react-router-dom';

import { Box, Toolbar, Grid, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

import css from '../../globalTemplates/Nav/molecules/AthenaLinks.module.css';
import { TitleAndLogo } from '../title-and-logo/title-and-logo';
import { AthenaLinks } from '../athena-links/athena-links';

export interface GeneralPageHeaderProps {}

export const GeneralPageHeader: React.FC<GeneralPageHeaderProps> = () => {
  const location = useLocation();

  const phoneWidth = useMediaQuery('(max-width:450px)');
  const tabletWidth = useMediaQuery('(max-width:1060px)');

  return (
    <Toolbar className={css['athena-link-container']}>
      <Grid container className={`${css['athena-link-grid-container']}`}>
        {location.pathname === '/' ? <TitleAndLogo></TitleAndLogo> : <></>}
        <AthenaLinks></AthenaLinks>
      </Grid>
    </Toolbar>
  );
};
