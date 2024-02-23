import React, { Dispatch, SetStateAction } from 'react';

import { Cancel } from '@mui/icons-material';
import { AppBar, Box, Drawer, List, Toolbar, Typography } from '@mui/material';

import { IResourceCategoryRender } from '../../utils/interfacesTypes';
import { ResourceItem } from '../resource-item/ResourceItem';

import css from '../../PatientInfoContainer.module.css';

export interface ResourceDataDrawerProps {
  whichResourceToShow: IResourceCategoryRender;
  isResourceChosen: boolean;
  setIsResourceChosen: Dispatch<SetStateAction<boolean>>;
}

export const ResourceDataDrawer: React.FC<ResourceDataDrawerProps> = (props) => {
  const { whichResourceToShow, isResourceChosen, setIsResourceChosen } = props;

  const title = whichResourceToShow.resourceCategory.replaceAll('-', ' ');

  const toggleDrawer = () => {
    if (isResourceChosen) setIsResourceChosen(false);
    else setIsResourceChosen(true);
  };

  const list = () => (
    <Box className={css["list-container"]} sx={{ width: '100%' }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <AppBar className={css["appbar"]}>
        <Toolbar className={css['toolbar']}>
          <Typography variant="h1">{title}</Typography>
          <Cancel onClick={toggleDrawer} />
        </Toolbar>
      </AppBar>

      <Toolbar />
      <List>
        <ResourceItem whichResourceToShow={whichResourceToShow}></ResourceItem>
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor={'right'}
        open={isResourceChosen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100vw' }
        }}>
        {list()}
      </Drawer>
    </>
  );
};
