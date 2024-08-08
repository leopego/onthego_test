'use client';

import { Box, BoxProps } from '@mui/material';
import { NotificationHeader } from './components/notificationHeader';
import {
  NotificationCard,
  NotificationCardProps,
} from './components/notificationCard';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import { api } from '@/app/api';

interface NotificationProps extends Pick<BoxProps, 'display'> {}

export function Notification({ ...props }: NotificationProps) {
  const [notificationsData, setNotificationsData] = useState<
    NotificationCardProps[]
  >([] as NotificationCardProps[]);

  async function getNotifications() {
    try {
      const response = await api.get<NotificationCardProps[]>('notifications');

      setNotificationsData(response.data);
    } catch (error) {
      setNotificationsData([]);
    }
  }

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <Box width='368px' {...props}>
      <NotificationHeader />

      <Box
        sx={{
          marginTop: '24px',

          paddingLeft: '12px',
          paddingRight: '12px',

          '& .infinite-scroll-component': {
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          },
        }}
      >
        <InfiniteScroll
          next={() => {}}
          hasMore={false}
          height='100vh'
          dataLength={notificationsData.length}
          loader={<h4>Loading...</h4>}
        >
          {notificationsData.map((item) => {
            return (
              <NotificationCard
                key={item.id}
                mensage={item.mensage}
                comments={item.comments}
              />
            );
          })}
        </InfiniteScroll>
      </Box>
    </Box>
  );
}
