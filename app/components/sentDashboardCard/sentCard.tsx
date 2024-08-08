import { Box, Typography } from '@mui/material';

export function SentDashboardCard() {
  return (
    <Box
      sx={{
        border: '1px solid #E0E4E7',
        backgroundColor: '#FFF',

        display: 'flex',
        flexGrow: 1,

        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',

          flexGrow: 1,

          paddingTop: '12px',
          paddingBottom: '12px',
          paddingLeft: '18px',

          borderBottom: '1px solid #E0E4E7',
        }}
      >
        +<Typography sx={{ fontSize: 12 }}>DISPAROS</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',

          alignItems: 'flex-start',

          paddingLeft: '28px',
          paddingRight: '22px',

          paddingTop: '22px',
          paddingBottom: '22px',
        }}
      >
        <Box
          sx={{
            display: 'flex',

            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: 38,
              fontWeight: 'bold',
              lineHeight: 0,
            }}
          >
            2.000
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              color: '#8A9099',
            }}
          >
            /50.000
          </Typography>
        </Box>
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
          Disparos feitos
        </Typography>
        <Box
          sx={{
            height: '38px',
            width: '100%',

            border: '1px solid #E0E4E7 ',
            borderRadius: '4px',

            display: 'flex',

            justifyContent: 'center',
            marginTop: '24px',
          }}
        >
          <Typography
            sx={{
              alignContent: 'center',
              fontSize: 12,
              fontWeight: 'bold',
            }}
          >
            IR PARA CAMPANHAS
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
