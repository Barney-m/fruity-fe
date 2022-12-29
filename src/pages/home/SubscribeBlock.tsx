import { useState } from 'react';

// material-ui
import { Box, CardMedia, Typography, Grid, useTheme, FormControl, TextField, Button } from '@mui/material';

// third party
import { motion } from 'framer-motion';
import { MailOutlined } from '@ant-design/icons';

// project import
import { featureContentSx, hoverScaleSx } from './home.constants';

// assets
import banner5 from '@fruity/assets/images/landing/banner-05.jpg';

// ==============================|| LANDING - DIVIDER CARD BLOCK ||============================== //

const SubscribeBlock = () => {
    const theme = useTheme();
    const [email, setEmail] = useState<string>();

    return (
    <>
        <Box component='div' bgcolor={theme.palette.primary.main} color={theme.palette.primary.contrastText} sx={{ mt: { md: 5, xs: 2.5 }, mb: { md: 5, xs: 2.5 } }}>
            <Grid container justifyContent='center' alignItems='center' spacing={3} sx={{ pb: 3 }}>
                <Grid item>
                    <MailOutlined style={{ fontSize: '3rem' }} />
                </Grid>
                <Grid item xs={12} md={2.5}>
                    <Box component='div' display='flex' flexDirection='column'>
                        <Typography variant='subtitle1' sx={{ fontSize: '1.5rem', fontWeight: 700 }}>Sign Up To Newsletter</Typography>
                        <Typography variant='body1'>Subscribe to us to keep track latest information</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box component='div' position='relative'>
                        <FormControl sx={{ border: 'none', width: '100%' }}>
                            <TextField
                                sx={{ 
                                    bgcolor: theme.palette.primary[100],
                                    borderRadius: 5,
                                    '& .MuiInputBase-root': { borderRadius: 5 } }}
                                fullWidth
                                aria-label="delivery-options"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="delivery-options"
                            />
                            <Button type='submit' sx={{
                                position: 'absolute',
                                borderRadius: 5,
                                height: '90%',
                                right: 1,
                                top: 2,
                                bottom: 0,
                                bgcolor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText
                            }}>Subscribe</Button>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
    );
}

export default SubscribeBlock;
