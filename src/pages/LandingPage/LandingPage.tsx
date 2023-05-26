import React, {useEffect} from "react";

import { Nav } from "../../components/globalTemplates/Nav/Nav";
import { Main } from "../../components/globalTemplates/Main/Main";
import { Footer } from "../../components/globalTemplates/Footer/Footer";

import { Drawer, useMediaQuery } from "@mui/material";

import css from "./LandingPage.module.css";

export interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = (props) => {
  const phoneWidth = useMediaQuery('(max-width:450px)')
  const tabletWidth = useMediaQuery('(max-width:1060px)')

  useEffect(() => {
    console.log(phoneWidth);
  }, [])

  return (
    <div className={`global-font ${css["landing-container"]}`}>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};
