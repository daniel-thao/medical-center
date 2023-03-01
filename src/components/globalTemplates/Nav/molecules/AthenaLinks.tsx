import React from "react";

import { AppBar, Box, Toolbar, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import css from "./AthenaLinks.module.css";

export interface AthenaLinksProps {}

export const AthenaLinks: React.FC<AthenaLinksProps> = () => {
  return (
    <Toolbar className={css["athena-link-container"]}>
      <Grid container className={css["athena-link-grid-container"]}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} className={css['athena-link-grid-item']}>
          <Link
            to="https://athenanet.athenahealth.com/1/47/login.esp"
            target="_blank"
            className={css["athena-link"]}
          >
            <Box className={css["athena-item"]}>
              <img
                className={css["athena-logo"]}
                src="./athenaHealthLogo.png"
              />{" "}
              <span>Login</span>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={3}></Grid>

        <Grid item xs={3}></Grid>
        <Grid item xs={6} className={css['athena-link-grid-item']}>
          <Link
            to="https://payment.patient.athenahealth.com/statement/?src=statement"
            target="_blank"
            className={css["athena-link"]}
          >
            <Box className={css["athena-item"]}>
              <img
                className={css["athena-logo"]}
                src="./athenaHealthLogo.png"
              />{" "}
              <span>Pay</span>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Toolbar>
  );
};
