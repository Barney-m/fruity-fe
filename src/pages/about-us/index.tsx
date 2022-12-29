import { useEffect, useState, ChangeEvent } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, CardMedia, FormControlLabel, Radio, RadioGroup, Slide, Stack } from '@mui/material';

// project import
import MainCard from '@fruity/components/MainCard';
import useConfig from '@fruity/hooks/useConfig';

// third-party
import { presetDarkPalettes, presetPalettes, PalettesProps } from '@ant-design/colors';

import { PresetColor } from '@fruity/types/config';

// assets
import { CheckOutlined } from '@ant-design/icons';
import IconButton from '@fruity/components/@extended/IconButton';
import { customGreen } from '@fruity/themes/theme/default';
const dashImage = import.meta.glob('@fruity/assets/images/landing/*.png', { eager: true });

interface ColorProps {
  id: PresetColor;
  primary: string;
}

// ==============================|| LANDING PAGE ||============================== //

const AboutUs = () => {
  const theme = useTheme();
  const { mode, presetColor, onChangePresetColor } = useConfig();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 250;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        setVisible(true);
      } else {
        visible && setVisible(false);
      }
    };

    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, [visible]);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          bgcolor: theme.palette.mode === 'dark' ? 'grey.0' : '#fff',
          overflow: 'hidden',
          minHeight: '100vh',
          '&>*': {
            position: 'relative',
            zIndex: 5
          },
          '&:before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 2,
          }
        }}
      >
        <CardMedia
          component="img"
          image={dashImage[`./bg-mockup-${presetColor}.png`] as string}
          sx={{
            position: 'absolute',
            width: { md: '78%', lg: '70%', xl: '65%' },
            right: { md: '-14%', lg: '-4%', xl: '-2%' },
            top: { md: '16%', lg: '12%', xl: '8%' },
            zIndex: 1,
            display: { xs: 'none', md: 'block' }
          }}
        />
      </Box>
    </>
  );
};

export default AboutUs;
