import { ChangeEvent, lazy, Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { Box, Container, FormControlLabel, Radio, RadioGroup, Slide, Stack, Toolbar } from '@mui/material';

// project import
import ComponentLayout from './ComponentLayout';
import { openComponentDrawer } from '@fruity/store/reducers/menu';

// types
import { MenuProps } from '@fruity/types/menu';

// material-ui
import { alpha, styled, useTheme } from '@mui/material/styles';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import MainCard from '@fruity/components/MainCard';
import { CheckOutlined } from '@ant-design/icons';
import { presetDarkPalettes, presetPalettes, PalettesProps } from '@ant-design/colors';
import useConfig from '@fruity/hooks/useConfig';
import { PresetColor } from '@fruity/types/config';
import { customGreen } from '@fruity/themes/theme/default';
import IconButton from '@fruity/components/@extended/IconButton';

const Header = lazy(() => import('./Header'));
const FooterBlock = lazy(() => import('./FooterBlock'));

// ==============================|| Loader ||============================== //

const LoaderWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2001,
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2)
  }
}));

export interface LoaderProps extends LinearProgressProps {}

interface ColorProps {
  id: PresetColor;
  primary: string;
}

const Loader = () => (
  <LoaderWrapper>
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

// ==============================|| MINIMAL LAYOUT ||============================== //

const CommonLayout = ({ layout = 'blank' }: { layout?: string }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { mode, presetColor, onChangePresetColor } = useConfig();

  const menu: MenuProps = useSelector((state: any) => state.menu);
  const { componentDrawerOpen } = menu;

  const colorOptions: ColorProps[] = [
    {
      id: 'theme1',
      primary: mode === 'dark' ? '#305bdd' : '#3366FF'
    },
    {
      id: 'theme2',
      primary: mode === 'dark' ? '#655ac8' : '#7265E6'
    },
    {
      id: 'theme3',
      primary: mode === 'dark' ? '#0a7d3e' : '#068e44'
    },
    {
      id: 'theme4',
      primary: mode === 'dark' ? '#5d7dcb' : '#3c64d0'
    },
    {
      id: 'default',
      primary: customGreen[500]!
    },
    {
      id: 'theme5',
      primary: mode === 'dark' ? '#d26415' : '#f27013'
    },
    {
      id: 'theme6',
      primary: mode === 'dark' ? '#288d99' : '#2aa1af'
    },
    {
      id: 'theme7',
      primary: mode === 'dark' ? '#05934c' : '#00a854'
    },
    {
      id: 'theme8',
      primary: mode === 'dark' ? '#058478' : '#009688'
    }
  ];


  const handleDrawerOpen = () => {
    dispatch(openComponentDrawer({ componentDrawerOpen: !componentDrawerOpen }));
  };

  const handlePresetColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangePresetColor(event.target.value as PresetColor);
  };

  return (
    <>
      {(layout === 'landing' || layout === 'simple') && (
        <Suspense fallback={<Loader />}>
          <Header layout={layout} />
          <Outlet />
          <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <MainCard
              sx={{
                width: { xs: '100%', sm: 'auto' },
                position: 'fixed',
                zIndex: 9,
                right: { xs: 0, sm: 16 },
                bottom: { xs: 0, sm: '25%' },
                borderRadius: { xs: 0, sm: 1 }
              }}
              content={false}
              shadow={theme.customShadows.z1}
              boxShadow
              border={false}
            >
              <RadioGroup
                sx={{ alignItems: { xs: 'center', sm: 'flex-end' }, p: 1.25 }}
                aria-label="payment-card"
                name="payment-card"
                value={presetColor}
                onChange={handlePresetColorChange}
              >
                <Stack direction={{ xs: 'row', sm: 'column' }} spacing={1} alignItems="center">
                  {colorOptions.map((color, index) => (
                    <FormControlLabel
                      key={index}
                      control={<Radio value={color.id} sx={{ opacity: 0, position: 'absolute', zIndex: 9 }} />}
                      sx={{
                        mr: 0,
                        ml: 0,
                        zIndex: 1,
                        '&:hover': {
                          position: 'relative',
                          '& .MuiIconButton-root:after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            background: '#fff',
                            opacity: 0.3,
                            boxShadow: `0 0 6px 6px ${alpha(color.primary, 0.9)}`
                          }
                        }
                      }}
                      label={
                        <IconButton
                          shape="rounded"
                          variant="contained"
                          sx={{
                            bgcolor: color.primary,
                            width: presetColor === color.id ? 28 : 20,
                            height: presetColor === color.id ? 28 : 20
                          }}
                        >
                          {presetColor === color.id && <CheckOutlined />}
                        </IconButton>
                      }
                    />
                  ))}
                </Stack>
              </RadioGroup>
            </MainCard>
          </Slide>
          <FooterBlock isFull={layout === 'landing'} />
        </Suspense>
      )}
      {layout === 'component' && (
        <Suspense fallback={<Loader />}>
          <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
            <Header handleDrawerOpen={handleDrawerOpen} layout="component" />
            <Toolbar sx={{ my: 2 }} />
            <ComponentLayout handleDrawerOpen={handleDrawerOpen} componentDrawerOpen={componentDrawerOpen} />
          </Container>
        </Suspense>
      )}
      {layout === 'blank' && <Outlet />}
    </>
  );
};

export default CommonLayout;
