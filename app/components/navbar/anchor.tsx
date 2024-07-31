import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, Typography } from '@mui/material';

import theme from '@/app/theme/theme';
import { LogoDarkIcon } from '@/app/assets/icons';

interface AnchorTemporaryDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function AnchorTemporaryDrawer({
  open,
  onClose,
}: AnchorTemporaryDrawerProps) {
  const list = (
    <Box
      sx={{ width: 'auto', marginTop: '62px' }}
      role='presentation'
      onClick={onClose}
      onKeyDown={onClose}
    >
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        sx={{
          backgroundColor: '#EEF2F3',
          paddingTop: '20px',
          paddingBottom: '20px',
          paddingRight: '12px',
          paddingLeft: '12px',

          borderBottomWidth: '1px',
          borderBottomColor: '#E0E4E7',
          borderBottomStyle: 'solid',
        }}
      >
        <LogoDarkIcon />

        <Typography sx={{ paddingLeft: '12px' }}>ACME Corporation</Typography>
      </Box>
      <List sx={{ padding: 0 }}>
        {['PESQUISAS', 'CRÉDITOS', 'CAMPANHAS', 'EQUIPE', 'CONFIGURAÇÕES'].map(
          (text) => (
            <ListItem
              key={text}
              disablePadding
              sx={{
                borderBottomWidth: '1px',
                borderBottomColor: '#E0E4E7',
                borderBottomStyle: 'solid',
              }}
            >
              <ListItemButton>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    sx: { fontSize: '0.875rem', fontWeight: '500' },
                  }}
                  sx={{
                    textAlign: 'center',

                    color: '#8A9099',
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        paddingTop='30px'
        paddingBottom='30px'
      >
        <Typography fontWeight='bold'>Adriano Lima</Typography>
        <Typography color='#8A9099'>adriano.lima@quintoandar.com.br</Typography>

        <Button
          variant='text'
          sx={{
            marginTop: '28px',
            paddingTop: '14px',

            paddingRight: '64px',
            paddingLeft: '64px',

            borderTopWidth: 1,
            borderTopColor: '#E0E4E7',
            borderTopStyle: 'solid',
            borderRadius: 0,

            fontSize: 16,
            fontWeight: '300',

            textDecoration: 'none',
            textTransform: 'none',

            color: 'black',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );

  return (
    <Drawer
      anchor='top'
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { boxShadow: 'none' } }}
      sx={{ [theme.breakpoints.up('tablet')]: { display: 'none' } }}
    >
      {list}
    </Drawer>
  );
}
