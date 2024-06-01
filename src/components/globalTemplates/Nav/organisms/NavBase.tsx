import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Box, IconButton, Toolbar, FormControl, Input, useMediaQuery } from '@mui/material';
import { Menu, Search } from '@mui/icons-material';
import { NavDrawer } from '../molecules/NavDrawer';

import css from './NavBase.module.css';

interface NavBaseProps {}

export const NavBase: React.FC<NavBaseProps> = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const phoneWidth = useMediaQuery('(max-width:450px)');
  const tabletWidth = useMediaQuery('(max-width:1060px)');

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar className={css['nav-app-bar']} component="nav">
        <Toolbar className={css['nav-toolbar']}>
          <IconButton
            className={css['nav-hamburger-menu']}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'flex' } }}>
            <Menu />
          </IconButton>

          <Box className={css['nav-searchbar']}>
            <Search className={css['nav-searchbar-icon']}></Search>

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

          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Link to="/">
              <img className={`${css['logo']}`} src="./ClinicLogoDarker.png" alt="Logo"></img>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <NavDrawer handleDrawerToggle={handleDrawerToggle} isDrawerOpen={isDrawerOpen}></NavDrawer>
    </Box>
  );
};
