import React from "react";
import { useLocation } from "react-router-dom";

import { Box, Toolbar, Grid, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

// import css from "../../../globalTemplates/Nav/molecules/AthenaLinks.module.css";
import css from "./title-and-logo-tablet-view.module.css"

export interface TitleAndLogoTabletViewLinksProps { }

export const TitleAndLogoTabletView: React.FC<TitleAndLogoTabletViewLinksProps> = () => {
    const location = useLocation();

    return (
        <Grid container className={`${css["athena-link-grid-container"]} ${location.pathname === "/" && css['extra-padding']}`}>
            <Grid item xs={6} className={css["SPFMC-container"]}>
                <Box>
                    <Typography variant={"h1"} className={css["SPFMC-title"]}>
                        St. Paul Family
                    </Typography>
                    <Typography variant={"h1"} className={css["SPFMC-title"]}>
                        Medical Center
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={6} className={css["logo-container"]}>
                <img
                    className={`${css["logo"]}`}
                    src="./ClinicLogoDarker.png"
                    alt="Logo"
                ></img>
            </Grid>
        </Grid>
    );
};
