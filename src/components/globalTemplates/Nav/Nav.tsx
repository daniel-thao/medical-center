import React from "react";
import { Box, Toolbar } from "@mui/material";

import { NavBase } from "./organisms/NavBase";

import css from "./Nav.module.css";

export interface NavProps {}

export const Nav: React.FC<NavProps> = (props) => {
  return (
    <Box className={css.navContainer}>
      <NavBase></NavBase>
      {/* This is here to add teh correct spacing to all the children components underneath the Nav */}
    <Toolbar/>
    </Box>
  );
};
