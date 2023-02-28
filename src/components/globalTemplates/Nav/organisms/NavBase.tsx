import React, { useState } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  FormControl,
  Input,
} from "@mui/material";
import { Menu, Search, ArrowCircleRight } from "@mui/icons-material";
import { Cancel } from "@mui/icons-material";

import css from "./NavBase.module.css";

interface NavBaseProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export interface NavItemLinks {
  display: string;
  href: string;
}

const navItems: NavItemLinks[] = [
  { display: "Home", href: "/" },
  { display: "Patient Information", href: "/patient-info" },
];

export const NavBase: React.FC<NavBaseProps> = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer: React.ReactNode = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", width: "100%" }}>
      <Box className={css["nav-hamburger-menu-title"]}>
        <Typography variant="h6">St. Paul Family Center</Typography>
        <Cancel></Cancel>
      </Box>

      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton>
              <Link className={css["links"]} to={item.href}>
                <ListItemText primary={item.display} />
                <ArrowCircleRight onClick={handleDrawerToggle}></ArrowCircleRight>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar className={css["nav-app-bar"]} component="nav">
        <Toolbar className={css["nav-toolbar"]}>
          <IconButton
            className={css["nav-hamburger-menu"]}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Link to="/">
              <img className={`${css["logo"]}`} src="./ClinicLogoDarker.png" alt="Logo"></img>
            </Link>
          </Box>

          <Box className={css["nav-searchbar"]}>
            <Search className={css["nav-searchbar-icon"]}></Search>

            <FormControl fullWidth={true}>
              <Input
                id="Searchbar"
                name="Searchbar"
                aria-label="Searchbar"
                aria-describedby="my-helper-text"
                disableUnderline={true}
                fullWidth={true}
                placeholder="Search..."
                type="text"
              />
            </FormControl>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <Button key={item.href}>
                <Link className={css["links"]} to={item.href}>
                  {item.display}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100vw" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
