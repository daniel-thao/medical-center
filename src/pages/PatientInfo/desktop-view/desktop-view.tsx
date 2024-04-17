import React, { useState } from 'react';

import { TextBlock, TextBlockClassification } from '../../../components/globalMolecules/TextBlock/TextBlock';
import { Box, Grid, Tab, Tabs } from '@mui/material';

import { IResourceCategoryRender } from '../utils/interfacesTypes';
import { resourceData } from '../utils/resourceData';
import { vaccineData } from '../utils/vaccineData';

import css from './desktop-view.module.css';
import { ResourceDataDrawer } from '../subComponents/resource-data-drawer/ResourceDataDrawer';
import { TabContext, TabPanel } from '@mui/lab';

export interface PatientInfoDesktopViewProps { }

export const DesktopView: React.FC<PatientInfoDesktopViewProps> = () => {
  const [isResourceChosen, setIsResourceChosen] = useState<boolean>(false);
  const [tabVal, setTabVal] = useState("1")

  const [whichResourceToShow, setWhichResourceToShow] = useState<IResourceCategoryRender>({
    resourceCategory: 'Allergy-and-Asthma',
    resourceIndex: 0
  });

  const handleResource = (resourceListCategory: string, resourceListIndex: number): void => {
    setWhichResourceToShow({
      resourceCategory: resourceListCategory,
      resourceIndex: resourceListIndex
    });

    setTimeout(() => {
      setIsResourceChosen(!isResourceChosen)
    }, 375);
  }

  const handleVaccineList = (keyLink: string) => {
    if (keyLink) {
      window.open(keyLink, "_blank")
    }
  };

  const tabChange = (e: React.SyntheticEvent, newVal: string) => {
    setTabVal(newVal)
  }

  return (
    <>
      <Box id="main-container" className={css['patient-info-container']}>
        <Box id="tablet-recommended-resources-container" sx={{ display: { xs: 'block', md: 'none' } }}>
          <TextBlock body="Serving our patients with a compassionate heart and caring hands" classification={TextBlockClassification.quote} className={css['quote-one']} />
        </Box>

        <TabContext value={tabVal}>
          <Box sx={{ borderBottom: 1, borderColor: 'black divider', display: "flex", justifyContent: "center", mt: 4, pb: 4 }}>
            <Tabs onChange={tabChange} aria-label="basic tabs example" sx={{ fontSize: 16 }}>
              <Tab className={`${css["resource-list"]}${tabVal === "1" ? ` ${css["resource-list-active"]}` : ""}`} sx={{ fontSize: 24 }} label="Specialty Clinics" value="1" />
              <Tab className={`${css["vaccine-list"]}${tabVal === "2" ? ` ${css["vaccine-list-active"]}` : ""}`} sx={{ fontSize: 24 }} label="Vaccine Information" value="2" />
            </Tabs>
          </Box>

          <TabPanel value="1">
            <Grid container item xs={12}>
              {resourceData.map((resource, index) => {
                const objKey = Object.keys(resource)[0];
                const resourceCategory = objKey.replaceAll('-', ' ');

                if (index % 2 === 0) {
                  return (
                    <>
                      <Grid item xs={3}></Grid>
                      <Grid className={css['resource-item']} item key={`${resource}-${index}`} onClick={(e) => handleResource(objKey, index)} xs={3}>
                        {resourceCategory}
                      </Grid>
                    </>
                  );
                }

                if (index % 2 !== 0) {
                  return (
                    <>
                      <Grid className={css['resource-item']} item key={`${resource}-${index}`} onClick={(e) => handleResource(objKey, index)} xs={3}>
                        {resourceCategory}
                      </Grid>
                      <Grid item xs={3}></Grid>
                    </>
                  );
                }

                // return (
                //   <Grid className={css['resource-item']} item key={`${resource}-${index}`} onClick={(e) => handleResource(objKey, index)} xs={6}>
                //     {resourceCategory}
                //   </Grid>
                // );
              })}
            </Grid>
          </TabPanel>

          <TabPanel value="2">
            <Grid container item xs={12}>
              {vaccineData.map((eachVaccine, index) => {
                const { title, keyLink, extraLink } = eachVaccine;

                if (index % 2 !== 0 && title) {
                  return (
                    <>
                      <Grid className={css['vaccine-item']} item key={`${title}-${keyLink}-${extraLink}`} onClick={() => handleVaccineList(keyLink)} xs={3}>
                        {title}
                      </Grid>
                      <Grid item xs={3}></Grid>
                    </>
                  );
                }

                if (index % 2 === 0 && title) {
                  return (
                    <>
                      <Grid item xs={3}></Grid>
                      <Grid className={css['vaccine-item']} item key={`${title}-${keyLink}-${extraLink}`} onClick={() => handleVaccineList(keyLink)} xs={3}>
                        {title}
                      </Grid>
                    </>
                  );
                }

                if (!title) {
                  return <Grid item key={`${title}-${keyLink}-${extraLink}`} xs={3} xl={2}>
                    {title}
                  </Grid>
                }
              })}
            </Grid>
          </TabPanel>

        </TabContext>

        {/* <Grid container>
          <Grid container item xs={12}>
            <TextBlock className={css["resource-list"]} body="Specialty Clinics" classification={TextBlockClassification.title} />
            {resourceData.map((resource, index) => {
              const objKey = Object.keys(resource)[0];
              const resourceCategory = objKey.replaceAll('-', ' ');

              return (
                <Grid className={css['resource-item']} item key={`${resource}-${index}`} onClick={(e) => handleResource(objKey, index)} xs={3}>
                  {resourceCategory}
                </Grid>
              );
            })}
          </Grid>

          <Grid container item xs={12}>
            <TextBlock className={css["vaccine-list"]} body="Vaccine Information" classification={TextBlockClassification.title} />
            {vaccineData.map((eachVaccine, index) => {
              const { title, keyLink, extraLink } = eachVaccine;

              if (title) {
                return (
                  <Grid className={css['vaccine-item']} item key={`${title}-${keyLink}-${extraLink}`} onClick={() => handleVaccineList(keyLink)} xs={3}>
                    {title}
                  </Grid>
                );
              } else {
                return <Grid item key={`${title}-${keyLink}-${extraLink}`} xs={3} xl={2}>
                  {title}
                </Grid>
              }

            })}
          </Grid>
        </Grid> */}
      </Box >

      <ResourceDataDrawer whichResourceToShow={whichResourceToShow} isResourceChosen={isResourceChosen} setIsResourceChosen={setIsResourceChosen}></ResourceDataDrawer>

      <Box className={css['hero-container']}>
        <img
          alt="clinic-person-01"
          className={css['image-general-formmat']}
          src="https://plus.unsplash.com/premium_photo-1661418051911-54992d992b30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"></img>
      </Box>
    </>
  );
};
