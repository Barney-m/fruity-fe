// material-ui
import { Box, CardMedia, Typography, Grid } from '@mui/material';

// third party
import { motion } from 'framer-motion';
import { ShoppingCartOutlined, CustomerServiceOutlined, TagsOutlined, SmileOutlined } from '@ant-design/icons';

// project import
import { featureContentSx, hoverScaleSx } from './home.constants';

// assets
import banner5 from '@fruity/assets/images/landing/banner-05.jpg';

// ==============================|| LANDING - DIVIDER CARD BLOCK ||============================== //

const DividerCardBlock = () => (
  <>
    <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 5, xs: 2.5 }, mb: { md: 2, xs: 2.5 } }}>
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
                <CardMedia component='img' image={banner5} sx={{ transition: 'transform .4s' }}/>
                <Box component='div' sx={featureContentSx}>
                    <Typography variant='body1' color='secondary' sx={{ mt: 2, fontSize: '1rem', letterSpacing: 1.5 }}>Freshy</Typography>
                    <Typography variant='h3' sx={{ fontWeight: 600, mt: 1, mb: 5, fontSize: '2rem', }}>Fresh all the way</Typography>
                </Box>
            </Box>
        </motion.div>
        <Grid container justifyContent='center' alignSelf='center' spacing={2} sx={{ mt: { md: 10, xs: 2.5 }, mb: { md: 10, xs: 2.5 }, ml: '4rem', mr: '4rem' }}>
            <Grid item xs={6} md={3}>
                <Box component='div' display='flex' flexDirection='row' justifyContent='center'>
                    <ShoppingCartOutlined style={{ fontSize: '3rem', marginRight: '16px' }}/>
                    <Box component='div' display='flex' flexDirection='column' sx={{ margin: 'auto 0' }}>
                        <Typography variant='h5'>Free Fast Delivery</Typography>
                        <Typography variant='body1' color='secondary'>Online Only Exclusions Apply</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} md={3}>
                <Box component='div' display='flex' flexDirection='row' justifyContent='center'>
                    <CustomerServiceOutlined style={{ fontSize: '3rem', marginRight: '16px' }}/>
                    <Box component='div' display='flex' flexDirection='column' sx={{ margin: 'auto 0' }}>
                        <Typography variant='h5'>24/7 Call Support</Typography>
                        <Typography variant='body1' color='secondary'>Contact Us 24 Hours A Day</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} md={3}>
                <Box component='div' display='flex' flexDirection='row' justifyContent='center'>
                    <TagsOutlined style={{ fontSize: '3rem', marginRight: '16px' }}/>
                    <Box component='div' display='flex' flexDirection='column' sx={{ margin: 'auto 0' }}>
                        <Typography variant='h5'>Our Special Offer</Typography>
                        <Typography variant='body1' color='secondary'>Offer Is Any Kind Of Discount</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} md={3}>
                <Box component='div' display='flex' flexDirection='row' justifyContent='center'>
                    <SmileOutlined style={{ fontSize: '3rem', marginRight: '16px' }}/>
                    <Box component='div' display='flex' flexDirection='column' sx={{ margin: 'auto 0' }}>
                        <Typography variant='h5'>For Quality Product</Typography>
                        <Typography variant='body1' color='secondary'>Sell Highest Quality Item</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Grid>
  </>
);

export default DividerCardBlock;
