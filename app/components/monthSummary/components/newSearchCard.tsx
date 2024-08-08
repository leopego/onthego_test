import { PlusIcon } from '@/app/assets/icons';
import theme from '@/app/theme/theme';
import { ButtonBase, Card, Typography } from '@mui/material';
import Image from 'next/image';

export function NewSearchCard() {
  return (
    <Card
      sx={{
        [theme.breakpoints.up('xl')]: {
          paddingLeft: '64px',
          paddingRight: '64px',

          marginRight: '142px',
        },

        [theme.breakpoints.down('lg')]: {
          marginTop: '14px',
        },

        padding: '26px',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#C7B2FF',
      }}
    >
      <Image src='/stars.png' width={92} height={92} alt='Star Picture' />
      <Typography fontSize={18} fontWeight='bold'>
        Pronto para conhecer seu cliente?
      </Typography>{' '}
      <ButtonBase
        sx={{
          backgroundColor: '#000',
          height: '52px',
          width: '292px',
          borderRadius: '4px',

          marginTop: '16px',

          display: 'flex',
          justifyContent: 'center',
          alignItens: 'center',
        }}
      >
        <Typography
          color='#FFF'
          fontSize={14}
          fontWeight='600'
          marginRight='12px'
          lineHeight={0}
        >
          NOVA PESQUISA
        </Typography>

        <PlusIcon />
      </ButtonBase>
    </Card>
  );
}
