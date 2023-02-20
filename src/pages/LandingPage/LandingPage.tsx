import React from "react";

import { Nav } from "../../components/globalTemplates/Nav/Nav";
import { Main } from "../../components/globalTemplates/Main/Main";
import { Footer } from "../../components/globalTemplates/Footer/Footer";
import styles from "./LandingPage.module.css";

export interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = (props) => {
  return (
    <div className={"global-font"}>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};
