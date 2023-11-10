import React, { useState } from "react";

import { Nav } from "../../components/globalTemplates/Nav/Nav";
import { Footer } from "../../components/globalTemplates/Footer/Footer";
import { TextBlock } from "../../components/globalMolecules/TextBlock/TextBlock";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import css from "./ProviderInfoContainer.module.css";

export interface ProviderInfoProps {}

export const ProviderInfoContainer: React.FC<ProviderInfoProps> = () => {
  const [whichProviderIDNumber, setWhichProviderIDNumber] = useState<string>("1");

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setWhichProviderIDNumber(newValue);
  };

  const tabAttrGenerator = (providerName: string, indexValue: number) => {
    return {
      "aria-label": "provider-tab-selection",
      "aria-controls": `provider-tabpanel-${providerName}`,
      id: `provider-tab-for-${providerName}`,
      label: providerName,
      value: `${indexValue}`,
    };
  };

  return (
    <div className={`global-font ${css["landing-container"]}`}>
      {/* <Nav></Nav> */}

      <Box>
        <TabContext value={whichProviderIDNumber}>
          <Box>
            <TabList
              // value={whichProviderIDNumber}
              onChange={handleChange}
              aria-label="provider-tab-selection"
            >
              <Tab {...tabAttrGenerator("Dr. Phua Xiong", 1)} />
              <Tab {...tabAttrGenerator("May Mua", 2)} />
              <Tab {...tabAttrGenerator("PaaHoua Vang", 3)} />
            </TabList>
          </Box>

          <TabPanel
            value={"1"}
            className={css["tab-panel-container-formatting"]}
          >
            <Box className={css["photo-container-one"]}>
              <img
                alt="provider-01"
                className={css["image-general-format"]}
                src="https://media.istockphoto.com/id/1341667252/photo/be-so-good-that-youll-be-recognized-internationally.jpg?s=612x612&w=is&k=20&c=12ZRVp-LAaRDrcIU5jjkWd70vuMZnP2sV6_SkCJBea4="
              ></img>
            </Box>

            <Box className={css["tab-panel-text-formatting"]}>
              <TextBlock
                body={"Dr. Phua Xiong"}
                classification={"title"}
                className={css["provider-one"]}
              />

              <TextBlock
                body={`Dr Phua Xiong is the medical director and owner of St Paul Family Medical Center, a Hmong
              clinic on the East Side of St. Paul, serving the Hmong community and other underserved
              communities since 2002.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`Dr. Xiong graduated from the U of MN Medical School in 1996 and did her residency
              training in family medicine at St. Joesph’s Hospital in St. Paul.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`As a child growing up in Philadelphia, Pennsylvania Dr. Xiong always had a passion for
              service and a heart of love for the Hmong people. It was her compassion and love for the
              Hmong that brought her to Minnesota in 1992 to study medicine.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`In her 25 years of serving the Hmong community she continues to be a strong presence in
              the MN Hmong community. She has served as cultural consultant to various agencies and
              organizations including health care organizations such as Ucare MN. She has been a part of
              many health education programs for the Hmong community since graduation from Medical
              School.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`She received a grant from the John G. Fee Preventive Medicine Scholarship to develop a
              video in Hmong and English called, “Living Healthy Lives,” promoting healthy lifestyles in
              America for the Hmong people. She is a strong advocate for culturally sensitive and
              response health care.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`She is a co-author of the book “Healing by Heart: : Clinical and Ethical Case Stories of Hmong
              Families and Western Providers,” which addresses many of the cultural and religious aspects of
              health in the Hmong. This book has been used in academic and health care settings in teaching
              students and health care professionals on cultural competency.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`Dr. Xiong is married and is the mother of five children and continues to encourage young
              people, especially women, to pursue their dreams.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />
            </Box>
          </TabPanel>

          <TabPanel
            value={"2"}
            className={css["tab-panel-container-formatting"]}
          >
            <Box className={css["photo-container-one"]}>
              <img
                alt="provider-02"
                className={css["image-general-format"]}
                src="https://media.istockphoto.com/id/1403040788/photo/portrait-of-asian-girl-looking-at-camera-outdoor-focus-on-face.jpg?s=1024x1024&w=is&k=20&c=PUVpg-gLLYWg3g7LVDkesDlS3xgGXG4WvqV7uULb-Ms="
              ></img>
            </Box>

            <Box className={css["tab-panel-text-formatting"]}>
              <TextBlock
                body={"May Mua"}
                classification={"title"}
                className={css["provider-one"]}
              />

              <TextBlock
                body={`Dr Phua Xiong is the medical director and owner of St Paul Family Medical Center, a Hmong
              clinic on the East Side of St. Paul, serving the Hmong community and other underserved
              communities since 2002.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`Dr. Xiong graduated from the U of MN Medical School in 1996 and did her residency
              training in family medicine at St. Joesph’s Hospital in St. Paul.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`As a child growing up in Philadelphia, Pennsylvania Dr. Xiong always had a passion for
              service and a heart of love for the Hmong people. It was her compassion and love for the
              Hmong that brought her to Minnesota in 1992 to study medicine.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`In her 25 years of serving the Hmong community she continues to be a strong presence in
              the MN Hmong community. She has served as cultural consultant to various agencies and
              organizations including health care organizations such as Ucare MN. She has been a part of
              many health education programs for the Hmong community since graduation from Medical
              School.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`She received a grant from the John G. Fee Preventive Medicine Scholarship to develop a
              video in Hmong and English called, “Living Healthy Lives,” promoting healthy lifestyles in
              America for the Hmong people. She is a strong advocate for culturally sensitive and
              response health care.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`She is a co-author of the book “Healing by Heart: : Clinical and Ethical Case Stories of Hmong
              Families and Western Providers,” which addresses many of the cultural and religious aspects of
              health in the Hmong. This book has been used in academic and health care settings in teaching
              students and health care professionals on cultural competency.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`Dr. Xiong is married and is the mother of five children and continues to encourage young
              people, especially women, to pursue their dreams.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />
            </Box>
          </TabPanel>

          <TabPanel
            value={"3"}
            className={css["tab-panel-container-formatting"]}
          >
            <Box className={css["photo-container-one"]}>
              <img
                alt="provider-03"
                className={css["image-general-format"]}
                src="https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?s=1024x1024&w=is&k=20&c=AzqHGt31gTv2CY9bF0VGinj49Nuld3YpEDInC2V7R9k="
              ></img>
            </Box>

            <Box className={css["tab-panel-text-formatting"]}>
              <TextBlock
                body={"PaaHoua Vang"}
                classification={"title"}
                className={css["provider-one"]}
              />

              <TextBlock
                body={`Dr Phua Xiong is the medical director and owner of St Paul Family Medical Center, a Hmong
              clinic on the East Side of St. Paul, serving the Hmong community and other underserved
              communities since 2002.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`Dr. Xiong graduated from the U of MN Medical School in 1996 and did her residency
              training in family medicine at St. Joesph’s Hospital in St. Paul.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`As a child growing up in Philadelphia, Pennsylvania Dr. Xiong always had a passion for
              service and a heart of love for the Hmong people. It was her compassion and love for the
              Hmong that brought her to Minnesota in 1992 to study medicine.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`In her 25 years of serving the Hmong community she continues to be a strong presence in
              the MN Hmong community. She has served as cultural consultant to various agencies and
              organizations including health care organizations such as Ucare MN. She has been a part of
              many health education programs for the Hmong community since graduation from Medical
              School.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`She received a grant from the John G. Fee Preventive Medicine Scholarship to develop a
              video in Hmong and English called, “Living Healthy Lives,” promoting healthy lifestyles in
              America for the Hmong people. She is a strong advocate for culturally sensitive and
              response health care.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`She is a co-author of the book “Healing by Heart: : Clinical and Ethical Case Stories of Hmong
              Families and Western Providers,” which addresses many of the cultural and religious aspects of
              health in the Hmong. This book has been used in academic and health care settings in teaching
              students and health care professionals on cultural competency.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />

              <TextBlock
                body={`Dr. Xiong is married and is the mother of five children and continues to encourage young
              people, especially women, to pursue their dreams.`}
                classification={"paragraph"}
                className={css["provider-one-paragraph"]}
              />
            </Box>
          </TabPanel>
        </TabContext>
      </Box>

      <Footer></Footer>
    </div>
  );
};

export const providerList: string[] = [
  "Dr. Phua Xiong",
  "May Mua",
  "PaaHoua Vang",
];
