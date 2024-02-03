import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { TextBlock } from '../../../components/globalMolecules/TextBlock/TextBlock';

import css from '../ProviderInfoContainer.module.css';
import { DrPhuaXiong } from '../subcomponents/dr-phua-xiong';
import { PaahouaVang } from '../subcomponents/paahoua-vang';
import { ShengVang } from '../subcomponents/sheng-vang';

export interface ProviderInfoDesktopViewProps {
  imageCSSRender: string;
}

export const ProviderInfoDesktopView: React.FC<ProviderInfoDesktopViewProps> = (props) => {
  const { imageCSSRender } = props;
  const [whichProviderID, setWhichProviderID] = useState(1);

  const handleChange = (value: number) => {
    setWhichProviderID(value);
  };

  return (
    <Box className={css['container']}>
      <TextBlock classification="title" body="Meet Our Care Team" className={css['title']}></TextBlock>

      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid container item xs={6} gap={6} sx={{ justifyContent: 'center' }}>
          <Grid item xs={2} onClick={(e) => handleChange(1)}>
            Dr Phua Xiong
          </Grid>
          <Grid item xs={2} onClick={(e) => handleChange(2)}>
            Paahoua Vang
          </Grid>
          <Grid item xs={2} onClick={(e) => handleChange(3)}>
            Sheng Vang
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>

      <Box className={css['provider-container']}>
        <DrPhuaXiong imageCSSRender={imageCSSRender} value={1} pointer={whichProviderID}></DrPhuaXiong>
        <PaahouaVang imageCSSRender={imageCSSRender} value={2} pointer={whichProviderID}></PaahouaVang>
        <ShengVang imageCSSRender={imageCSSRender} value={3} pointer={whichProviderID}></ShengVang>
      </Box>
    </Box>
  );
};
