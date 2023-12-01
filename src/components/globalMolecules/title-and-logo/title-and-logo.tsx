import React from "react";
import { useLocation } from "react-router-dom";

import { useMediaQuery } from "@mui/material";

import { TitleAndLogoMobileView } from "./mobile-view/title-and-logo-mobile-view";
import { TitleAndLogoTabletView } from "./tablet-view/title-and-logo-tablet-view";
import { TitleAndLogoDesktopView } from "./desktop-view/title-and-logo-desktop";

export interface TitleAndLogoLinksProps { }

export const TitleAndLogo: React.FC<TitleAndLogoLinksProps> = () => {
    const phoneWidth = useMediaQuery('(max-width:450px)')
    const tabletWidth = useMediaQuery('(max-width:1060px)')


    const display = () => {
        if (phoneWidth) return <TitleAndLogoMobileView></TitleAndLogoMobileView>
        if (tabletWidth && !phoneWidth) return <TitleAndLogoTabletView></TitleAndLogoTabletView>
        return <TitleAndLogoDesktopView></TitleAndLogoDesktopView>
    }

    return (
        <>
            {display()}
        </>
    );
};
