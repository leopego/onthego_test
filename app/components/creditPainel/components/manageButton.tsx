import { Box, Typography } from '@mui/material';

interface ManageButtonProps {
  title: string;
}

export function ManageButton({ title }: ManageButtonProps) {
  return (
    <Box
      sx={{
        textAlign: 'center',

        backgroundColor: { mobile: '#000', lg: 'transparent' },

        paddingTop: { mobile: '16px', lg: '12px' },
        paddingBottom: { mobile: '16px', lg: '12px' },

        borderRadius: '4px',
        border: { mobile: '', lg: '1px solid #C9D1D6' },

        marginLeft: { mobile: '14px', lg: '20px', xl: '92px' },
        marginRight: { mobile: '14px', lg: '20px', xl: '92px' },

        marginTop: { mobile: '14px', lg: '18px', xl: '0px' },
      }}
    >
      <Typography
        sx={{
          fontSize: { mobile: 16, lg: 12 },
          fontWeight: '600',

          color: { mobile: '#FFF', lg: '#000' },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
