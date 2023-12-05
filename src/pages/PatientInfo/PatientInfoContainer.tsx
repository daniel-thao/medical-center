import React from "react";
import json2mq from "json2mq"

import { MobileView } from "./mobile-view/mobile-view";
import { TabletView } from "./tablet-view/tablet-view";

import {
  useMediaQuery,
} from "@mui/material";

import css from "./PatientInfoContainer.module.css";


export interface PatientInfoContainerProps { }

export const PatientInfoContainer: React.FC<PatientInfoContainerProps> = (
  props
) => {
  const phoneWidth = useMediaQuery(json2mq({
    minWidth: 0,
    maxWidth: 450
  }));

  const tabletWidth = useMediaQuery(json2mq({
    minWidth: 451,
    maxWidth: 1060
  }))

  console.log(phoneWidth, "Phone Width Patient Info")
  console.log(tabletWidth, "Tablet Width Patient Info")


  return (
    <div className={`global-font ${css["overall-container"]}`}>

      {phoneWidth && <MobileView></MobileView>}
      {tabletWidth && <TabletView></TabletView>}


    </div>
  );
};
