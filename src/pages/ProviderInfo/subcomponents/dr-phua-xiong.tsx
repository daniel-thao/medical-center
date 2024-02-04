import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { TextBlock } from '../../../components/globalMolecules/TextBlock/TextBlock';

import css from '../ProviderInfoContainer.module.css';

export interface DrPhuaXiongProps {
  imageCSSRender: string;
  value: number;
  pointer: number;
}

export const DrPhuaXiong: React.FC<DrPhuaXiongProps> = (props) => {
  const { imageCSSRender, value, pointer } = props;

  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (value === pointer) setAnimationClass(css['active']);
    else if (value > pointer) setAnimationClass('inactive-right');
    else if (value < pointer) setAnimationClass('inactive-left');
  }, [value, pointer]);

  return (
    <Grid container columnSpacing={6} rowGap={12} className={`${css['provider']} ${value === pointer ? "" : css["hidden"]} ${css[animationClass]}`}>
      <Grid item xs={6} className={css['photo-container-one']}>
        <img alt="provider-01" className={imageCSSRender} src="./_MG_6147.png"></img>
      </Grid>

      <Grid item xs={6} className={css['tab-panel-text-formatting']}>
        <TextBlock body={'Dr. Phua Xiong'} classification={'title'} className={css['provider-one']} />

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
      </Grid>

      <Grid item xs={6} className={css['tab-panel-text-formatting']}>
        <TextBlock body={'A Servant Leader'} classification={'title'} className={css['provider-one']} />

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
      </Grid>

      <Grid item xs={6} className={css['photo-container-one']}>
        <img alt="provider-01" className={imageCSSRender} src="./_MG_6147.png"></img>
      </Grid>

      <Grid item xs={6} className={css['photo-container-one']}>
        <img alt="provider-01" className={imageCSSRender} src="./_MG_6147.png"></img>
      </Grid>

      <Grid item xs={6} className={css['tab-panel-text-formatting']}>
        <TextBlock body={'A Giver'} classification={'title'} className={css['provider-one']} />

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
      </Grid>
    </Grid>
  );
};
