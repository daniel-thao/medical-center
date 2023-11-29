import React from "react";
import { useLocation } from "react-router-dom";

import { Box, Toolbar, Grid, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

import css from "./AthenaLinks.module.css";

export interface AthenaLinksProps { }

export const AthenaLinks: React.FC<AthenaLinksProps> = () => {
  const location = useLocation();

  const phoneWidth = useMediaQuery('(max-width:450px)')
  const tabletWidth = useMediaQuery('(max-width:1060px)')

  return (
    <Toolbar className={css["athena-link-container"]}>
      {/* <Grid container className={`${css["athena-link-grid-container"]} ${location.pathname === "/" && css['extra-padding']}`}> */}
      {/* {location.pathname === "/" ? (
          <>
            <Grid item xs={12} className={css["SPFMC-container"]}>
              <Box>
                <Typography variant={"h1"} className={css["SPFMC-title"]}>
                  St. Paul Family
                </Typography>
                <Typography variant={"h1"} className={css["SPFMC-title"]}>
                  Medical Center
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} className={css["logo-container"]}>
              <img
                className={`${css["logo"]}`}
                src="./ClinicLogoDarker.png"
                alt="Logo"
              ></img>
            </Grid>
          </>
        ) : (
          <></>
        )} */}

      {/* <Grid item xs={3}></Grid>

        <Grid item xs={6} className={css["athena-link-grid-item"]}>
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

        <Grid item xs={6} className={css["athena-link-grid-item"]}>
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
      </Grid> */}
    </Toolbar>
  );
};
