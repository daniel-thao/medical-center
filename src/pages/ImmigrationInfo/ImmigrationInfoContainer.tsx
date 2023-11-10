import React from "react";

import { Nav } from "../../components/globalTemplates/Nav/Nav";
import { Footer } from "../../components/globalTemplates/Footer/Footer";

import css from "./ImmigrationInfoContainer.module.css"

export interface ImmigrationInfoProps {}

export const ImmigrationInfoContainer: React.FC<ImmigrationInfoProps> = () => {
  return (
    <div className={`global-font ${css["landing-container"]}`}>
      {/* <Nav></Nav> */}
      IMMIGRATIONS
      <Footer></Footer>
    </div>
  );
};
