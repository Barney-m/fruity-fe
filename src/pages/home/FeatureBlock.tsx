import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, CardMedia, Container, Grid, Link, SxProps, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';

// project import
import { featureContentSx, hoverScaleSx } from './home.constants';

// assets
import banner1 from '@fruity/assets/images/landing/banner-01.jpg';
import banner2 from '@fruity/assets/images/landing/banner-02.jpg';
import banner3 from '@fruity/assets/images/landing/banner-03.jpg';
import banner4 from '@fruity/assets/images/landing/banner-04.jpg';

// ==============================|| LANDING - FEATURE BLOCK ||============================== //

const FeatureBlock = () => (
  <>
    <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 5, xs: 2.5 }, mb: { md: 2, xs: 2.5 } }}>
      <Grid item xs={12} sm={6} md={4}>
        <motion.div
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 30,
            delay: 0.2
          }}
        >
          <Box component='div' position='relative' sx={hoverScaleSx}>
            <CardMedia component='img' image={banner4} sx={{ transition: 'transform .4s' }}/>
            <Box component='div' sx={featureContentSx}>
              <Typography variant='body1' color='secondary' sx={{ mt: 2, fontSize: '1rem', letterSpacing: 1.5 }}>Best Offer</Typography>
              <Typography variant='h3' sx={{ fontWeight: 600, mt: 1, mb: 5, fontSize: '2rem', }}>Garden Fresh Pure Orange</Typography>
              <Link to={'/about-us'} component={RouterLink} fontSize={'1rem'}>Shop Now</Link>
            </Box>
          </Box>
        </motion.div>
      </Grid>
      <Grid item xs={12} sm={6} md={6.5}>
        <motion.div
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 30,
            delay: 0.2
          }}
        >
          <Box component='div' position='relative' sx={hoverScaleSx}>
            <CardMedia component='img' image={banner2} sx={{ transition: 'transform .4s' }} />
            <Box component='div' sx={featureContentSx}>
              <Typography variant='body1' color='secondary' sx={{ mt: 2, fontSize: '1rem', letterSpacing: 1.5 }}>Best Offer</Typography>
              <Typography variant='h3' sx={{ fontWeight: 600, mt: 1, mb: 5, fontSize: '2rem', }}>Garden Fresh Pure Orange</Typography>
              <Link to={'/about-us'} component={RouterLink} fontSize={'1rem'}>Shop Now</Link>
            </Box>
          </Box>
        </motion.div>
      </Grid>
    </Grid>
    <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mb: { md: 10, xs: 2.5 } }}>
      <Grid item xs={12} sm={6} md={6.5}>
        <motion.div
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 30,
            delay: 0.2
          }}
        >
          <Box component='div' position='relative' sx={hoverScaleSx}>
            <CardMedia component='img' image={banner1} sx={{ transition: 'transform .4s' }}/>
            <Box component='div' sx={featureContentSx}>
              <Typography variant='body1' color='secondary' sx={{ mt: 2, fontSize: '1rem', letterSpacing: 1.5 }}>Best Offer</Typography>
              <Typography variant='h3' sx={{ fontWeight: 600, mt: 1, mb: 5, fontSize: '2rem', }}>Garden Fresh Pure Orange</Typography>
              <Link to={'/about-us'} component={RouterLink} fontSize={'1rem'}>Shop Now</Link>
            </Box>
          </Box>
        </motion.div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <motion.div
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 30,
            delay: 0.2
          }}
        >
          <Box component='div' position='relative' sx={hoverScaleSx}>
            <CardMedia component='img' image={banner3} sx={{ transition: 'transform .4s' }}/>
            <Box component='div' sx={featureContentSx}>
              <Typography variant='body1' color='secondary' sx={{ mt: 2, fontSize: '1rem', letterSpacing: 1.5 }}>Best Offer</Typography>
              <Typography variant='h3' sx={{ fontWeight: 600, mt: 1, mb: 5, fontSize: '2rem', }}>Garden Fresh Pure Orange</Typography>
              <Link to={'/about-us'} component={RouterLink} fontSize={'1rem'}>Shop Now</Link>
            </Box>
          </Box>
        </motion.div>
      </Grid>
    </Grid>
  </>
);

export default FeatureBlock;
