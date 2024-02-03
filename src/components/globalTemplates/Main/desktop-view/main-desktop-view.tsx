import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import { TextBlock } from '../../../globalMolecules/TextBlock/TextBlock';

import '../../../../global.css';
import css from './main-desktop-view.module.css';
import font from '../../../../styles/fonts.module.css';
import { IPhotoAndInfo, IPhotoHyperlink } from '../Main';

export interface MainDesktopViewProps {
  photoHyperLinks: IPhotoHyperlink[];
  photoAndInfos: IPhotoAndInfo[];
}

export const MainDesktopView: React.FC<MainDesktopViewProps> = ({ photoHyperLinks, photoAndInfos }) => {
  return (
    <Box className={css['container']}>
      <Box className={css['rowContainer']}>
        <Box className={css['image-one']}>
          <img alt={photoAndInfos[0].alt} src={photoAndInfos[0].src}></img>
        </Box>

        <Box className={css['text-section-one']}>
          <TextBlock body={'Serving our patients with a compassionate heart and caring hands'} classification="quote" className={css['quote']} />
          <TextBlock
            body={`The mission of St. Paul Family Medical Center is to work in conjunction with 
                            the patient and family to provide the highest quality patient-centered medical 
                            care in a compassionate, personalized, culturally-responsive, and effective manner 
                            which is delivered by a team of superior professionals. We embrace patients and families 
                            as care partners in the road to better health and wellness for all.`}
            classification="paragraph"
            className={css['paragraph']}
          />
        </Box>

        {/* <Grid item xs={0} sm={0} md={0} lg={0} xl={2} sx={{ display: mdBreakPoint ? "inital" : "none" }}></Grid> */}
      </Box>

      <Box className={css['rowContainer']}>
        <Box className={css['text-section-two']}>
          <TextBlock body={'Certified HealthCare Home'} classification="quote" className={css['cert-title']} />

          <TextBlock body={'SPFMC is certified by the state of MN as a HealthCare Home.'} classification="paragraph" className={css['cert']} />

          <TextBlock
            body={`St. Paul Family Medical Center (SPFMC) was founded in June 2002 by one of the first 
                            Hmong woman physicians in the United States, Dr. Phua Xiong. SPFMC was established to serve 
                            the Hmong community and the diverse communities in the Saint Paul and Minneapolis metro area. 
                            We strive to provide quality health care services in a culturally responsive manner, respecting 
                            the cultural and religious values of all of our patients. We are a primary care clinic that 
                            is family-focused, serving patients of all ages from newborns to the geriatric population. 
                            We value culture, faith, and family as well as individual empowerment in our approach to health 
                            and medical care.`}
            classification="paragraph"
            className={css['paragraph']}
          />
        </Box>

        <Box className={css['image-two']}>
          <img alt={photoAndInfos[1].alt} src={photoAndInfos[1].src}></img>
        </Box>
      </Box>

      <Box className={css['rowContainer']}>
        {photoHyperLinks.map((data, index) => {
          return (
            <Box key={photoHyperLinks[index].alt} className={css['resource']}>
              <img className={css['resource-image']} alt={data.alt} src={data.src} />
              <Link to={data.link} className={`${font['text-m']}`} onClick={() => window.scrollTo(0, 0)}>
                {data.displayText}
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
