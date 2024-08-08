import theme from '@/app/theme/theme';
import { Box, Card, LinearProgress, Typography } from '@mui/material';

export function SentCard() {
  return (
    <Card
      sx={{
        backgroundColor: '#242528',
        borderRadius: '4px',
        padding: '22px',

        [theme.breakpoints.up('lg')]: {
          width: '230px',
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
          2.000
        </Typography>
        <Typography fontSize={18} color='#8A9099' marginLeft='2px'>
          /10.000
        </Typography>
      </Box>

      <Typography
        fontSize={14}
        color='#8A9099'
        marginLeft='2px'
        marginBottom='42px'
        sx={{ wordBreak: 'break-word' }}
      >
        DISPAROS <br /> FEITOS
      </Typography>

      <LinearProgress variant='determinate' value={25} />
    </Card>
  );
}
