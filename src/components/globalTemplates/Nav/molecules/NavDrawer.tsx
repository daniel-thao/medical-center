import { Link, generatePath } from 'react-router-dom';

import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { ArrowCircleRight, Cancel } from '@mui/icons-material';

import css from './NavDrawer.module.css';

export interface NavDrawerProps {
  handleDrawerToggle: () => void;
  isDrawerOpen: boolean;
}

export interface NavItemLinks {
  display: React.ReactNode;
  href: string;
  newWindow?: string;
}

const navItems: NavItemLinks[] = [
  {
    display: (
      <Box className={css['athena-item']}>
        Patient Portal Login
        {/* <img className={css["athena-logo"]} src="./athenaHealthLogo.png" />{" "} */}
        {/* <span>Patient Portal</span> */}
      </Box>
    ),
    href: 'https://12803.portal.athenahealth.com/',
    newWindow: '_blank'
  },
  {
    display: (
      <Box className={css['athena-item']}>
        Pay Bill
        {/* <img className={css["athena-logo"]} src="./athenaHealthLogo.png" />{" "} */}
        {/* <span>Pay</span> */}
      </Box>
    ),
    href: 'https://payment.patient.athenahealth.com/statement/?src=statement',
    newWindow: '_blank'
  },
  { display: 'Home', href: '/', newWindow: '' },
  { display: 'Patient Information', href: '/patient-info', newWindow: '' },
  { display: 'Immigration Exams', href: '/immigration-info', newWindow: '' },
  { display: 'Providers Information', href: '/providers-info', newWindow: '' }
];

export const NavDrawer: React.FC<NavDrawerProps> = (props) => {
  const { handleDrawerToggle, isDrawerOpen } = props;

  return (
    <Box>
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: '390px' }
          }
        }}>
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: '100%' }}>
          <Box className={css['nav-hamburger-menu-title']}>
            <Typography variant="h6">St. Paul Family Center</Typography>
            <Cancel></Cancel>
          </Box>

          <Divider />

          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton>
                  <Link
                    className={css['links']}
                    to={generatePath(item.href)}
                    target={item.newWindow}
                    onClick={() => window.scrollTo(0, 0)}>
                    <ListItemText primary={item.display} />
                    <ArrowCircleRight onClick={handleDrawerToggle}></ArrowCircleRight>
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
