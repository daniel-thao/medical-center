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
}

export interface NavItemLinks {
  display: React.ReactNode;
  href: string;
  newWindow?: string;
}

const navItems: NavItemLinks[] = [
  {
    display: (
      <Box className={css["athena-item"]}>
        <img className={css["athena-logo"]} src="./athenaHealthLogo.png" />{" "}
        <span>Login</span>
      </Box>
    ),
    href: "https://athenanet.athenahealth.com/1/47/login.esp",
    newWindow: "_blank",
  },
  {
    display: (
      <Box className={css["athena-item"]}>
        <img className={css["athena-logo"]} src="./athenaHealthLogo.png" />{" "}
        <span>Pay</span>
      </Box>
    ),
    href: "https://payment.patient.athenahealth.com/statement/?src=statement",
    newWindow: "_blank",
  },
  { display: "Home", href: "/", newWindow: "" },
  { display: "Patient Information", href: "/patient-info", newWindow: "" },
  { display: "Immigration Exams", href: "/immigration-info", newWindow: "" },
  { display: "Providers Information", href: "/providers-info", newWindow: "" }
];

export const NavBase: React.FC<NavBaseProps> = (props) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer: React.ReactNode = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", width: "100%" }}
    >
      <Box className={css["nav-hamburger-menu-title"]}>
        <Typography variant="h6">St. Paul Family Center</Typography>
        <Cancel></Cancel>
      </Box>

      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton>
              <Link
                className={css["links"]}
                to={item.href}
                target={item.newWindow}
                onClick={() => window.scrollTo(0,0)}
              >
                <ListItemText primary={item.display} />
                <ArrowCircleRight
                  onClick={handleDrawerToggle}
                ></ArrowCircleRight>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
              <img
                className={`${css["logo"]}`}
                src="./ClinicLogoDarker.png"
                alt="Logo"
              ></img>
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
