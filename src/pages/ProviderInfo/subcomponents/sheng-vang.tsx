import { Grid, useMediaQuery } from '@mui/material';
import React, { forwardRef, useEffect, useState } from 'react';
import { TextBlock, TextBlockClassification } from '../../../components/globalMolecules/TextBlock/TextBlock';

import css from '../ProviderInfoContainer.module.css';

export interface ShengVangProps {
  imageCSSRender: string;
  value: number;
  pointer: number;
}

export const ShengVang = forwardRef<any, ShengVangProps>((props, ref) => {
  const { imageCSSRender, value, pointer } = props;

  const phoneWidth = useMediaQuery('(max-width:450px)');
  const tabletWidth = useMediaQuery('(max-width:899px)');
  const laptopWidth = useMediaQuery('(max-width:1250px)');

  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (value === pointer) setAnimationClass(css['active']);
    else if (value > pointer) setAnimationClass('inactive-right');
    else if (value < pointer) setAnimationClass('inactive-left');
  }, [value, pointer]);

  return (
    <Grid ref={ref} container columnSpacing={6} rowGap={{ xs: 2, sm: 4, md: 12 }} className={`${css['provider']} ${value === pointer ? '' : css['hidden']} ${css[animationClass]}`}>
      <Grid item xs={12} sm={12} md={6} lg={6} className={css['photo-container-one']}>
        <img alt="provider-01" className={imageCSSRender} src="./_MG_6147.png"></img>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} className={css['photo-container-one']}>
        <TextBlock body={'Sheng Vang'} classification={TextBlockClassification.title} className={css['provider-one']} />

        <TextBlock
          body={`Nyob Zoo, My name is Paahoua Vang. I am a FNP with my DNP from the University of Wisconsin Oshkosh. I was born and raised in Milwaukee, Wisconsin and relocated to Minnesota in 2021. I have experience working with patients with orthopedic complaints and emergency and trauma concerns.`}
          classification={TextBlockClassification.paragraph}
          className={css['provider-one-paragraph']}
        />
      </Grid>

      {phoneWidth && tabletWidth && (
        <Grid item xs={12} sm={12} md={6} lg={6} className={css['photo-container-one']}>
          <img alt="provider-01" className={imageCSSRender} src="./_MG_6147.png"></img>
        </Grid>
      )}

      <Grid item xs={12} sm={12} md={6} lg={6} className={css['photo-container-one']}>
        <TextBlock body={'Your Life, Your Health'} classification={TextBlockClassification.title} className={css['provider-one']} />

        <TextBlock
          body={`As a CNP, I value preventative and holistic care practices. I strive to utilize evidence based practice with every decision I make as a practitioner. A saying I live by is, “If you fail today, you have tomorrow to try again.” I think we all should have that mentality when it comes to caring for our bodies. Small changes can lead to big results.`}
          classification={TextBlockClassification.paragraph}
          className={css['provider-one-paragraph']}
        />
      </Grid>

      {!phoneWidth && !tabletWidth && (
        <Grid item xs={12} sm={12} md={6} lg={6} className={css['photo-container-one']}>
          <img alt="provider-01" className={imageCSSRender} src="./_MG_6147.png"></img>
        </Grid>
      )}

      <Grid item xs={12} sm={12} md={6} lg={6} className={css['photo-container-one']}>
        <img alt="provider-01" className={imageCSSRender} src="./_MG_6147.png"></img>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} className={css['photo-container-one']}>
        <TextBlock body={'The North Star'} classification={TextBlockClassification.title} className={css['provider-one']} />

        <TextBlock body={`I look forward to meeting you and helping you be the best version of yourself.`} classification={TextBlockClassification.paragraph} className={css['provider-one-paragraph']} />
      </Grid>
    </Grid>
  );
});
