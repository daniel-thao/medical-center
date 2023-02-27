import { Box, Grid, Typography } from "@mui/material";

import { IResourceCategoryRender, IMappedSingleResource, IResourceMultipleOpenAndCloseTimes } from "./interfacesTypes";
import { resourceData } from "./resourceData";

import { Cancel } from "@mui/icons-material";

import css from "../PatientInfoContainer.module.css";
import React, { SetStateAction } from "react";

export const renderRecommendedResources = (
  resourceRender: IResourceCategoryRender,
  whichMobile: string,
  cancelResetButton: React.Dispatch<SetStateAction<IResourceCategoryRender>>
  
): JSX.Element => {
  if (resourceRender.resourceCategory === "None") {
    return <></>;
  }

  const title = resourceRender.resourceCategory.replaceAll("-", " ");
  const allResources: IMappedSingleResource =
    resourceData[resourceRender.resourceIndex][resourceRender.resourceCategory];

  const parseData = (): JSX.Element => {
    const allResourcesArr: JSX.Element[] = [];

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

      const openTimeData: undefined | string | IResourceMultipleOpenAndCloseTimes = value.openTime;
      const openTimeDataArr: JSX.Element[] = [];

      if (typeof openTimeData === "object") {
        for (const [openTimeKey, openTimeValue] of Object.entries(openTimeData)) {
          const beforeNoon = 12 % parseInt(openTimeValue);

          openTimeDataArr.push(
            <Typography key={`${value.clinicName}-open-time-${value.zipcode}-${openTimeKey}`}>
              {`${openTimeKey}: ${beforeNoon <= 11 ? parseInt(openTimeValue) : parseInt(openTimeValue) - 12}${
                beforeNoon <= 11 ? "am" : "pm"
              }`}
            </Typography>
          );
        }
      }

      const closeTimeData: undefined | string | IResourceMultipleOpenAndCloseTimes = value.closeTime;
      const closeTimeDataArr: JSX.Element[] = [];

      if (typeof closeTimeData === "object") {
        for (const [closeTimeKey, closeTimeValue] of Object.entries(closeTimeData)) {
          const beforeNoonClose = 12 % parseInt(closeTimeValue);

          closeTimeDataArr.push(
            <Typography key={`${value.clinicName}-close-time-${value.zipcode}-${closeTimeKey}`}>
              {`${closeTimeKey}: ${beforeNoonClose <= 11 ? parseInt(closeTimeValue) : parseInt(closeTimeValue) - 12}${
                beforeNoonClose <= 11 ? "am" : "pm"
              }`}
            </Typography>
          );
        }
      }

      const test = (
        <Box sx={{ margin: { xs: ".5em .5em" } }}>
          <Typography>Name: {value.clinicName}</Typography>
          <Typography>
            Address: {value.street} {value.city} {value.state} {value.zipcode}
          </Typography>
          <Box>
            <Typography>Phone: {phoneNumArr.length > 0 ? "" : value.phone}</Typography>
            {phoneNumArr.map((element) => {
              return element;
            })}
          </Box>
          <Box>
            {typeof openTimeData === "string" ? (
              <Typography>
                Open Times:{" "}
                {12 % parseInt(openTimeData) <= 11 ? `${parseInt(openTimeData)}am` : `${parseInt(openTimeData) - 12}pm`}
              </Typography>
            ) : (
              <Typography>{typeof closeTimeData === "undefined" ? "" : "Open Times: "}</Typography>
            )}
            {openTimeDataArr.map((element) => {
              return element;
            })}
          </Box>
          <Box>
            {typeof closeTimeData === "string" ? (
              <Typography>
                Close Times:{" "}
                {12 % parseInt(closeTimeData) <= 11
                  ? `${parseInt(closeTimeData)}am`
                  : `${parseInt(closeTimeData) - 12}pm`}
              </Typography>
            ) : (
              <Typography>{typeof closeTimeData === "undefined" ? "" : "Close Times: "}</Typography>
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
          <Grid
            key={`${allResources[index].clinicName}-${allResources[index].zipcode}`}
            className={css[`resource-info-container-${whichMobile}`]}
            item
            xs={12}
            sm={6}
          >
            {element}
          </Grid>
        ))}
      </>
    );
  };

  return (
    <Box className={css[`resource-category-container-${whichMobile}`]}>
      <Box className={css[`resource-category-title-${whichMobile}`]}>
        {title}{" "}
        <Cancel
          onClick={() =>
            cancelResetButton({
              resourceCategory: "None",
              resourceIndex: 0,
            })
          }
        />
      </Box>
      <Grid container>{parseData()}</Grid>
    </Box>
  );
};
