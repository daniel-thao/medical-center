import React from "react";

import { Nav } from "../../components/globalTemplates/Nav/Nav";
import { Footer } from "../../components/globalTemplates/Footer/Footer";

import css from "./ProviderInfoContainer.module.css"

export interface ProviderInfoProps {}

export const ProviderInfoContainer: React.FC<ProviderInfoProps> = () => {
  return (
    <div className={`global-font ${css["landing-container"]}`}>
      <Nav></Nav>
      Provider
      <Footer></Footer>
    </div>
  );
};
