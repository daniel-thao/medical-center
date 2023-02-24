import React, { useState } from "react";

import { Nav } from "../../components/globalTemplates/Nav/Nav";
import { Box, Grid, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import css from "./PatientInfoContainer.module.css";

export interface IMultiplePhoneNum {
  [key: string]: string;
}

export interface IMultipleOpenAndCloseTimes {
  weekday: string;
  weekend: string;
}

export interface ISingleResource {
  clinicName: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  phone: string | IMultiplePhoneNum;
  openTime?: string | IMultipleOpenAndCloseTimes;
  closeTime?: string | IMultipleOpenAndCloseTimes;
}

export interface IMppedSingleResource {
  [key: number]: ISingleResource;
}

export interface ICategoryResource {
  [key: string]: IMppedSingleResource;
}

export interface PatientInfoContainerProps {}

export const PatientInfoContainer: React.FC<PatientInfoContainerProps> = (props) => {
  const [isResourceListOpen, setIsResourceListOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsResourceListOpen(false);
  };

  const handleResourceList = () => {
    if (isResourceListOpen) setIsResourceListOpen(false);
    else setIsResourceListOpen(true);
  };

  return (
    <div className={"global-font"}>
      <Nav></Nav>
      <Box id="main-container" className={css["patient-info-container"]}>
        <Accordion className={css["recommended-resources-container"]} expanded={isResourceListOpen} onClick={handleResourceList}>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
            Recommended Resource List
          </AccordionSummary>
          <AccordionDetails className={css["resource-list"]}>
            <Grid container>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Allergy And Asthma</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Cardiology</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Colon And Rectal</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Dermatology</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Dental</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Endocrinology</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Ears, Nose, and Throat</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Foot Pediatry</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Gastroenterology</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Infectious Disease</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Kidney Renal</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Opthmaologist</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Optometrist</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Orthopedics</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Pain Clinic</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Psychology and Psychiatry</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Sleep</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Urgent Care Clinic</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Urology</Button>
              </Grid>
              <Grid className={css['list-item']} item xs={6}>
                <Button className={css["list-button"]} onClick={handleResourceList}>Home Health Care Agency</Button>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Box>Information</Box>
      </Box>
    </div>
  );
};

const resourceData: ICategoryResource[] = [
  {
    allergyAsthma: {
      0: {
        clinicName: "Allergy & Asthma Allina Clinic - Woodbury",
        street: "8675 Valley Creek Road",
        city: "Woodbury",
        state: "MN",
        zipcode: "55125",
        phone: "(651) 501-3333",
      },
      1: {
        clinicName: "Allergy & Asthma Care PA",
        street: "1675 Beam Avenue Suite 210",
        city: "Maplewood",
        state: "MN",
        zipcode: "55109",
        phone: "(651) 501-7872",
      },
    },
  },
  {
    cardiology: {
      0: {
        clinicName: "MHealth Heart Care",
        street: "1600 St Johns Boulevard Suite 200",
        city: "Maplewood",
        state: "MN",
        zipcode: "55109",
        phone: "(651) 471-2622",
      },
      1: {
        clinicName: "St. Paul Heart Clinic",
        street: "225 North Smith Avenue Suite 500",
        city: "St. Paul",
        state: "MN",
        zipcode: "55102",
        phone: "(651) 292-0616",
      },
      2: {
        clinicName: "United Heart and Vascular",
        street: "225 North Smith Street, 4th Floor",
        city: "St. Paul",
        state: "MN",
        zipcode: "55102",
        phone: "(651) 290-0133",
      },
    },
  },
  {
    colonRectal: {
      0: {
        clinicName: "Colon & Rectal Surgery",
        street: "1983 Sloan Place Suite #11",
        city: "St. Paul",
        state: "MN",
        zipcode: "55117",
        phone: "(651) 312-1620",
      },
    },
  },
  {
    dermatology: {
      0: {
        clinicName: "Dermatology Consultants",
        street: "60 Plato Boulevard East Suite 270",
        city: "St. Paul",
        state: "MN",
        zipcode: "55117",
        phone: "(651) 645-3628",
      },
      1: {
        clinicName: "Dermatology Consultants Willow Lake Office Park Suite 240",
        street: "3555 Willow Lake Boulevard",
        city: "Vadnais Heights",
        state: "MN",
        zipcode: "55110",
        phone: "(651) 770-0110",
      },
    },
  },
  {
    dental: {
      0: {
        clinicName: "Dr Kou Vang, Vang Dental",
        street: "225 University Avenue West",
        city: "St. Paul",
        state: "MN",
        zipcode: "55104",
        phone: "(651) 222-6738",
      },
    },
  },
  {
    endocrinology: {
      0: {
        clinicName: "United Hospital Endocrinology",
        street: "225 North Smith Avenue Suite 100",
        city: "St. Paul",
        state: "MN",
        zipcode: "55102",
        phone: "(651) 241-5000",
      },
      1: {
        clinicName: "Regions Endocrinology",
        street: "401 Phalen Boulevard, 3rd Floor",
        city: "St. Paul",
        state: "MN",
        zipcode: "55101",
        phone: "(952) 967-7616",
      },
      2: {
        clinicName: "Healtheast - Maplewood Clinic Endocrinology",
        street: "3100 Kennard Street",
        city: "Maplewood",
        state: "MN",
        zipcode: "55109",
        phone: "(651) 232-7800",
      },
    },
  },
  {
    earsNoseThroat: {
      0: {
        clinicName: "Midwest ENT Specialist",
        street: "1675 Beam Avenue Suite 200",
        city: "Maplewood",
        state: "MN",
        zipcode: "55109",
        phone: {
          clinic: "(651) 770-1105",
          appointmentLine: "(651) 641=6134",
        },
      },
    },
  },
  {
    footPodiatry: {
      0: {
        clinicName: "Dr. James Nhia Vang",
        street: "1030 Payne Avenue",
        city: "St. Paul",
        state: "MN",
        zipcode: "55130",
        phone: "(651) 774-2020",
      },
    },
  },
  {
    gastroenterology: {
      0: {
        clinicName: "MN Gastroenterology",
        street: "1973 Sloan Place Suite 100",
        city: "St. Paul",
        state: "MN",
        zipcode: "55117",
        phone: "(612) 871-1145",
      },
    },
  },
  {
    infectiousDisease: {
      0: {
        clinicName: "St. Paul Infectious Disease",
        street: "1959 Sloan Place Suite 200",
        city: "St. Paul",
        state: "MN",
        zipcode: "55117",
        phone: "(651) 772-6235",
      },
    },
  },
  {
    kidneyRenal: {
      0: {
        clinicName: "Kidney Disease & Critical Care Associates PA",
        street: "2085 Rice Street",
        city: "Roseville",
        state: "MN",
        zipcode: "55113",
        phone: "(651) 489-9035",
      },
      1: {
        clinicName: "HealthPartners Speciality Center Kidney Specialist",
        street: "401 Phalen Boulevard",
        city: "St. Paul",
        state: "MN",
        zipcode: "55130",
        phone: "(651) 254-7670",
      },
    },
  },
  {
    obgynInfertility: {
      0: {
        clinicName: "Metro Partners",
        street: "1655 Beam Avenue",
        city: "St. Paul",
        state: "MN",
        zipcode: "55109",
        phone: "(651) 770-1385",
      },
      1: {
        clinicName: "Infertility Midwest Center for Repoductive Health",
        street: "12000 Elm Creek Boulevard North #350",
        city: "Maple Grove",
        state: "MN",
        zipcode: "55369",
        phone: "(763) 494-7700",
      },
      2: {
        clinicName: "Reproductive Medicine & Infertility Associates",
        street: "2101 Woodwinds Drive Suite #100",
        city: "Woodbury",
        state: "MN",
        zipcode: "55125",
        phone: "(651) 222-6050",
      },
    },
  },
  {
    opthmaologist: {
      0: {
        clinicName: "St. Paul Eye Clinic",
        street: "1675 Beam Avenue Suite 100",
        city: "Maplewood",
        state: "MN",
        zipcode: "55109",
        phone: "(651) 738-6500",
      },
      1: {
        clinicName: "Lexington Eye Associates",
        street: "393 Dunlap Street North Suite 725",
        city: "St. Paul",
        state: "MN",
        zipcode: "55104",
        phone: "(651) 646-7419",
      },
      2: {
        clinicName: "HealthPartners Regions Specialty Clinic Eye Clinic",
        street: "401 Phalen Boulevard",
        city: "St. Paul",
        state: "MN",
        zipcode: "55130",
        phone: "(952) 967-7611",
      },
    },
  },
  {
    optometrist: {
      0: {
        clinicName: "Capital Eye Clinic, Dr. See Xiong",
        street: "941 Payne Avenue",
        city: "St. Paul",
        state: "MN",
        zipcode: "55130",
        phone: "(651) 842-8040",
      },
      1: {
        clinicName: "Dr. Ger Vue",
        street: "1165 Arcade Street",
        city: "St. Paul",
        state: "MN",
        zipcode: "55106",
        phone: "(651) 414-0428",
      },
    },
  },
  {
    orthopedics: {
      0: {
        clinicName: "Summit Orthopedics",
        street: "3580 Arcade Street",
        city: "Vadnais Heights",
        state: "MN",
        zipcode: "55127",
        phone: "(651) 968-5201",
      },
      1: {
        clinicName: "Twin Cities Orthopedics",
        street: "9630 Grove Circle North, Suite 200",
        city: "Maple Grove",
        state: "MN",
        zipcode: "55369",
        phone: "(763) 520-7870",
      },
    },
  },
  {
    painClinic: {
      0: {
        clinicName: "Noran Clinic",
        street: "1655 Beam Avenue, Suite 209",
        city: "Maplewood",
        state: "MN",
        zipcode: "55109",
        phone: "(612) 879-1000",
      },
      1: {
        clinicName: "United Pain Center",
        street: "280 Smith Avenue North, Suite 600",
        city: "St. Paul",
        state: "MN",
        zipcode: "55102",
        phone: "(651) 241-7245",
      },
      2: {
        clinicName: "Health Partners Specialty Center Pain Management",
        street: "401 Phalen Boulevard",
        city: "St. Paul",
        state: "MN",
        zipcode: "55130",
        phone: "(651) 254-7772",
      },
      3: {
        clinicName: "Twin Cities Pain Clinic",
        street: "650 Commerce Drive Suite 153",
        city: "Woodbury",
        state: "MN",
        zipcode: "55125",
        phone: "(952) 841-2345",
      },
    },
  },
  {
    psychologistPsychiatrist: {
      0: {
        clinicName: "Xiong Pao Moua, Life Medical PA Hmong Counseling Services",
        street: "1654 Rice Street, Suite 202",
        city: "St. Paul",
        state: "MN",
        zipcode: "55117",
        phone: "(651) 528-6169",
      },
      1: {
        clinicName: "Dr Alyssa Kaying Vang, AKV Psychological & Consulting Services",
        street: "2165 Woodlane Drive, Suite 201",
        city: "Woodbury",
        state: "MN",
        zipcode: "55125",
        phone: "(651) 504-3381",
      },
      2: {
        clinicName: "Natalis Counseling & Psychology Solutions",
        street: "1600 University Avenue West, #12",
        city: "St. Paul",
        state: "MN",
        zipcode: "55104",
        phone: "(651) 379-5157",
      },
    },
  },
  {
    sleep: {
      0: {
        clinicName: "United Lung and Sleep Clinic",
        street: "225 North Smith Avenue, Suite 501",
        city: "St. Paul",
        state: "MN",
        zipcode: "55102",
        phone: "(651) 726-6200",
      },
      1: {
        clinicName: "HealthPartners Speciality Center Lung & Sleep Health",
        street: "401 Phalen Boulevard",
        city: "St. Paul",
        state: "MN",
        zipcode: "55130",
        phone: "(952) 967-7616",
      },
      2: {
        clinicName: "North Memorial Sleep Health Center in Maple Grove",
        street: "13800 83rd Way North, Suite 202",
        city: "Maple Grove",
        state: "MN",
        zipcode: "55369",
        phone: "(763) 581-5050",
      },
    },
  },
  {
    urgentCareClinic: {
      0: {
        clinicName: "EZY Urgent Care, Ramon Nola MD",
        street: "1001 Johnson Parkway B13",
        city: "St. Paul",
        state: "MN",
        zipcode: "55106",
        phone: "(651) 646-0028",
      },
      1: {
        clinicName: "The Urgency Room",
        street: "1159 East County Road East",
        city: "Vadnais Heights",
        state: "MN",
        zipcode: "55110",
        phone: "(651) 789-6500",
        openTime: "08",
        closeTime: "22",
      },
      2: {
        clinicName: "The Urgency Room",
        street: "7030 Valley Creek Plaza",
        city: "Woddbury",
        state: "MN",
        zipcode: "55125",
        phone: "(651) 789-7000",
        openTime: "08",
        closeTime: "22",
      },
      3: {
        clinicName: "Alina Health Maplewood Clinic Urgent Care",
        street: "1850 Beam Avenue",
        city: "Maplewood",
        state: "MN",
        zipcode: "55109",
        phone: "(651) 241-9500",
        openTime: {
          weekday: "15",
          weekend: "09",
        },
        closeTime: {
          weekday: "22",
          weekend: "17",
        },
      },
    },
  },
  {
    urology: {
      0: {
        clinicName: "Metro Urology",
        street: "1655 Beam Avenue",
        city: "Maplewood",
        state: "MN",
        zipcode: "55109",
        phone: "(651) 999-6896",
      },
      1: {
        clinicName: "Health Partners Specialty Center Urology",
        street: "435 Phalen Boulevard",
        city: "St. Paul",
        state: "MN",
        zipcode: "55130",
        phone: "(651) 254-8500",
      },
      2: {
        clinicName: "Pediatric Surgical Associates LTD",
        street: "347 North Smith Avenue, Suite 502",
        city: "St. Paul",
        state: "MN",
        zipcode: "55102",
        phone: "(612) 813-8000",
      },
    },
  },
  {
    homeHealthCareAgency: {
      0: {
        clinicName: "V-Care Home Health Corporation",
        street: "1049 Payne Ave",
        city: "St. Paul",
        state: "MN",
        zipcode: "55130",
        phone: "(651) 793-7635",
      },
      1: {
        clinicName: "Disabled Home Care",
        street: "1086 Rice Street",
        city: "St. Paul",
        state: "MN",
        zipcode: "55117",
        phone: "(651) 292-8705",
      },
    },
  },
];
