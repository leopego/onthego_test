import { Box, Typography } from '@mui/material';
import Navbar from './components/navbar/navbar';
import { MonthSummary } from './components/monthSummary/monthSummary';
import SimpleSlider from './components/carousel/carousel';
import { SentDashboardCard } from './components/sentDashboardCard/sentCard';
import { AudienceDashboardCard } from './components/audienceDashboardCard/audienceDashboardCard';
import { CreditCard } from './components/creditPainel/components/creditCard';
import { ManageButton } from './components/creditPainel/components/manageButton';
import { Notification } from './components/notification/notification';

export default async function Home() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '62px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
          }}
        >
          <MonthSummary />

          <Box sx={{ display: 'flex' }}>
            <Box
              sx={{
                backgroundColor: '#EEF2F3',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,

                paddingTop: '60px',
              }}
            >
              <Box
                sx={{
                  backgroundColor: 'green',
                  height: '300px',

                  marginLeft: { xl: '162px', mobile: '14px' },
                  marginRight: { xl: '142px', mobile: '14px' },
                }}
              >
                Slider
              </Box>

              <Box
                sx={{
                  marginTop: '60px',
                  marginLeft: { xl: '162px', mobile: '14px' },
                  marginRight: { xl: '142px', mobile: '14px' },
                  marginBottom: '32px',

                  borderRadius: '4px',

                  display: 'flex',
                  flexDirection: { mobile: 'column', lg: 'row', xl: 'row' },

                  gap: { lg: '20px', xl: '42px' },
                }}
              >
                <Box
                  sx={{
                    border: '1px solid #E0E4E7',
                    backgroundColor: '#FFF',

                    minWidth: { lg: '367px', xl: '652px' },

                    paddingBottom: '16px',

                    display: 'flex',
                    flexDirection: 'column',

                    justifyContent: 'space-between',
                  }}
                >
                  <Typography sx={{ padding: '16px', fontSize: 12 }}>
                    CRÉDITOS PARA PAINEL
                  </Typography>

                  <Box
                    sx={{
                      paddingLeft: { mobile: '14px', lg: '64px', xl: '92px' },
                      paddingRight: { mobile: '14px', lg: '64px', xl: '92px' },

                      display: 'flex',

                      flexDirection: {
                        mobile: 'column',
                        lg: 'column',
                        xl: 'row',
                      },

                      justifyContent: 'center',
                    }}
                  >
                    <CreditCard
                      title='1.500'
                      firstLine='CRÉDITOS'
                      secondLine='DISPONÍVEIS'
                      color='#0AD2A5'
                      paddingBottom={{ mobile: '20px', lg: '20px', xl: '54px' }}
                      paddingTop={{ mobile: '20px', lg: '20px', xl: '54px' }}
                    />

                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: { mobile: 'space-between' },

                        marginTop: { mobile: '12px', lg: '12px', xl: '0px' },
                        flexDirection: { mobile: 'row' },

                        gap: { mobile: '12px', lg: '0px', xl: '0px' },
                      }}
                    >
                      <CreditCard
                        title='300'
                        firstLine='CRÉDITOS EM'
                        secondLine='CAMPO'
                        color='#C7B2FF'
                        paddingBottom={{
                          mobile: '28px',
                          lg: '28px',
                          xl: '54px',
                        }}
                        paddingTop={{ mobile: '28px', lg: '28px', xl: '54px' }}
                        flexGrow={1}
                        marginLeft={{ lg: '0px', xl: '12px' }}
                        marginRight={{ lg: '12px', xl: '12px' }}
                      />

                      <CreditCard
                        title='600'
                        firstLine='CRÉDITOS'
                        secondLine='RESERVADOS'
                        color='#8A9099'
                        paddingBottom={{
                          mobile: '28px',
                          lg: '28px',
                          xl: '54px',
                        }}
                        paddingTop={{ mobile: '28px', lg: '28px', xl: '54px' }}
                        flexGrow={1}
                      />
                    </Box>
                  </Box>

                  <ManageButton title='GERENCIAR CRÉDITOS' />
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexGrow: 1,
                    flexDirection: 'column',

                    gap: '30px',
                  }}
                >
                  <AudienceDashboardCard />
                  <SentDashboardCard />
                </Box>
              </Box>
            </Box>

            <Notification
              display={{ mobile: 'none', lg: 'block', xl: 'none' }}
            />
          </Box>
        </Box>

        <Notification display={{ mobile: 'none', lg: 'none', xl: 'block' }} />
      </Box>
    </>
  );
}
