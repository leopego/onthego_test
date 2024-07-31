'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AnchorTemporaryDrawer from './anchor';
import {
  LogoIcon,
  NotificationAlertIcon,
  MenuHamburguerIcon,
  MenuCloseIcon,
} from '@/app/assets/icons';

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: '#8A9099',
        borderBottomStyle: 'solid',
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: 62,
          justifyContent: 'space-between',
          paddingLeft: '14px',
          paddingRight: '14px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <LogoIcon />

          {!isDrawerOpen ? (
            <IconButton
              onClick={handleOpenDrawer}
              color='inherit'
              sx={{ paddingLeft: '18px' }}
            >
              <MenuHamburguerIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={handleCloseDrawer}
              color='inherit'
              sx={{ paddingLeft: '18px' }}
            >
              <MenuCloseIcon />
            </IconButton>
          )}
        </Box>

        <Box
          sx={{
            width: 44,
            height: 44,
            backgroundColor: '#333333',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            borderRadius: 22,
          }}
        >
          <NotificationAlertIcon />
        </Box>
      </Toolbar>
      <AnchorTemporaryDrawer open={isDrawerOpen} onClose={handleCloseDrawer} />
    </AppBar>
  );
}
export default Navbar;
