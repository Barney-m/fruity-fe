import { useState } from 'react';

// material-ui
import { Box, Button, MobileStepper, SxProps, Typography, useTheme } from '@mui/material';

// third party
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { v1 as UUID } from 'uuid';

// project import
import MainCard from '@fruity/components/MainCard';

// assets
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import AnimateButton from '@fruity/components/@extended/AnimateButton';

// ==============================|| LANDING - HERO BLOCK ||============================== //

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: 'https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-7.png'
  },
  {
    imgPath: 'https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-2.png'
  },
  {
    imgPath: 'https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-1.png'
  },
  {
    imgPath: 'https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-8.png'
  }
];

const HeroBlock = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = images.length;

  // Stepper Style
  const stepperSx: SxProps = {
    position: 'absolute',
    bottom: '1rem',
    justifyContent: 'center',
    left: '40%',
    right: '40%',
    borderRadius: '5px',
    bgcolor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    '& .anticon': { fontSize: '0.625rem' }
  };

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const handleStepChange = (step: number) => setActiveStep(step);

  return (
    <MainCard sx={{ flexGrow: 1, marginTop: '1.5rem' }} content={false}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {images.map((step, index) => (
          <Box key={UUID()} sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignSelf: 'center'}}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <Box component={'div'} sx={{ position: 'relative', width: '100%' }}>
                  <Box
                    component="img"
                    sx={{
                      height: { sx: 300, md: 500 },
                      display: 'block',
                      overflow: 'hidden',
                      width: '100%'
                    }}
                    src={step.imgPath}
                    alt={UUID()}
                  />
                  <Box component='div' sx={{ position: 'absolute', left: '10%', right: { xs: '30%', sm: '40%', md: '50%' }, top: '20%' }}>
                    <Typography component='h3' sx={{ fontSize: { xs: '0.765rem', md: '1.1rem' }, color: theme.palette.secondary.main, mb: '1rem' }}>Fruit You Shoud Be Eating</Typography>
                    <Typography component='h1' sx={{ fontSize: { xs: '1.5rem', md: '3rem' }, fontWeight: 700, lineHeight: 1.3 }}>Best Tasty & Healthy Organic Fruits</Typography>
                    <Box component='div' sx={{ marginTop: '2rem' }}>
                      <AnimateButton>
                        <Button color='primary' size='large' variant='contained'>
                          <Typography component='p' color={theme.palette.mode === 'dark' ? 'black' : 'white'}>Shop Now</Typography>
                        </Button>
                      </AnimateButton>
                    </Box>
                  </Box>
                </Box>
              </>
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={stepperSx}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          endIcon={theme.direction === 'rtl' ? <LeftOutlined /> : <RightOutlined />}
          >
          Next
          </Button>
        }
        backButton={
          <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          startIcon={theme.direction === 'rtl' ? <RightOutlined /> : <LeftOutlined />}
          >
          Back
          </Button>
        }
        />
    </MainCard>
  );
}

export default HeroBlock;
