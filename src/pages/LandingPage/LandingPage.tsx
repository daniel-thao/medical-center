import React, {useEffect} from "react";

import { Nav } from "../../components/globalTemplates/Nav/Nav";
import { Main } from "../../components/globalTemplates/Main/Main";
import { Footer } from "../../components/globalTemplates/Footer/Footer";

import { Drawer, useMediaQuery } from "@mui/material";

import css from "./LandingPage.module.css";

export interface LandingPageProps {children?: React.ReactNode}

export const LandingPage: React.FC<LandingPageProps> = ({children}) => {
  const phoneWidth = useMediaQuery('(max-width:450px)')
  const tabletWidth = useMediaQuery('(max-width:1060px)')

  useEffect(() => {
    console.log(phoneWidth, "Phone Width");
  }, [])

  return (
    <div className={`global-font ${css["landing-container"]}`}>
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </div>
  );
};
