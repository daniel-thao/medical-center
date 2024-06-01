import React, { useState, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { ResourceDataDrawer } from '../subComponents/resource-data-drawer/ResourceDataDrawer';
import { TextBlock, TextBlockClassification } from '../../../components/globalMolecules/TextBlock/TextBlock';
import { Box, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import { IResourceCategoryRender } from '../utils/interfacesTypes';
import { resourceData } from '../utils/resourceData';
import { vaccineData } from '../utils/vaccineData';

import css from './mobile-view.module.css';

export interface PatientInfoMobileViewProps {}

export const MobileView: React.FC<PatientInfoMobileViewProps> = () => {
  const [isResourceListOpen, setIsResourceListOpen] = useState<boolean>(false);
  const [isResourceChosen, setIsResourceChosen] = useState<boolean>(false);
  const [vaccineInfoList, setVaccineInfoList] = useState<boolean>(false);

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
      setIsResourceChosen(!isResourceChosen);
    }, 375);
  };

  const handleVaccineList = (state: boolean, setChosenState: React.Dispatch<SetStateAction<boolean>>) => {
    if (!state) {
      setChosenState(true);
    } else setChosenState(false);
  };

  return (
    <>
      <Box id="main-container" className={css['patient-info-container']}>
        <Box id="mobile-recommended-resources-container" sx={{ display: { xs: 'block', md: 'none' } }}>
          <TextBlock
            body="Serving our patients with a compassionate heart and caring hands"
            classification={TextBlockClassification.quote}
            className={css['quote-one']}
            sx={{ mt: 10, mb: 10 }}
          />

          <Box sx={{ display: { xs: 'block', md: 'none' }, mx: 2 }}>
            <TextBlock
              body="Sevices"
              classification={TextBlockClassification.title}
              className={css['services-title']}
            />

            <TextBlock
              body="We are a PRIMARY CARE family practice clinic serving all ages from newborn babies to the elderly. We
              are here to serve you and your entire family of all ages."
              classification={TextBlockClassification.paragraph}
              sx={{ mb: 2 }}
            />

            <TextBlock
              body="Over the past twenty years, we have served families from grandparents, to parents, to children and
              grandchildren. We have established special relationships with the families that continue to see us as
              partners in their health and wellbeing."
              classification={TextBlockClassification.paragraph}
              sx={{ mb: 2 }}
            />

            <TextBlock
              body="We care for people who need treatment for acute illnesses as well as those who have chronic medical
              conditions such as diabetes, high blood pressure, high cholesterol, gout, kidney diseases, etc. We pride
              ourselves in providing excellent culturally-responsive compassionate medical care and improving the
              health of our patients. We invest time and effort in educating and counseling our patients ensuring that
              they understand the conditions as well as the recommendations. We believe we have made a
              difference in the lives of our patients."
              classification={TextBlockClassification.paragraph}
              sx={{ mb: 2 }}
            />

            <TextBlock
              body="We are a certified Health Care Home, which means that we put the patient at the forefront of care.
              We believe patients and their families are important partners in their health and well-being. Therefore
              we involve patients and family members in medical decision making and incorporate their input and
              perspectives into individualized care plans."
              classification={TextBlockClassification.paragraph}
              sx={{ mb: 2 }}
            />

            <TextBlock
              body="We value the ethnic communities in Minnesota and take pride in serving them, understanding that their
              cultural values, religious convictions, and socioeconomic status greatly affect their views, choices, and
              access to care. As a woman and minority-owned private medical clinic, we understand the barriers
              minorities and women face, especially in the healthcare system. We strive to make your experience
              with us a pleasant one."
              classification={TextBlockClassification.paragraph}
              sx={{ mb: 2 }}
            />
            <Box></Box>
          </Box>

          <Grid container id="mobile-vaccine-list-container">
            <Grid item xs={12} md={6} xl={3}>
              <Accordion className={`${css['recommended-resources-container']}`}>
                <AccordionSummary
                  className={`${isResourceListOpen ? css['resource-list-active'] : css['resource-list-inactive']}`}
                  expandIcon={<ExpandMore />}
                  aria-controls="resource-list-content">
                  Recommended Resource List
                </AccordionSummary>

                <AccordionDetails className={css['resource-list']}>
                  <Grid container>
                    {resourceData.map((resource, index) => {
                      const objKey = Object.keys(resource)[0];
                      const resourceCategory = objKey.replaceAll('-', ' ');

                      return (
                        <Grid
                          id="resource-accordion-choice"
                          className={css['list-item']}
                          item
                          key={`${resource}-${index}`}
                          onClick={(e) => handleResource(objKey, index)}
                          xs={6}>
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
                setIsResourceChosen={setIsResourceChosen}></ResourceDataDrawer>
            </Grid>
          </Grid>
        </Box>

        <Grid container id="mobile-vaccine-list-container">
          <Grid item xs={12} md={6} xl={3}>
            <Accordion className={css['recommended-vaccines-container']}>
              <AccordionSummary
                className={`${vaccineInfoList ? css['resource-list-active'] : css['resource-list-inactive']}`}
                expandIcon={<ExpandMore />}
                aria-controls="vaccine-list-content"
                id="vaccine-list-header">
                Vaccine Information
              </AccordionSummary>
              <AccordionDetails className={css['vaccines-list']}>
                <Grid container>
                  {vaccineData.map((eachVaccine, index) => {
                    const { title, keyLink, extraLink } = eachVaccine;
                    return (
                      <Grid
                        className={css['vaccines-list-item']}
                        item
                        key={`${title}-${keyLink}-${extraLink}`}
                        onClick={() => handleVaccineList(vaccineInfoList, setVaccineInfoList)}
                        xs={12}>
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

      <Box className={css['hero-container']}>
        <img
          alt="clinic-person-01"
          className={css['image-general-formmat']}
          src="https://plus.unsplash.com/premium_photo-1661418051911-54992d992b30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"></img>
      </Box>
    </>
  );
};
