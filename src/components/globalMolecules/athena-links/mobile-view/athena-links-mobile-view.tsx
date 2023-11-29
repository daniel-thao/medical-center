import React from "react";
import { useLocation } from "react-router-dom";

import { Box, Toolbar, Grid, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

import css from "./athena-links-mobile-view.module.css"

export interface AthenaLinksMobileViewProps { }

export const AthenaLinksMobileView: React.FC<AthenaLinksMobileViewProps> = () => {
    const location = useLocation();

    const phoneWidth = useMediaQuery('(max-width:450px)')
    const tabletWidth = useMediaQuery('(max-width:1060px)')

    return (
        <Grid container className={`${css["athena-link-grid-container"]}`}>

            <Grid item xs={3}></Grid>

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
        </Grid>
    );
};
