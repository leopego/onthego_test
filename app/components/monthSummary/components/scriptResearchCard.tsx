import theme from '@/app/theme/theme';
import { Box, Card, Typography } from '@mui/material';

export function ScriptResearchCard() {
  return (
    <Card
      sx={{
        backgroundColor: '#242528',
        borderRadius: '4px',
        padding: '22px',

        [theme.breakpoints.up('lg')]: {
          width: '230px',
        },

        [theme.breakpoints.down('lg')]: {
          flex: 1,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Typography fontSize={30} color='#FFF' fontWeight='600'>
          300
        </Typography>
      </Box>

      <Typography
        fontSize={14}
        color='#8A9099'
        marginLeft='2px'
        marginBottom='42px'
        sx={{ wordBreak: 'break-word' }}
      >
        PESQUISAS EM <br />
        ROTEIRIZAÇÃO
      </Typography>
    </Card>
  );
}
