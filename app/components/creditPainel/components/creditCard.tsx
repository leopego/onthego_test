import { Box, BoxProps, Typography } from '@mui/material';

interface CreditCardProps extends BoxProps {
  title: string;
  firstLine: string;
  secondLine: string;
  color: string;
}

export function CreditCard({
  color,
  title,
  firstLine,
  secondLine,
  ...props
}: Omit<CreditCardProps, 'sx'>) {
  return (
    <Box
      {...props}
      sx={{
        backgroundColor: '#FFF',

        border: `2px solid ${color}`,
        borderBottomWidth: '10px',
        borderRadius: '4px',

        textAlign: 'center',

        paddingLeft: '26px',
        paddingRight: '26px',

        width: { xl: '154px' },
      }}
    >
      <Typography
        sx={{
          fontSize: 38,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: 12,
        }}
      >
        {firstLine}
      </Typography>
      <Typography
        sx={{
          fontSize: 12,
        }}
      >
        {secondLine}
      </Typography>
    </Box>
  );
}
