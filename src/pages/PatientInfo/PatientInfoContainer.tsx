import React, { useState, useEffect } from "react";

import { Nav } from "../../components/globalTemplates/Nav/Nav";
import {
  Box,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import {IResourceCategoryRender} from "./utils/interfacesTypes"
import { resourceData } from "./utils/resourceData";
import { renderRecommendedResources } from "./utils/functionsUtil";

import css from "./PatientInfoContainer.module.css";

export interface PatientInfoContainerProps {}

export const PatientInfoContainer: React.FC<PatientInfoContainerProps> = (
  props
) => {
  const [isResourceListOpen, setIsResourceListOpen] = useState<boolean>(false);
  const [whichResourceToShow, setWhichResourceToShow] = useState<IResourceCategoryRender>({ resourceCategory: "", resourceIndex: 0 });

  const handleResourceList = (
    resourceListCategory?: string,
    resourceListIndex?: number
  ): void => {
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
        <Accordion
          className={css["recommended-resources-container"]}
          expanded={isResourceListOpen}
          onClick={() => handleResourceList()}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Recommended Resource List
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

        {renderRecommendedResources(whichResourceToShow)}
      </Box>
    </div>
  );
};