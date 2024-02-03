import React from 'react';

import { Nav } from '../../components/globalTemplates/Nav/Nav';
import { Footer } from '../../components/globalTemplates/Footer/Footer';

import css from './LandingPage.module.css';

export interface LandingPageProps {
  children?: React.ReactNode;
}

export const LandingPage: React.FC<LandingPageProps> = ({ children }) => {
  return (
    <div className={`global-font ${css['landing-container']}`}>
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </div>
  );
};
