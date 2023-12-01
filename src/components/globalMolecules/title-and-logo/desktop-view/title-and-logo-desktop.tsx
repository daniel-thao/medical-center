import React from "react";
import { useLocation } from "react-router-dom";

import { Box, Toolbar, Grid, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

// import css from "../../../globalTemplates/Nav/molecules/AthenaLinks.module.css";
import css from "./title-and-logo-desktop.module.css"

export interface TitleAndLogoDesktopViewLinksProps { }

export const TitleAndLogoDesktopView: React.FC<TitleAndLogoDesktopViewLinksProps> = () => {
    const location = useLocation();

    return (
        <Grid container className={`${css["athena-link-grid-container"]}`}>
            <Grid item xs={7} className={css["SPFMC-container"]}>
                <Box>
                    <Typography variant={"h1"} className={css["SPFMC-title"]}>
                        St. Paul Family Medical Center
                    </Typography>
                    {/* <Typography variant={"h1"} className={css["SPFMC-title"]}>
                        Medical Center
                    </Typography> */}
                </Box>
            </Grid>

            <Grid item xs={5} className={css["logo-container"]}>
                <img
                    className={`${css["logo"]}`}
                    src="./ClinicLogoDarker.png"
                    alt="Logo"
                ></img>
                <div></div>
            </Grid>
        </Grid>
    );
};
