import React, { useEffect, useRef, useState } from 'react';
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
  const [offsetHeight, setOffsetHeight] = useState(0)

  const providerOne = useRef<any>(null)
  const providerTwo = useRef<any>(null)
  const providerThree = useRef<any>(null)


  const handleChange = (value: number) => {
    setWhichProviderID(value);
  };

  useEffect(() => {
    switch (whichProviderID) {
      case 1: {
        return setOffsetHeight(providerOne.current.offsetHeight)
      }
      case 2: {
        return setOffsetHeight(providerTwo.current.offsetHeight)
      }
      case 3: {
        return setOffsetHeight(providerThree.current.offsetHeight)
      }
      default: {
        return setOffsetHeight(0)
      }
    }
  }, [providerOne, providerTwo, providerThree, whichProviderID])

  return (
    <Box className={css['container']}>
      <TextBlock classification="title" body="Meet Our Care Team" className={css['title']}></TextBlock>

      <Grid container className={css["provider-tab-list"]}>
        <Grid item xs={3}></Grid>
        <Grid container item xs={6} sx={{ justifyContent: 'center' }}>
          <Grid item xs={4} className={css["provider-choice"]} onClick={(e) => handleChange(1)}>
            Dr Phua Xiong
          </Grid>
          <Grid item xs={4} className={css["provider-choice"]} onClick={(e) => handleChange(2)}>
            Paahoua Vang
          </Grid>
          <Grid item xs={4} className={css["provider-choice"]} onClick={(e) => handleChange(3)}>
            Sheng Vang
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>

      <Box className={css['provider-container']} sx={{ height: offsetHeight }}>
        <DrPhuaXiong ref={providerOne} imageCSSRender={imageCSSRender} value={1} pointer={whichProviderID}></DrPhuaXiong>
        <PaahouaVang ref={providerTwo} imageCSSRender={imageCSSRender} value={2} pointer={whichProviderID}></PaahouaVang>
        <ShengVang ref={providerThree} imageCSSRender={imageCSSRender} value={3} pointer={whichProviderID}></ShengVang>
      </Box>
    </Box>
  );
};
