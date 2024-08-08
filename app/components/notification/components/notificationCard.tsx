import { ArrowRightIcon } from '@/app/assets/icons/arrowRight';
import { MessageIcon } from '@/app/assets/icons/message';
import { Box, IconButton, Typography } from '@mui/material';

import parse from 'html-react-parser';

export interface NotificationCardProps {
  id?: string;
  mensage: string;
  comments: string;
}

export function NotificationCard({ mensage, comments }: NotificationCardProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',

        border: '1px solid #C9D1D6',
        borderRadius: '4px',

        paddingTop: '22px',
        paddingBottom: '22px',

        paddingLeft: '12px',
        paddingRight: '12px',

        marginBottom: '12px',

        '&:hover': {
          border: '1px solid #FF5D55',
        },

        '&:hover .hoverText': {
          color: '#FF5D55',
        },

        '&:hover .hoverBtn ': {
          backgroundColor: '#FF5D55',
        },
      }}
    >
      <Box
        sx={{
          alignSelf: 'flex-start',

          display: 'flex',
          flexDirection: 'row',

          justifyContent: 'center',
          alignItems: 'center',

          marginBottom: '26px',
        }}
      >
        <MessageIcon />
        <Typography
          className='hoverText'
          sx={{
            fontSize: 12,
            fontWeight: 'bold',
            marginLeft: '6px',
          }}
        >
          {comments} NOVOS COMENTARIOS
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            lineHeight: 1.1,
          }}
        >
          {parse(mensage)}
        </Typography>

        <IconButton
          className='hoverBtn'
          sx={{
            border: '1px solid #C9D1D6',

            width: '36px',
            height: '36px',

            borderRadius: '4px',

            marginLeft: '20px',
          }}
        >
          <ArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
