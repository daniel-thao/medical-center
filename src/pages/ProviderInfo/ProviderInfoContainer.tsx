import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Box, Grid, useMediaQuery } from '@mui/material';

import css from './ProviderInfoContainer.module.css';
import { TextBlock } from '../../components/globalMolecules/TextBlock/TextBlock';
import { DrPhuaXiong } from './subcomponents/dr-phua-xiong';
import { PaahouaVang } from './subcomponents/paahoua-vang';
import { ShengVang } from './subcomponents/sheng-vang';

export interface ProviderInfoProps { }

export const ProviderInfoContainer: React.FC<ProviderInfoProps> = () => {
  const phoneWidth = useMediaQuery('(max-width:450px)');
  const tabletWidth = useMediaQuery('(max-width:899px)');
  const laptopWidth = useMediaQuery('(max-width:1250px)')

  const imageCSSRender = useMemo(() => {
    if (phoneWidth && tabletWidth) {
      return css['image-general-format'];
    }

    if (tabletWidth) {
      return css['tablet-general-format'];
    }

    return css['desktop-image-format'];
  }, [phoneWidth, tabletWidth]);

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
  }, [providerOne, providerTwo, providerThree, whichProviderID, tabletWidth, phoneWidth, laptopWidth])

  return (
    <div className={`global-font ${css['landing-container']}`}>

      <Box className={css['container']}>
        <TextBlock classification="title" body="Meet Our Care Team" className={css['title']}></TextBlock>

        {(phoneWidth && tabletWidth) && <Grid container className={css["provider-tab-list"]}>
          <Grid container item xs={12} sx={{ justifyContent: 'center' }}>
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
        </Grid>}

        {(!phoneWidth && tabletWidth) && <Grid container className={css["provider-tab-list"]}>
          <Grid container item xs={12} sx={{ justifyContent: 'center' }}>
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
        </Grid>}

        {(!phoneWidth && !tabletWidth) && <Grid container className={css["provider-tab-list"]}>
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
        </Grid>}

        <Box className={css['provider-container']} sx={{ height: offsetHeight }}>
          <DrPhuaXiong ref={providerOne} imageCSSRender={imageCSSRender} value={1} pointer={whichProviderID}></DrPhuaXiong>
          <PaahouaVang ref={providerTwo} imageCSSRender={imageCSSRender} value={2} pointer={whichProviderID}></PaahouaVang>
          <ShengVang ref={providerThree} imageCSSRender={imageCSSRender} value={3} pointer={whichProviderID}></ShengVang>
        </Box>
      </Box>
    </div>
  );
};