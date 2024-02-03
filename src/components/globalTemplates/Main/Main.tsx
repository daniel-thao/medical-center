import React from 'react';

import { useMediaQuery } from '@mui/material';

import { MainMobileView } from './mobile-view/main-mobile-view';
import { MainTabletView } from './tablet-view/main-tablet-view';
import { MainDesktopView } from './desktop-view/main-desktop-view';

export interface MainProps {}

export interface IPhotoHyperlink {
  alt: string;
  src: string;
  displayText: string;
  extra?: string;
  link: string;
}

export interface IPhotoAndInfo {
  alt: string;
  src: string;
}

export const Main: React.FC<MainProps> = (props) => {
  const phoneWidth = useMediaQuery('(max-width:450px)');
  const tabletWidth = useMediaQuery('(max-width:1060px)');

  const photoHyperLinks: IPhotoHyperlink[] = [
    {
      alt: 'patient-information',
      src: 'https://images.unsplash.com/photo-1579154341140-5aa3a445d43b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80',
      displayText: 'Patient Information',
      link: '/patient-info'
    },
    {
      alt: 'provider-information',
      src: 'https://plus.unsplash.com/premium_photo-1661746101294-0b53eaaacc61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      displayText: 'Providers',
      link: '/providers-info'
    },
    {
      alt: 'immigration-exam-information',
      src: 'https://images.unsplash.com/photo-1564041549956-3ad6fa9f5517?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      displayText: 'Immigration Exams',
      link: '/immigration-info'
    },
    {
      alt: 'services-information',
      src: 'https://plus.unsplash.com/premium_photo-1661670876065-f4479fb8e3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      displayText: 'Services',
      link: '/services'
    }
  ];

  const photoAndInfos: IPhotoAndInfo[] = [
    {
      alt: 'clinic-interior-01',
      src: './_MG_6327.png'
    },
    {
      alt: 'clinic-person-01',
      src: './_MG_6111.png'
    }
  ];

  const display = () => {
    if (phoneWidth) return <MainMobileView photoHyperLinks={photoHyperLinks} photoAndInfos={photoAndInfos}></MainMobileView>;
    if (tabletWidth && !phoneWidth) return <MainTabletView photoHyperLinks={photoHyperLinks} photoAndInfos={photoAndInfos}></MainTabletView>;
    return <MainDesktopView photoHyperLinks={photoHyperLinks} photoAndInfos={photoAndInfos}></MainDesktopView>;
  };

  return <>{display()}</>;
};
