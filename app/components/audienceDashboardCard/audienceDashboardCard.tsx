import { ArrowRightIcon } from '@/app/assets/icons/arrowRight';
import { Box, IconButton, Typography } from '@mui/material';

export function AudienceDashboardCard() {
  return (
    <Box
      sx={{
        border: '1px solid #E0E4E7',
        backgroundColor: '#FFF',

        display: 'flex',
        flexGrow: 1,

        flexDirection: 'column',

        marginTop: { mobile: '32px', lg: '0px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',

          flexGrow: 1,

          paddingTop: '12px',
          paddingLeft: '18px',

          borderBottom: '1px solid #E0E4E7',
        }}
      >
        +<Typography sx={{ fontSize: 12 }}>AUDIÊNCIA</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',

          justifyContent: 'space-between',
          alignItems: 'center',

          paddingLeft: '28px',
          paddingRight: '22px',

          paddingTop: '22px',
          paddingBottom: '22px',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 38,
              fontWeight: 'bold',
            }}
          >
            4.644
          </Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
            Contatos
          </Typography>
        </Box>
        <IconButton
          sx={{
            paddingTop: '18px',
            paddingBottom: '18px',

            paddingLeft: '14px',
            paddingRight: '14px',

            borderRadius: '4px',
            border: '1px solid #E0E4E7',
          }}
        >
          <ArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
