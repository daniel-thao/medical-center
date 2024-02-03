import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Container, Tab } from '@mui/material';
import { TextBlock } from '../../../components/globalMolecules/TextBlock/TextBlock';

import css from '../ProviderInfoContainer.module.css';

export interface ProviderInfoDesktopViewProps {
  imageCSSRender: string;
}

export const ProviderInfoDesktopView: React.FC<ProviderInfoDesktopViewProps> = (props) => {
  const { imageCSSRender } = props;
  const [whichProviderIDNumber, setWhichProviderIDNumber] = useState<string>('1');

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setWhichProviderIDNumber(newValue);
  };

  const tabAttrGenerator = (providerName: string, indexValue: number) => {
    return {
      'aria-label': 'provider-tab-selection',
      'aria-controls': `provider-tabpanel-${providerName}`,
      id: `provider-tab-for-${providerName}`,
      label: providerName,
      value: `${indexValue}`
    };
  };

  return (
    <Box className={css['container']}>
      <TabContext value={whichProviderIDNumber}>
        <Box>
          <TabList
            // value={whichProviderIDNumber}
            onChange={handleChange}
            aria-label="provider-tab-selection"
            className={css['tab-list']}
            centered={true}>
            <Tab
              className={css['tabs']}
              {...tabAttrGenerator('Dr. Phua Xiong', 1)}
            />
            <Tab
              className={css['tabs']}
              {...tabAttrGenerator('PaaHoua Vang', 2)}
            />
            <Tab
              className={css['tabs']}
              {...tabAttrGenerator('Sheng Vang', 3)}
            />
          </TabList>
        </Box>

        <TabPanel
          value={'1'}
          className={css['tab-panel']}>
          <Box className={css['tab-panel-container']}>
            <Box className={css['photo-container-one']}>
              <img
                alt="provider-01"
                className={imageCSSRender}
                src="./_MG_6147.png"></img>
            </Box>

            <Box className={css['tab-panel-text-formatting']}>
              <TextBlock
                body={'Dr. Phua Xiong'}
                classification={'title'}
                className={css['provider-one']}
              />

              <TextBlock
                body={`Dr Phua Xiong is the medical director and owner of St Paul Family Medical Center, a Hmong
              clinic on the East Side of St. Paul, serving the Hmong community and other underserved
              communities since 2002.`}
                classification={'paragraph'}
                className={css['provider-one-paragraph']}
              />

              <TextBlock
                body={`Dr. Xiong graduated from the U of MN Medical School in 1996 and did her residency
              training in family medicine at St. Joesph’s Hospital in St. Paul.`}
                classification={'paragraph'}
                className={css['provider-one-paragraph']}
              />

              <TextBlock
                body={`As a child growing up in Philadelphia, Pennsylvania Dr. Xiong always had a passion for
              service and a heart of love for the Hmong people. It was her compassion and love for the
              Hmong that brought her to Minnesota in 1992 to study medicine.`}
                classification={'paragraph'}
                className={css['provider-one-paragraph']}
              />

              <TextBlock
                body={`In her 25 years of serving the Hmong community she continues to be a strong presence in
              the MN Hmong community. She has served as cultural consultant to various agencies and
              organizations including health care organizations such as Ucare MN. She has been a part of
              many health education programs for the Hmong community since graduation from Medical
              School.`}
                classification={'paragraph'}
                className={css['provider-one-paragraph']}
              />

              <TextBlock
                body={`She received a grant from the John G. Fee Preventive Medicine Scholarship to develop a
              video in Hmong and English called, “Living Healthy Lives,” promoting healthy lifestyles in
              America for the Hmong people. She is a strong advocate for culturally sensitive and
              response health care.`}
                classification={'paragraph'}
                className={css['provider-one-paragraph']}
              />

              <TextBlock
                body={`She is a co-author of the book “Healing by Heart: : Clinical and Ethical Case Stories of Hmong
              Families and Western Providers,” which addresses many of the cultural and religious aspects of
              health in the Hmong. This book has been used in academic and health care settings in teaching
              students and health care professionals on cultural competency.`}
                classification={'paragraph'}
                className={css['provider-one-paragraph']}
              />

              <TextBlock
                body={`Dr. Xiong is married and is the mother of five children and continues to encourage young
              people, especially women, to pursue their dreams.`}
                classification={'paragraph'}
                className={css['provider-one-paragraph']}
              />
            </Box>
          </Box>
        </TabPanel>

        <TabPanel
          value={'2'}
          className={css['tab-panel']}>
          <Box className={css['photo-container-one']}>
            <img
              alt="provider-02"
              className={imageCSSRender}
              src="./_MG_6147.png"></img>
          </Box>

          <Box className={css['tab-panel-text-formatting']}>
            <TextBlock
              body={'May Mua'}
              classification={'title'}
              className={css['provider-one']}
            />

            <TextBlock
              body={`Dr Phua Xiong is the medical director and owner of St Paul Family Medical Center, a Hmong
              clinic on the East Side of St. Paul, serving the Hmong community and other underserved
              communities since 2002.`}
              classification={'paragraph'}
              className={css['provider-one-paragraph']}
            />

            <TextBlock
              body={`Dr. Xiong graduated from the U of MN Medical School in 1996 and did her residency
              training in family medicine at St. Joesph’s Hospital in St. Paul.`}
              classification={'paragraph'}
              className={css['provider-one-paragraph']}
            />

            <TextBlock
              body={`As a child growing up in Philadelphia, Pennsylvania Dr. Xiong always had a passion for
              service and a heart of love for the Hmong people. It was her compassion and love for the
              Hmong that brought her to Minnesota in 1992 to study medicine.`}
              classification={'paragraph'}
              className={css['provider-one-paragraph']}
            />

            <TextBlock
              body={`In her 25 years of serving the Hmong community she continues to be a strong presence in
              the MN Hmong community. She has served as cultural consultant to various agencies and
              organizations including health care organizations such as Ucare MN. She has been a part of
              many health education programs for the Hmong community since graduation from Medical
              School.`}
              classification={'paragraph'}
              className={css['provider-one-paragraph']}
            />

            <TextBlock
              body={`She received a grant from the John G. Fee Preventive Medicine Scholarship to develop a
              video in Hmong and English called, “Living Healthy Lives,” promoting healthy lifestyles in
              America for the Hmong people. She is a strong advocate for culturally sensitive and
              response health care.`}
              classification={'paragraph'}
              className={css['provider-one-paragraph']}
            />

            <TextBlock
              body={`She is a co-author of the book “Healing by Heart: : Clinical and Ethical Case Stories of Hmong
              Families and Western Providers,” which addresses many of the cultural and religious aspects of
              health in the Hmong. This book has been used in academic and health care settings in teaching
              students and health care professionals on cultural competency.`}
              classification={'paragraph'}
              className={css['provider-one-paragraph']}
            />

            <TextBlock
              body={`Dr. Xiong is married and is the mother of five children and continues to encourage young
              people, especially women, to pursue their dreams.`}
              classification={'paragraph'}
              className={css['provider-one-paragraph']}
            />
          </Box>
        </TabPanel>

        <TabPanel
          value={'3'}
          className={css['tab-panel']}>
          <Box className={css['photo-container-one']}>
            <img
              alt="provider-03"
              className={imageCSSRender}
              src="./_MG_6147.png"></img>
          </Box>

          <Box className={css['tab-panel-text-formatting']}>
            <TextBlock
              body={'PaaHoua Vang'}
              classification={'title'}
              className={css['provider-one']}
            />

            <TextBlock
              body={`Dr Phua Xiong is the medical director and owner of St Paul Family Medical Center, a Hmong
              clinic on the East Side of St. Paul, serving the Hmong community and other underserved
              communities since 2002.`}
              classification={'paragraph'}
              className={css['provider-one-paragraph']}
            />

            <TextBlock
              body={`Dr. Xiong graduated from the U of MN Medical School in 1996 and did her residency
              training in family medicine at St. Joesph’s Hospital in St. Paul.`}
              classification={'paragraph'}
              className={css['provider-one-paragraph']}
            />

            <TextBlock
              body={`As a child growing up in Philadelphia, Pennsylvania Dr. Xiong always had a passion for
              service and a heart of love for the Hmong people. It was her compassion and love for the
              Hmong that brought her to Minnesota in 1992 to study medicine.`}
              classification={'paragraph'}
              className={css['provider-one-paragraph']}
            />

            <TextBlock
              body={`In her 25 years of serving the Hmong community she continues to be a strong presence in
              the MN Hmong community. She has served as cultural consultant to various agencies and
              organizations including health care organizations such as Ucare MN. She has been a part of
              many health education programs for the Hmong community since graduation from Medical
              School.`}
              classification={'paragraph'}
              className={css['provider-one-paragraph']}
            />

            <TextBlock
              body={`She received a grant from the John G. Fee Preventive Medicine Scholarship to develop a
              video in Hmong and English called, “Living Healthy Lives,” promoting healthy lifestyles in
              America for the Hmong people. She is a strong advocate for culturally sensitive and
              response health care.`}
              classification={'paragraph'}
              className={css['provider-one-paragraph']}
            />

            <TextBlock
              body={`She is a co-author of the book “Healing by Heart: : Clinical and Ethical Case Stories of Hmong
              Families and Western Providers,” which addresses many of the cultural and religious aspects of
              health in the Hmong. This book has been used in academic and health care settings in teaching
              students and health care professionals on cultural competency.`}
              classification={'paragraph'}
              className={css['provider-one-paragraph']}
            />

            <TextBlock
              body={`Dr. Xiong is married and is the mother of five children and continues to encourage young
              people, especially women, to pursue their dreams.`}
              classification={'paragraph'}
              className={css['provider-one-paragraph']}
            />
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
};
