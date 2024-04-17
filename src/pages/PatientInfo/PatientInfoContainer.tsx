import React from 'react';

import { MobileView } from './mobile-view/mobile-view';
import { TabletView } from './tablet-view/tablet-view';
import { DesktopView } from './desktop-view/desktop-view';

import { useMediaQuery } from '@mui/material';

import css from './PatientInfoContainer.module.css';

export interface PatientInfoContainerProps { }

export const PatientInfoContainer: React.FC<PatientInfoContainerProps> = (props) => {
  const phoneWidth = useMediaQuery('(max-width:450px)');
  const tabletWidth = useMediaQuery('(max-width:1060px)');

  const display = () => {
    if (phoneWidth) return <MobileView></MobileView>;
    if (tabletWidth && !phoneWidth) return <TabletView></TabletView>;
    return <DesktopView></DesktopView>;
  };


  return (
    <div className={`global-font ${css['overall-container']}`}>
      {display()}
      {/* {phoneWidth && <MobileView></MobileView>}
      {tabletWidth && <TabletView></TabletView>} */}
    </div>
  );
};
