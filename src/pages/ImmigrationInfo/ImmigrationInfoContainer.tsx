import React from 'react';

import { Nav } from '../../components/globalTemplates/Nav/Nav';
import { Footer } from '../../components/globalTemplates/Footer/Footer';

import css from './ImmigrationInfoContainer.module.css';

export interface ImmigrationInfoProps {}

export const ImmigrationInfoContainer: React.FC<ImmigrationInfoProps> = () => {
  return (
    <div className={`global-font ${css['landing-container']}`}>
      {/* <Nav></Nav> */}
      IMMIGRATIONS
      <a href="https://www.uscis.gov/i-693">USCIS</a>
      <Footer></Footer>
    </div>
  );
};
