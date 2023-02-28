import React, { useState, useEffect, SetStateAction } from "react";

import { Nav } from "../../components/globalTemplates/Nav/Nav";
import { ResourceDataDrawer } from "./subComponents/ResourceDataDrawer";
import { TextBlock } from "../../components/globalMolecules/TextBlock/TextBlock";
import {
  Box,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import { IResourceCategoryRender } from "./utils/interfacesTypes";
import { resourceData } from "./utils/resourceData";
import { vaccineData } from "./utils/vaccineData";
import { renderRecommendedResources } from "./utils/functionsUtil";

import css from "./PatientInfoContainer.module.css";
import { Link } from "react-router-dom";

export interface PatientInfoContainerProps {}

export const PatientInfoContainer: React.FC<PatientInfoContainerProps> = (
  props
) => {
  const [isResourceListOpen, setIsResourceListOpen] = useState<boolean>(false);
  const [isResourceChosen, setIsResourceChosen] = useState<boolean>(false);
  const [vaccineInfoList, setVaccineInfoList] = useState<boolean>(false);

  const [whichResourceToShow, setWhichResourceToShow] =
    useState<IResourceCategoryRender>({
      resourceCategory: "Allergy-and-Asthma",
      resourceIndex: 0,
    });

  const handleResourceList = (
    resourceListCategory?: string,
    resourceListIndex?: number,
    didClickListItem?: boolean
  ): void => {
    if (resourceListCategory && resourceListIndex !== undefined) {
      setWhichResourceToShow({
        resourceCategory: resourceListCategory,
        resourceIndex: resourceListIndex,
      });
    }

    if (!isResourceListOpen) setIsResourceListOpen(true);
    else setIsResourceListOpen(false);

    setTimeout(() => {
      if (!isResourceChosen && didClickListItem) {
        setIsResourceChosen(true);
      } else if (isResourceChosen && didClickListItem) {
        setIsResourceChosen(false);
      }
    }, 375);
  };

  const handleVaccineList = (
    state: boolean,
    setChosenState: React.Dispatch<SetStateAction<boolean>>
  ) => {
    if (!state) {
      setChosenState(true);
    } else setChosenState(false);
  };

  return (
    <div className={"global-font"}>
      <Nav></Nav>
      <Box id="main-container" className={css["patient-info-container"]}>
        <Box
          id="mobile-tablet-recommended-resources-container"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <TextBlock
            body="Serving our patients with a compassionate heart and caring hands"
            classification="quote"
            className={css["quote-one"]}
          />
          <Accordion
            className={css["recommended-resources-container-mobile-tablet"]}
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

            <AccordionDetails className={css["resource-list-mobile-tablet"]}>
              <Grid container>
                {resourceData.map((resource, index) => {
                  const objKey = Object.keys(resource)[0];
                  const resourceCategory = objKey.replaceAll("-", " ");

                  return (
                    <Grid
                      className={css["list-item-mobile-tablet"]}
                      item
                      key={`${resource}-${index}`}
                      onClick={(e) => handleResourceList(objKey, index, true)}
                      xs={6}
                    >
                      {resourceCategory}
                    </Grid>
                  );
                })}
              </Grid>
            </AccordionDetails>
          </Accordion>

          <ResourceDataDrawer
            whichResourceToShow={whichResourceToShow}
            isResourceChosen={isResourceChosen}
            setIsResourceChosen={setIsResourceChosen}
          ></ResourceDataDrawer>

          {/* {whichResourceToShow.resourceCategory === "None" && (
            <Box className={css["resource-category-container-mobile-tablet"]}>
              <Box className={css["resource-category-title-mobile-tablet"]}>
                Resources
              </Box>
              <TextBlock
                body={`Choose from multiple recommended clinics and practices that have
                a great response and turn around time.`}
                classification="paragraph"
              />
              <br></br>
              <TextBlock
                body={`Before choosing to go to one of our recommended resources, make
                sure that they are in-network with your insurance and if they
                will accept your insurance.`}
                classification="paragraph"
              />
            </Box>
          )}
          {renderRecommendedResources(
            whichResourceToShow,
            "mobile-tablet",
            setWhichResourceToShow
          )} */}
        </Box>

        {/* <Grid
          container
          id="laptop-monitor-recommended-resources-container"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Grid
            container
            item
            className={css["list-laptop-monitor"]}
            md={4}
            lg={3}
            xl={2}
          >
            {resourceData.map((resource, index) => {
              const objKey = Object.keys(resource)[0];
              const resourceCategory = objKey.replaceAll("-", " ");

              if (resourceCategory === "None") {
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
                );
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
              <Box
                className={css["resource-category-container-laptop-monitor"]}
              >
                <Box className={css["resource-category-title-laptop-monitor"]}>
                  Resources
                </Box>
                <Typography>
                  Choose from multiple recommended clinics and practices that
                  have a great response and turn around time.
                </Typography>
                <br></br>
                <Typography>
                  Before choosing to go to one of our recommended resources,
                  make sure that they are in-network with your insurance and if
                  they will accept your insurance.
                </Typography>
              </Box>
            )}
            {renderRecommendedResources(
              whichResourceToShow,
              "laptop-monitor",
              setWhichResourceToShow
            )}
          </Grid>
        </Grid> */}

        <Grid container id="mobile-tablet-vaccine-list-container">
          <Grid item xs={12} md={6} xl={3}>
            <Accordion
              className={css["recommended-resources-container"]}
              expanded={vaccineInfoList}
              onClick={() =>
                handleVaccineList(vaccineInfoList, setVaccineInfoList)
              }
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                Vaccine Information
              </AccordionSummary>
              <AccordionDetails className={css["resource-list"]}>
                <Grid container>
                  {vaccineData.map((eachVaccine, index) => {
                    const { title, keyLink, extraLink } = eachVaccine;
                    return (
                      <Grid
                        className={css["list-item"]}
                        item
                        key={`${title}-${keyLink}-${extraLink}`}
                        onClick={() =>
                          handleVaccineList(vaccineInfoList, setVaccineInfoList)
                        }
                        xs={12}
                      >
                        <Link to={`${keyLink}`} target="_blank">
                          {title}
                        </Link>
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
