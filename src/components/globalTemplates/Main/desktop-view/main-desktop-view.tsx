import React from "react";
import { Link } from "react-router-dom";

import { Box } from "@mui/material";
import { TextBlock } from "../../../globalMolecules/TextBlock/TextBlock";

import "../../../../global.css"
import css from "./main-desktop-view.module.css";
import font from "../../../../styles/fonts.module.css";

export interface MainDesktopViewProps {
    photoHyperLinks: IPhotoAndInfo[]
}

export interface IPhotoAndInfo {
    alt: string;
    src: string;
    displayText: string;
    extra?: string;
    link: string;
}

export const MainDesktopView: React.FC<MainDesktopViewProps> = ({ photoHyperLinks }) => {

    return (
        <Box className={css["container"]}>

            <Box className={css["rowContainer"]}>
                <Box className={css["image-one"]}>
                    <img
                        alt="clinic-interior-01"
                        src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
                    ></img>
                </Box>

                <Box className={css["text-section-one"]}>
                    <TextBlock
                        body={
                            "Serving our patients with a compassionate heart and caring hands"
                        }
                        classification="quote"
                        className={css["quote"]}
                    />
                    <TextBlock
                        body={`The mission of St. Paul Family Medical Center is to work in conjunction with 
                            the patient and family to provide the highest quality patient-centered medical 
                            care in a compassionate, personalized, culturally-responsive, and effective manner 
                            which is delivered by a team of superior professionals. We embrace patients and families 
                            as care partners in the road to better health and wellness for all.`}
                        classification="paragraph"
                        className={css["paragraph"]}
                    />
                </Box>

                {/* <Grid item xs={0} sm={0} md={0} lg={0} xl={2} sx={{ display: mdBreakPoint ? "inital" : "none" }}></Grid> */}

            </Box>

            <Box className={css["rowContainer"]}>
                <Box className={css["text-section-two"]}>
                    <TextBlock
                        body={"Certified HealthCare Home"}
                        classification="quote"
                        className={css["cert-title"]}
                    />

                    <TextBlock
                        body={"SPFMC is certified by the state of MN as a HealthCare Home."}
                        classification="paragraph"
                        className={css["cert"]}
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
                        className={css["paragraph"]}
                    />
                </Box>

                <Box className={css["image-two"]}>
                    <img
                        alt="clinic-person-01"
                        src="https://plus.unsplash.com/premium_photo-1661418051911-54992d992b30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                    ></img>
                </Box>


            </Box>

            <Box className={css["rowContainer"]}>
                {photoHyperLinks.map((data, index) => {
                    return (
                        <Box
                            key={photoHyperLinks[index].alt}
                            className={css["resource"]}
                        >
                            <img
                                className={css["resource-image"]}
                                alt={data.alt}
                                src={data.src}
                            />
                            <Link to={data.link} className={`${font["text-m"]}`} onClick={() => window.scrollTo(0, 0)}>
                                {data.displayText}
                            </Link>
                        </Box>
                    );
                })}

            </Box>
        </Box>
    );
};
