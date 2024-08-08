'use client';

import theme from '@/app/theme/theme';
import { Box, Typography } from '@mui/material';

import { FieldResearchCard } from './components/fieldResearchCard';
import { ScriptResearchCard } from './components/scriptResearchCard';
import { SentCard } from './components/sentCard';
import { NewSearchCard } from './components/newSearchCard';

export function MonthSummary() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,

        justifyContent: 'space-between',

        paddingTop: '22px',
        paddingBottom: '22px',
        paddingRight: { xl: '0px', mobile: '14px', lg: '14px' },

        paddingLeft: '162px',

        [theme.breakpoints.down('lg')]: {
          paddingLeft: '14px',

          flexDirection: 'column',
        },

        backgroundColor: '#000',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography fontSize={10} color='#FFF' fontWeight={'300'}>
          RESUMO MENSAL
        </Typography>
        <Typography fontSize={22} color='#FFF' fontWeight={'600'}>
          JANEIRO, 2023
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '14px',
            marginTop: '16px',

            [theme.breakpoints.down('lg')]: {
              flexDirection: 'column',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '14px',
            }}
          >
            <FieldResearchCard />
            <ScriptResearchCard />
          </Box>

          <SentCard />
        </Box>
      </Box>

      <NewSearchCard />
    </Box>
  );
}
