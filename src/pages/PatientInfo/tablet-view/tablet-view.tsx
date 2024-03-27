import React, { useState, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { TextBlock, TextBlockClassification } from '../../../components/globalMolecules/TextBlock/TextBlock';
import { Box, Grid } from '@mui/material';

import { IResourceCategoryRender } from '../utils/interfacesTypes';
import { resourceData } from '../utils/resourceData';
import { vaccineData } from '../utils/vaccineData';

import css from './tablet-view.module.css';

export interface PatientInfoMobileViewProps { }

export const TabletView: React.FC<PatientInfoMobileViewProps> = () => {
  const [isResourceListOpen, setIsResourceListOpen] = useState<boolean>(false);
  const [isResourceChosen, setIsResourceChosen] = useState<boolean>(false);
  const [vaccineInfoList, setVaccineInfoList] = useState<boolean>(false);

  const [whichResourceToShow, setWhichResourceToShow] = useState<IResourceCategoryRender>({
    resourceCategory: 'Allergy-and-Asthma',
    resourceIndex: 0
  });

  const handleResourceList = (resourceListCategory?: string, resourceListIndex?: number, didClickListItem?: boolean): void => {
    if (resourceListCategory && resourceListIndex !== undefined) {
      setWhichResourceToShow({
        resourceCategory: resourceListCategory,
        resourceIndex: resourceListIndex
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

  const handleVaccineList = (state: boolean, setChosenState: React.Dispatch<SetStateAction<boolean>>, keyLink: string) => {
    // if (!state) {
    //   setChosenState(true);
    // } else setChosenState(false);

    // window.open(keyLink, "_blank")
  };

  return (
    <>
      <Box id="main-container" className={css['patient-info-container']}>
        <Box id="tablet-recommended-resources-container" sx={{ display: { xs: 'block', md: 'none' } }}>
          <TextBlock body="Serving our patients with a compassionate heart and caring hands" classification={TextBlockClassification.quote} className={css['quote-one']} />
        </Box>

        <Grid container>
          <Grid container item xs={6}>
            <TextBlock className={css["resource-list"]} body="Specialty Clinics" classification={TextBlockClassification.title} />
            {resourceData.map((resource, index) => {
              const objKey = Object.keys(resource)[0];
              const resourceCategory = objKey.replaceAll('-', ' ');

              return (
                <Grid className={css['resource-item']} item key={`${resource}-${index}`} onClick={(e) => handleResourceList(objKey, index, true)} xs={12}>
                  {resourceCategory}
                </Grid>
              );
            })}
          </Grid>

          <Grid container item xs={6}>
            <TextBlock className={css["vaccine-list"]} body="Vaccine Information" classification={TextBlockClassification.title} />
            {vaccineData.map((eachVaccine, index) => {
              const { title, keyLink, extraLink } = eachVaccine;

              return (
                <Grid className={css['vaccine-item']} item key={`${title}-${keyLink}-${extraLink}`} onClick={() => handleVaccineList(vaccineInfoList, setVaccineInfoList, keyLink)} xs={12}>
                  {/* <Link to={`${keyLink}`} target="_blank"> */}
                  {title}
                  {/* </Link> */}
                </Grid>
              );
            })}
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
