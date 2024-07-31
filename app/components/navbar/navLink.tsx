import theme from '@/app/theme/theme';
import { Box, BoxProps, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

function NavButton({ title }: { title: string }) {
  return (
    <Link href='#' style={{ textDecoration: 'none' }}>
      <Typography
        fontWeight='500'
        sx={{ color: '#8A9099', marginRight: '40px', fontSize: 12 }}
      >
        {title}
      </Typography>
    </Link>
  );
}

export function NavLink() {
  return (
    <Box
      display='flex'
      flexDirection='row'
      marginLeft='34px'
      sx={{
        [theme.breakpoints.down('tablet')]: {
          display: 'none',
        },
      }}
    >
      <NavButton title='PESQUISAS' />
      <NavButton title='CRÉDITOS' />
      <NavButton title='CAMPANHAS' />
      <NavButton title='EQUIPE' />
      <NavButton title='CONFIGURAÇÕES' />
    </Box>
  );
}
