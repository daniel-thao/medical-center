import React, { useState, useEffect } from "react";

import { Nav } from "../../components/globalTemplates/Nav/Nav";
import { Box, Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import { IResourceCategoryRender } from "./utils/interfacesTypes";
import { resourceData } from "./utils/resourceData";
import { renderRecommendedResources } from "./utils/functionsUtil";

import css from "./PatientInfoContainer.module.css";

export interface PatientInfoContainerProps {}

export const PatientInfoContainer: React.FC<PatientInfoContainerProps> = (props) => {
  const [isResourceListOpen, setIsResourceListOpen] = useState<boolean>(false);
  const [whichResourceToShow, setWhichResourceToShow] = useState<IResourceCategoryRender>({
    resourceCategory: "None",
    resourceIndex: 0,
  });

  const handleResourceList = (resourceListCategory?: string, resourceListIndex?: number): void => {
    if (resourceListCategory && resourceListIndex !== undefined) {
      return setWhichResourceToShow({
        resourceCategory: resourceListCategory,
        resourceIndex: resourceListIndex,
      });
    }

    if (isResourceListOpen) setIsResourceListOpen(false);
    else setIsResourceListOpen(true);
  };

  return (
    <div className={"global-font"}>
      <Nav></Nav>
      <Box id="main-container" className={css["patient-info-container"]}>
        <Box id="mobile-tablet-recommended-resources-container" sx={{ display: { xs: "block", md: "none" } }}>
          <Accordion
            className={css["recommended-resources-container-mobile-tablet"]}
            expanded={isResourceListOpen}
            onClick={() => handleResourceList()}
          >
            <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
              Recommended Resource List
            </AccordionSummary>
            <AccordionDetails className={css["resource-list-mobile-tablet"]}>
              <Grid container>
                {resourceData.map((resource, index) => {
                  const objKey = Object.keys(resource)[0];
                  const resourceCategory = objKey.replaceAll("-", " ");

                  // console.log(objKey, resourceCategory, index)

                  return (
                    <Grid
                      className={css["list-item-mobile-tablet"]}
                      item
                      key={`${resource}-${index}`}
                      onClick={(e) => handleResourceList(objKey, index)}
                      xs={6}
                    >
                      {resourceCategory}
                    </Grid>
                  );
                })}
              </Grid>
            </AccordionDetails>
          </Accordion>

          {whichResourceToShow.resourceCategory === "None" && (
            <Box className={css["resource-category-container-mobile-tablet"]}>
              <Box className={css["resource-category-title-mobile-tablet"]}>Resources</Box>
              <Typography>
                Choose from multiple recommended clinics and practices that have a great response and turn around time.
              </Typography>
              <br></br>
              <Typography>
                Before choosing to go to one of our recommended resources, make sure that they are in-network with your
                insurance and if they will accept your insurance.
              </Typography>
            </Box>
          )}
          {renderRecommendedResources(whichResourceToShow, "mobile-tablet", setWhichResourceToShow)}
        </Box>

        <Grid
          container
          id="laptop-monitor-recommended-resources-container"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Grid container item className={css["list-laptop-monitor"]} md={4} lg={3} xl={2}>
            {resourceData.map((resource, index) => {
              const objKey = Object.keys(resource)[0];
              const resourceCategory = objKey.replaceAll("-", " ");

              if(resourceCategory === "None") {
                return (
                  <Grid
                  className={css["list-item-title-laptop-monitor"]}
                  item
                  key={`${resource}-${index}`}
                  onClick={(e) => handleResourceList(objKey, index)}
                  md={12}
                >
                  Recommended Resources
                </Grid>
                )
              }

              // console.log(objKey, resourceCategory, index)

              return (
                <Grid
                  className={css["list-item-laptop-monitor"]}
                  item
                  key={`${resource}-${index}`}
                  onClick={(e) => handleResourceList(objKey, index)}
                  md={12}
                >
                  {resourceCategory}
                </Grid>
              );
            })}
          </Grid>
          <Grid item md={8} lg={9} xl={10}>
            {whichResourceToShow.resourceCategory === "None" && (
              <Box className={css["resource-category-container-laptop-monitor"]}>
                <Box className={css["resource-category-title-laptop-monitor"]}>Resources</Box>
                <Typography>
                  Choose from multiple recommended clinics and practices that have a great response and turn around
                  time.
                </Typography>
                <br></br>
                <Typography>
                  Before choosing to go to one of our recommended resources, make sure that they are in-network with
                  your insurance and if they will accept your insurance.
                </Typography>
              </Box>
            )}
            {renderRecommendedResources(whichResourceToShow, "laptop-monitor", setWhichResourceToShow)}
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={6} xl={3}>
            <Accordion
              className={css["recommended-resources-container"]}
              expanded={isResourceListOpen}
              onClick={() => handleResourceList()}
            >
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                A - F Common Information Database
              </AccordionSummary>
              <AccordionDetails className={css["resource-list"]}>
                <Grid container>
                  {resourceData.map((resource, index) => {
                    const objKey = Object.keys(resource)[0];
                    const resouceCategory = objKey.replaceAll("-", " ");

                    // console.log(objKey, resouceCategory, index)

                    return (
                      <Grid
                        className={css["list-item"]}
                        item
                        key={`${resource}-${index}`}
                        onClick={(e) => handleResourceList(objKey, index)}
                        xs={6}
                      >
                        {resouceCategory}
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Accordion
              className={css["recommended-resources-container"]}
              expanded={isResourceListOpen}
              onClick={() => handleResourceList()}
            >
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                G - L Common Information Database
              </AccordionSummary>
              <AccordionDetails className={css["resource-list"]}>
                <Grid container>
                  {resourceData.map((resource, index) => {
                    const objKey = Object.keys(resource)[0];
                    const resouceCategory = objKey.replaceAll("-", " ");

                    // console.log(objKey, resouceCategory, index)

                    return (
                      <Grid
                        className={css["list-item"]}
                        item
                        key={`${resource}-${index}`}
                        onClick={(e) => handleResourceList(objKey, index)}
                        xs={6}
                      >
                        {resouceCategory}
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Accordion
              className={css["recommended-resources-container"]}
              expanded={isResourceListOpen}
              onClick={() => handleResourceList()}
            >
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                M - R Common Information Database
              </AccordionSummary>
              <AccordionDetails className={css["resource-list"]}>
                <Grid container>
                  {resourceData.map((resource, index) => {
                    const objKey = Object.keys(resource)[0];
                    const resouceCategory = objKey.replaceAll("-", " ");

                    // console.log(objKey, resouceCategory, index)

                    return (
                      <Grid
                        className={css["list-item"]}
                        item
                        key={`${resource}-${index}`}
                        onClick={(e) => handleResourceList(objKey, index)}
                        xs={6}
                      >
                        {resouceCategory}
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Accordion
              className={css["recommended-resources-container"]}
              expanded={isResourceListOpen}
              onClick={() => handleResourceList()}
            >
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                S - Z Common Information Database
              </AccordionSummary>
              <AccordionDetails className={css["resource-list"]}>
                <Grid container>
                  {resourceData.map((resource, index) => {
                    const objKey = Object.keys(resource)[0];
                    const resouceCategory = objKey.replaceAll("-", " ");

                    // console.log(objKey, resouceCategory, index)

                    return (
                      <Grid
                        className={css["list-item"]}
                        item
                        key={`${resource}-${index}`}
                        onClick={(e) => handleResourceList(objKey, index)}
                        xs={6}
                      >
                        {resouceCategory}
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
