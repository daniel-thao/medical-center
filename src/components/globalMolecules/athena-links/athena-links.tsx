import React from 'react';
import { useLocation } from 'react-router-dom';

import { useMediaQuery } from '@mui/material';

import { AthenaLinksMobileView } from './mobile-view/athena-links-mobile-view';
import { AthenaLinksDesktopView } from './desktop-view/athena-links-desktop-view';

export interface AthenaLinksProps {}

export const AthenaLinks: React.FC<AthenaLinksProps> = () => {
  const location = useLocation();

  const phoneWidth = useMediaQuery('(max-width:450px)');
  const tabletWidth = useMediaQuery('(max-width:1060px)');

  const display = () => {
    if (phoneWidth) return <AthenaLinksMobileView></AthenaLinksMobileView>;
    return <AthenaLinksDesktopView></AthenaLinksDesktopView>;
  };

  return <>{display()}</>;
};
