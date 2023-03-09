import React from "react";
import { Link } from "react-router-dom";

import { TextBlock } from "../../globalMolecules/TextBlock/TextBlock";
import { Box, Grid } from "@mui/material";

import css from "./Main.module.css";
import font from "../../../styles/fonts.module.css";

export interface MainProps {}

export interface IPhotoAndInfo {
  alt: string;
  src: string;
  displayText: string;
  extra?: string;
  link: string;
}

export const Main: React.FC<MainProps> = (props) => {
  const photoHyperLinks: IPhotoAndInfo[] = [
    {
      alt: "patient-information",
      src: "https://images.unsplash.com/photo-1579154341140-5aa3a445d43b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
      displayText: "Patient Information",
      link: "/patient-info",
    },
    {
      alt: "provider-information",
      src: "https://plus.unsplash.com/premium_photo-1661746101294-0b53eaaacc61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      displayText: "Providers",
      link: "/providers-info",
    },
    {
      alt: "immigration-exam-information",
      src: "https://images.unsplash.com/photo-1564041549956-3ad6fa9f5517?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      displayText: "Immigration Exams",
      link: "/immigration-exams",
    },
    {
      alt: "services-information",
      src: "https://plus.unsplash.com/premium_photo-1661670876065-f4479fb8e3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      displayText: "Services",
      link: "/services",
    },
  ];

  return (
    <Box className={css["container"]}>
      <Box className={css["image-one"]}>
        <img
          alt="clinic-interior-01"
          className={css["image-general-format"]}
          src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
        ></img>
      </Box>

      <TextBlock
        body={
          "Serving our patients with a compassionate heart and caring hands"
        }
        classification="quote"
        className={css["landing-page-quote-one"]}
      />

      <TextBlock
        body={`The mission of St. Paul Family Medical Center is to work in conjunction with 
          the patient and family to provide the highest quality patient-centered medical 
          care in a compassionate, personalized, culturally-responsive, and effective manner 
          which is delivered by a team of superior professionals. We embrace patients and families 
          as care partners in the road to better health and wellness for all.`}
        classification="paragraph"
        className={css["landing-page-paragraph-one"]}
      />

      <Box className={css["hero-container"]}>
        <img
          alt="clinic-person-01"
          className={css["image-general-format"]}
          src="https://plus.unsplash.com/premium_photo-1661418051911-54992d992b30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
        ></img>
      </Box>

      <TextBlock
        body={"Certified HealthCare Home"}
        classification="quote"
        className={css["landing-page-certification-one"]}
      />

      <TextBlock
        body={"SPFMC is certified by the state of MN as a HealthCare Home."}
        classification="paragraph"
        className={css["landing-page-certification-two"]}
      />

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
        className={css["landing-page-paragraph-two"]}
      />

      <Grid container spacing={2} className={css["resource-container"]}>
        {photoHyperLinks.map((data, index) => {
          return (
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={6}
              key={photoHyperLinks[index].alt}
              className={css["resource"]}
            >
              <img
                className={css["resource-image"]}
                alt={data.alt}
                src={data.src}
              />
              <Link to={data.link} className={`${font["text-m"]}`} onClick={() => window.scrollTo(0,0)}>
                {data.displayText}
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
