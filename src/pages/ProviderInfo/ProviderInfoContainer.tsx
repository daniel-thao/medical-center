import React, { useState, useMemo } from 'react';

import { Footer } from '../../components/globalTemplates/Footer/Footer';

import { useMediaQuery } from '@mui/material';

import css from './ProviderInfoContainer.module.css';
import { ProviderInfoDesktopView } from './desktop-view/desktop-view';
import { ProviderInfoTabletView } from './tablet-view/tablet-view';

export interface ProviderInfoProps { }

export const ProviderInfoContainer: React.FC<ProviderInfoProps> = () => {
  const phoneWidth = useMediaQuery('(max-width:450px)');
  const tabletWidth = useMediaQuery('(max-width:1060px)');

  const imageCSSRender = useMemo(() => {
    if (phoneWidth && tabletWidth) {
      return css['image-general-format'];
    }

    if (tabletWidth) {
      return css['image-general-format'];
    }

    return css['desktop-image-format'];
  }, [phoneWidth, tabletWidth]);

  console.log(imageCSSRender);
  console.log(phoneWidth);
  console.log(tabletWidth);

  const display = () => {
    // if (phoneWidth) return <div>iopioiop</div>;
    // if (tabletWidth && !phoneWidth) return <div>dsjakdjasl</div>;
    return <ProviderInfoDesktopView imageCSSRender={imageCSSRender}></ProviderInfoDesktopView>;
  };

  return (
    <div className={`global-font ${css['landing-container']}`}>
      {/* <Nav></Nav> */}
      {display()}
    </div>
  );
};

export const providerList: string[] = ['Dr. Phua Xiong', 'May Mua', 'PaaHoua Vang'];
