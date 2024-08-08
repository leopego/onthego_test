import { Box, Typography } from '@mui/material';

export function NotificationHeader() {
  return (
    <Box
      sx={{
        backgroundColor: 'pink',

        paddingLeft: '24px',
        paddingTop: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',

          marginBottom: '44px',
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          Atualizações
        </Typography>
        <Box
          sx={{
            backgroundColor: '#FF5D55',

            justifyContent: 'center',
            alignItems: 'center',

            display: 'flex',

            paddingLeft: '14px',
            paddingRight: '14px',

            borderRadius: '14px',

            marginLeft: '8px',
          }}
        >
          <Typography sx={{ fontSize: 16, fontWeight: 'bold', color: '#FFF' }}>
            3
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          borderBottomWidth: 4,
          borderBottomStyle: 'solid',

          fontSize: '12px',
          fontWeight: 'bold',

          color: '#FF5D55',
        }}
        width={'42px'}
      >
        TODAS
      </Typography>
    </Box>
  );
}
