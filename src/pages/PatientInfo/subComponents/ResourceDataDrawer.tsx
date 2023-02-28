import React, { Dispatch, SetStateAction } from "react";

import { Cancel } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Divider,
} from "@mui/material";

import { IResourceCategoryRender } from "../utils/interfacesTypes";
import { ResourceItem } from "./ResourceItem";

export interface ResourceDataDrawerProps {
  whichResourceToShow: IResourceCategoryRender;
  isResourceChosen: boolean;
  setIsResourceChosen: Dispatch<SetStateAction<boolean>>;
}

export const ResourceDataDrawer: React.FC<ResourceDataDrawerProps> = (
  props
) => {
  const { whichResourceToShow, isResourceChosen, setIsResourceChosen } = props;

  const title = whichResourceToShow.resourceCategory.replaceAll("-", " ");

  const toggleDrawer = () => {
    if (isResourceChosen) setIsResourceChosen(false);
    else setIsResourceChosen(true);
  };

  const list = () => (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <ListItem>
        <ListItemButton>
          {title} <Cancel onClick={toggleDrawer} />
        </ListItemButton>
      </ListItem>
      <Divider />
      <List>
        <ResourceItem whichResourceToShow={whichResourceToShow}></ResourceItem>
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor={"right"}
        open={isResourceChosen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100vw" },
        }}
      >
        {list()}
      </Drawer>
    </>
  );
};
