'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AnchorTemporaryDrawer from './anchor';
import {
  LogoIcon,
  NotificationAlertIcon,
  MenuHamburguerIcon,
  MenuCloseIcon,
  LogoDarkIcon,
  Dots,
} from '@/app/assets/icons';
import { NavLink } from './navLink';
import { Typography } from '@mui/material';
import { DotsIcon } from '@/app/assets/icons/dots';

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const theme = useTheme();
  const isAboveTablet = useMediaQuery(theme.breakpoints.up('tablet'));

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

          {!isDrawerOpen && (
            <IconButton
              onClick={handleOpenDrawer}
              color='inherit'
              sx={{
                paddingLeft: '18px',
                [theme.breakpoints.up('tablet')]: {
                  display: 'none',
                },
              }}
            >
              <MenuHamburguerIcon />
            </IconButton>
          )}

          {isDrawerOpen && (
            <IconButton
              onClick={handleCloseDrawer}
              color='inherit'
              sx={{
                paddingLeft: '18px',
                [theme.breakpoints.up('tablet')]: {
                  display: 'none',
                },
              }}
            >
              <MenuCloseIcon />
            </IconButton>
          )}

          <NavLink />
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
            [theme.breakpoints.up('tablet')]: {
              display: 'none',
            },
          }}
        >
          <NotificationAlertIcon />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            [theme.breakpoints.down('tablet')]: { display: 'none' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',

              borderWidth: 1,
              borderColor: '#242528',
              borderStyle: 'solid',
              borderRadius: '4px',

              paddingLeft: '12px',
              paddingRight: '12px',
              paddingTop: '6px',
              paddingBottom: '6px',
            }}
          >
            <LogoDarkIcon />

            <Typography sx={{ paddingLeft: '10px', fontSize: '14px' }}>
              ACME corporation
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: '24px',
              marginRight: '24px',
            }}
          >
            <Typography
              sx={{ fontSize: '14px' }}
              fontWeight='500'
              lineHeight={1.2}
            >
              Adriano Lima
            </Typography>
            <Typography
              lineHeight={1.2}
              sx={{ fontSize: '14px', color: '#8A9099' }}
            >
              adriano.lima@acmecorp.com
            </Typography>
          </Box>

          <DotsIcon />
        </Box>

        <AnchorTemporaryDrawer
          open={isDrawerOpen}
          onClose={handleCloseDrawer}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
