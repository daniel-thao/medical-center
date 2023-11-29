import React from "react";

import { Box, Grid, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

import css from "./athena-links-tablet-view.module.css"

export interface AthenaLinksTabletViewProps { }

export const AthenaLinksTabletView: React.FC<AthenaLinksTabletViewProps> = () => {
    const breakPointOne = useMediaQuery('(max-width:768px)')
    const breakPointTwo = useMediaQuery('(max-width:900px)')
    const breakPointThree = useMediaQuery('(max-width:1060px)')

    const breakPointChooser = (): number => {
        if (breakPointOne) return 4
        if (breakPointTwo) return 3
        if (breakPointThree) return 3
        return 5
    }

    return (
        <Grid container className={`${css["athena-link-grid-container"]}`}>

            <Grid xs={1}></Grid>

            <Grid item xs={breakPointChooser()} className={css["athena-link-grid-item"]}>
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

            <Grid item xs={breakPointChooser()} className={css["athena-link-grid-item"]}>
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

            <Grid xs={1}></Grid>
        </Grid>
    );
};
