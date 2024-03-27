import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Grid } from '@mui/material';

import css from '../Main.module.css';
import font from '../../../../styles/fonts.module.css';
import { TextBlock, TextBlockClassification } from '../../../globalMolecules/TextBlock/TextBlock';
import { IPhotoAndInfo, IPhotoHyperlink } from '../Main';

export interface MainMobileViewProps {
  photoHyperLinks: IPhotoHyperlink[];
  photoAndInfos: IPhotoAndInfo[];
}

export const MainMobileView: React.FC<MainMobileViewProps> = ({ photoHyperLinks, photoAndInfos }) => {
  return (
    <Box className={css['container']}>
      <Box className={css['image-one']}>
        <img alt={photoAndInfos[0].alt} src={photoAndInfos[0].src} className={css['image-general-format']}></img>
      </Box>

      <TextBlock body={'Serving our patients with a compassionate heart and caring hands'} classification={TextBlockClassification.quote} className={css['landing-page-quote-one']} />

      <TextBlock
        body={`The mission of St. Paul Family Medical Center is to work in conjunction with 
          the patient and family to provide the highest quality patient-centered medical 
          care in a compassionate, personalized, culturally-responsive, and effective manner 
          which is delivered by a team of superior professionals. We embrace patients and families 
          as care partners in the road to better health and wellness for all.`}
        classification={TextBlockClassification.paragraph}
        className={css['landing-page-paragraph-one']}
      />

      <Box className={css['hero-container']}>
        <img alt={photoAndInfos[1].alt} src={photoAndInfos[1].src} className={css['image-general-format']}></img>
      </Box>

      <TextBlock body={'Certified HealthCare Home'} classification={TextBlockClassification.quote} className={css['landing-page-certification-one']} />

      <TextBlock body={'SPFMC is certified by the state of MN as a HealthCare Home.'} classification={TextBlockClassification.paragraph} className={css['landing-page-certification-two']} />

      <TextBlock
        body={`St. Paul Family Medical Center (SPFMC) was founded in June 2002 by one of the first 
        Hmong woman physicians in the United States, Dr. Phua Xiong. SPFMC was established to serve 
        the Hmong community and the diverse communities in the Saint Paul and Minneapolis metro area. 
        We strive to provide quality health care services in a culturally responsive manner, respecting 
        the cultural and religious values of all of our patients. We are a primary care clinic that 
        is family-focused, serving patients of all ages from newborns to the geriatric population. 
        We value culture, faith, and family as well as individual empowerment in our approach to health 
        and medical care.`}
        classification={TextBlockClassification.paragraph}
        className={css['landing-page-paragraph-two']}
      />

      <Grid container spacing={2} className={css['resource-container']}>
        {photoHyperLinks.map((data, index) => {
          return (
            <Grid container item xs={12} sm={6} md={6} key={photoHyperLinks[index].alt} className={css['resource']}>
              <img className={css['resource-image']} alt={data.alt} src={data.src} />
              <Link to={data.link} className={`${font['text-m']}`} onClick={() => window.scrollTo(0, 0)}>
                {data.displayText}
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
