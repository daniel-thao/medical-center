import React from 'react';

import { Footer } from '../../components/globalTemplates/Footer/Footer';

import css from './ImmigrationInfoContainer.module.css';
import { Box, Grid, Link as LinkMUI } from '@mui/material';
import { TextBlock, TextBlockClassification } from '../../components/globalMolecules/TextBlock/TextBlock';
import { servicesOffered, commonConditions, healthServices } from './data';


export interface ImmigrationInfoProps { }

export const ImmigrationInfoContainer: React.FC<ImmigrationInfoProps> = () => {
  return (
    <div className={`global-font ${css['landing-container']}`}>
      <Grid container className={css["init-section"]}>
        <Grid item xs={3}></Grid>

        <Grid container item xs={6} sx={{ justifyContent: 'space-between' }}>
          <TextBlock
            classification={TextBlockClassification.title}
            className={css["init-title"]}
            body={<>Immigrations <LinkMUI target="_blank" href="https://www.uscis.gov/i-693">USCIS</LinkMUI></>}
          />

          <TextBlock
            classification={TextBlockClassification.paragraph}
            body={
              'We are a PRIMARY CARE family practice clinic serving all ages from newborn babies to the elderly. We are here to serve you and your entire family of all ages.'
            }
            sx={{ mb: 2 }}
          />
          <TextBlock
            classification={TextBlockClassification.paragraph}
            body={
              'Over the past twenty years, we have served families from grandparents, to parents, to children and grandchildren. We have established special relationships with the families that continue to see us as partners in their health and wellbeing.'
            }
            sx={{ mb: 2 }}
          />
          <TextBlock
            classification={TextBlockClassification.paragraph}
            body={
              'We care for people who need treatment for acute illnesses as well as those who have chronic medical conditions such as diabetes, high blood pressure, high cholesterol, gout, kidney diseases, etc. We pride ourselves in providing excellent culturally-responsive compassionate medical care and improving the health of our patients.  We invest time and effort in educating and counseling our patients ensuring that they understand the conditions as well as the recommendations.  We believe we have made a difference in the lives of our patients.'
            }
            sx={{ mb: 2 }}
          />
          <TextBlock
            classification={TextBlockClassification.paragraph}
            body={
              'We are a certified Health Care Home, which means that we put the patient at the forefront of care. We believe patients and their families are important partners in their health and well-being.  Therefore we involve patients and family members in medical decision making and incorporate their input and perspectives into individualized care plans.'
            }
            sx={{ mb: 2 }}
          />
          <TextBlock
            classification={TextBlockClassification.paragraph}
            body={
              'We value the ethnic communities in Minnesota and take pride in serving them, understanding that their cultural values, religious convictions, and socioeconomic status greatly affect their views, choices, and access to care.   As a woman and minority-owned private medical clinic, we understand the barriers minorities and women face, especially in the healthcare system.  We strive to make your experience with us a pleasant one.'
            }
            sx={{ mb: 2 }}
          />
        </Grid>

        <Grid item xs={3}></Grid>

      </Grid>

      <TextBlock classification={TextBlockClassification.title} body="Services Offered" className={css['section']} />

      <Grid container spacing={2} sx={{ mb: 10 }}>
        <Grid item xs={3}></Grid>

        <Grid container item xs={6} sx={{ justifyContent: 'space-between' }}>
          <Grid container item xs={4}>
            {servicesOffered.column1.map((topic, index) => {
              let opacity = topic === 'Placeholder' ? { opacity: 0 } : { opacity: 1 };
              const newSx = { ...opacity };

              return (
                <Grid item xs={12} sx={newSx} className={index === 0 ? css["column-title"] : css["column-body"]}>
                  {topic}
                </Grid>
              );
            })}
          </Grid>

          <Grid container item xs={4}>
            {servicesOffered.column2.map((topic, index) => {
              let opacity = topic === 'Placeholder' ? { opacity: 0 } : { opacity: 1 };
              const newSx = { ...opacity };

              return (
                <Grid item xs={12} sx={newSx} className={index === 0 ? css["column-title"] : css["column-body"]}>
                  {topic}
                </Grid>
              );
            })}
          </Grid>

          <Grid container item xs={4}>
            {servicesOffered.column3.map((topic, index) => {
              let opacity = topic === 'Placeholder' ? { opacity: 0 } : { opacity: 1 };
              const newSx = { ...opacity };

              return (
                <Grid item xs={12} sx={newSx} className={index === 0 ? css["column-title"] : css["column-body"]}>
                  {topic}
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>
      <TextBlock
        classification={TextBlockClassification.title}
        body="Common Conditions We Treat"
        className={css['section']}
        sx={{ mb: 1 }}
      />
      <TextBlock
        classification={TextBlockClassification.title}
        body="(This is not an exhaustive list)"
        className={css['section']}
        sx={{ mb: 8 }}
      />
      <Grid container spacing={2} sx={{ mb: 10 }}>
        <Grid item xs={3}></Grid>

        <Grid container item xs={6} sx={{ justifyContent: 'space-between' }}>
          <Grid container item xs={4}>
            {commonConditions.column1.map((topic, index) => {
              let opacity = topic === 'Placeholder' ? { opacity: 0 } : { opacity: 1 };
              const newSx = { ...opacity };

              return (
                <Grid item xs={12} sx={newSx} className={index === 0 ? css["column-title"] : css["column-body"]}>
                  {topic}
                </Grid>
              );
            })}
          </Grid>

          <Grid container item xs={4}>
            {commonConditions.column2.map((topic, index) => {
              let opacity = topic === 'Placeholder' ? { opacity: 0 } : { opacity: 1 };
              const newSx = { ...opacity };

              return (
                <Grid item xs={12} sx={newSx} className={index === 0 ? css["column-title"] : css["column-body"]}>
                  {topic}
                </Grid>
              );
            })}
          </Grid>

          <Grid container item xs={4}>
            {commonConditions.column3.map((topic, index) => {
              let opacity = topic === 'Placeholder' ? { opacity: 0 } : { opacity: 1 };
              const newSx = { ...opacity };

              return (
                <Grid item xs={12} sx={newSx} className={index === 0 ? css["column-title"] : css["column-body"]}>
                  {topic}
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>

        <Grid container item xs={6}>
          <Grid container item xs={4} rowSpacing={0}>
            {healthServices.column1.map((topic, index) => {
              let opacity = topic === 'Placeholder' ? { opacity: 0 } : { opacity: 1 };
              const newSx = { ...opacity };

              return (
                <Grid item xs={12} sx={newSx} className={index === 0 ? css["column-title"] : css["column-body"]}>
                  {topic}
                </Grid>
              );
            })}
          </Grid>

          <Grid container item xs={4} rowSpacing={0} spacing={0}>
            {healthServices.column2.map((topic, index) => {
              let opacity = topic === 'Placeholder' ? { opacity: 0 } : { opacity: 1 };
              const newSx = { ...opacity };

              return (
                <Grid item xs={12} sx={newSx} className={index === 0 ? css["column-title"] : css["column-body"]}>
                  {topic}
                </Grid>
              );
            })}
          </Grid>

          <Grid container item xs={4}>
            {healthServices.column3.map((topic, index) => {
              let opacity = topic === 'Placeholder' ? { opacity: 0 } : { opacity: 1 };
              const newSx = { ...opacity };

              return (
                <Grid item xs={12} sx={newSx} className={index === 0 ? css["column-title"] : css["column-body"]}>
                  {topic}
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};
