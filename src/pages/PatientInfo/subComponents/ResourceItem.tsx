import React from "react";

import {
  IMappedSingleResource,
  IResourceMultipleOpenAndCloseTimes,
  IResourceCategoryRender,
  ISingleResource,
} from "../utils/interfacesTypes";
import { resourceData } from "../utils/resourceData";

import { Box, Typography, Grid, ListItem } from "@mui/material";

import css from "../PatientInfoContainer.module.css";

export interface ResourceItemProps {
  whichResourceToShow: IResourceCategoryRender;
}

export const ResourceItem: React.FC<ResourceItemProps> = (props) => {
  const { whichResourceToShow } = props;

  const allResourcesArr: JSX.Element[] = [];

  const allResources: IMappedSingleResource =
    resourceData[whichResourceToShow.resourceIndex][
      whichResourceToShow.resourceCategory
    ];

  for (const [key, value] of Object.entries(allResources)) {
    const hasManyPhoneNums = typeof value.phone === "object";
    const phoneNumArr: JSX.Element[] = [];

    if (value.clinicName === "") {
      continue;
    }

    if (hasManyPhoneNums) {
      for (const [phoneKey, phoneValue] of Object.entries(value.phone)) {
        phoneNumArr.push(
          <Typography
            key={`${value.clinicName}-phone-numbers-${phoneValue}-${value.zipcode}`}
          >{`${phoneKey}: ${phoneValue}`}</Typography>
        );
      }
    }

    const openTimeDataArr = openCloseTimeGenerator(value, value.openTime);
    const closeTimeDataArr = openCloseTimeGenerator(value, value.closeTime);

    const test = (
      <Box>
        <Typography>
          <span className={css["resource-info-prefix"]}>Name:</span>{" "}
          {value.clinicName}
        </Typography>
        <Typography>
          <span className={css["resource-info-prefix"]}>Address:</span>{" "}
          {value.street} {value.city} {value.state} {value.zipcode}
        </Typography>
        <Box>
          <Typography>
            <span className={css["resource-info-prefix"]}>Phone:</span>{" "}
            {phoneNumArr.length > 0 ? "" : value.phone}
          </Typography>
          {phoneNumArr.map((element) => {
            return element;
          })}
        </Box>
        <Box>
          {typeof value.openTime === "string" ? (
            <Typography>
              <span className={css["resource-info-prefix"]}>Open Times:</span>{" "}
              {12 % parseInt(value.openTime) <= 11
                ? `${parseInt(value.openTime)}am`
                : `${parseInt(value.openTime) - 12}pm`}
            </Typography>
          ) : (
            <Typography>
              <span className={css["resource-info-prefix"]}>
                {typeof value.closeTime === "undefined" ? "" : "Open Times: "}
              </span>
            </Typography>
          )}
          {openTimeDataArr.map((element) => {
            return element;
          })}
        </Box>
        <Box>
          {typeof value.closeTime === "string" ? (
            <Typography>
              <span className={css["resource-info-prefix"]}>Close Times:</span>{" "}
              {12 % parseInt(value.closeTime) <= 11
                ? `${parseInt(value.closeTime)}am`
                : `${parseInt(value.closeTime) - 12}pm`}
            </Typography>
          ) : (
            <Typography>
              <span className={css["resource-info-prefix"]}>
                {typeof value.closeTime === "undefined" ? "" : "Close Times: "}
              </span>
            </Typography>
          )}
          {closeTimeDataArr.map((element) => {
            return element;
          })}
        </Box>
      </Box>
    );
    allResourcesArr.push(test);
  }

  return (
    <>
      {allResourcesArr.map((element, index) => (
        <ListItem
          className={css[`resource-info-container-mobile-tablet`]}
          key={`${allResources[index].clinicName}-${allResources[index].zipcode}`}
          // sx={{ margin: { xs: ".5em .5em" } }}
        >
          {element}
        </ListItem>
      ))}
    </>
  );
};

export const openCloseTimeGenerator = (
  originalData: ISingleResource,
  whichTime: undefined | string | IResourceMultipleOpenAndCloseTimes
): JSX.Element[] => {
  const timeDataArr: JSX.Element[] = [];

  if (typeof whichTime === "object") {
    for (const [timeKey, timeValue] of Object.entries(whichTime)) {
      const beforeNoonClose = 12 % parseInt(timeValue);

      timeDataArr.push(
        <Typography
          key={`${originalData.clinicName}-close-time-${originalData.zipcode}-${timeKey}`}
        >
          {`${timeKey}: ${
            beforeNoonClose <= 11
              ? parseInt(timeValue)
              : parseInt(timeValue) - 12
          }${beforeNoonClose <= 11 ? "am" : "pm"}`}
        </Typography>
      );
    }
  }
  return timeDataArr;
};
