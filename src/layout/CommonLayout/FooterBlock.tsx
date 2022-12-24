// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Container, CardMedia, Divider, Grid, Link, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';

// project import
import useConfig from '@fruity/hooks/useConfig';

// assets
import { SendOutlined, InstagramOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';
import AnimateButton from '@fruity/components/@extended/AnimateButton';
import LogoIcon from '@fruity/components/logo/LogoIcon';

const dashImage = import.meta.glob('@fruity/assets/images/landing/*.png', { eager: true });

// ==============================|| LANDING - FOOTER PAGE ||============================== //

type showProps = {
  isFull?: boolean;
};

const FooterBlock = ({ isFull }: showProps) => {
  const theme = useTheme();
  const { presetColor } = useConfig();

  const cardMediaSX = {
    color: theme.palette.secondary[800],
    fontSize: '0.875rem',
    fontWeight: 400,
    opacity: '0.6',
    '&:hover': {
      opacity: '1'
    }
  };

  const linkSX = {
    color: theme.palette.common.white,
    fontSize: '0.875rem',
    fontWeight: 400,
    opacity: '0.6',
    '&:hover': {
      opacity: '1'
    }
  };

  return (
    <>
      {isFull && (
        <Box
          sx={{
            position: 'relative',
            bgcolor: theme.palette.grey.A700,
            zIndex: 1,
            mt: { xs: 0, md: 13.75 },
            pt: { xs: 8, sm: 7.5, md: 18.75 },
            pb: { xs: 2.5, md: 10 },
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '80%',
              bottom: 0,
              left: 0,
              background: `linear-gradient(180deg, transparent 0%, ${theme.palette.grey.A700} 70%)`
            }
          }}
        >
          <CardMedia
            component="img"
            image={dashImage[`./img-footer-${presetColor}.png`] as string}
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '55%',
              maxWidth: 700,
              position: 'absolute',
              top: '-28%',
              right: 0
            }}
          />
          <Container>
            <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
              <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={2} sx={{ [theme.breakpoints.down('md')]: { pr: 0, textAlign: 'center' } }}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ color: theme.palette.common.white }}>
                      Roadmap
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <motion.div
                      initial={{ opacity: 0, translateY: 550 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 150,
                        damping: 30
                      }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          color: theme.palette.common.white,
                          fontWeight: 700
                        }}
                      >
                        Upcoming Release
                      </Typography>
                    </motion.div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" sx={{ color: theme.palette.common.white }}>
                      What is next? Checkout the Upcoming release of Fruity React.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ my: 2 }}>
                    <Box sx={{ display: 'inline-block' }}>
                      <AnimateButton>
                        <Button
                          size="large"
                          variant="contained"
                          endIcon={<SendOutlined />}
                          component={Link}
                          href="#"
                          target="_blank"
                        >
                          Roadmap
                        </Button>
                      </AnimateButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}

      <Box sx={{ pt: isFull ? 0 : 10, pb: 10, bgcolor: theme.palette.primary[400] }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <CardMedia component="div" children={<LogoIcon />} sx={{ width: 'auto' }} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 400, color: theme.palette.common.white }}>
                    Sourcing fresh fruit is a great way to make a healthy snack or meal. This guide will show you how to choose the best fruit and how to tell if it's ripe.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item sm={4} xs={12}>
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
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h5" sx={{ mb: 2, color: theme.palette.common.white }}>
                          Explore us
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Link
                          href="#"
                          underline="none"
                          sx={linkSX}
                          target="_blank"
                        >
                          Contact Us
                        </Link>
                      </Grid>
                      <Grid item xs={12}>
                        <Link href="#" underline="none" sx={linkSX} target="_blank">
                          Portfolio
                        </Link>
                      </Grid>
                      <Grid item xs={12}>
                        <Link href="#" underline="none" target="_blank" sx={linkSX}>
                          Blog
                        </Link>
                      </Grid>
                    </Grid>
                  </motion.div>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <motion.div
                    initial={{ opacity: 0, translateY: 550 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 150,
                      damping: 30,
                      delay: 0.4
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h5" sx={{ mb: 2, color: theme.palette.common.white }}>
                          Help
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Link href="#" underline="none" target="_blank" sx={linkSX}>
                          Documentation
                        </Link>
                      </Grid>
                      <Grid item xs={12}>
                        <Link href="#" underline="none" target="_blank" sx={linkSX}>
                          Github
                        </Link>
                      </Grid>
                      <Grid item xs={12}>
                        <Link href="#" underline="none" target="_blank" sx={linkSX}>
                          Change Log
                        </Link>
                      </Grid>
                    </Grid>
                  </motion.div>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <motion.div
                    initial={{ opacity: 0, translateY: 550 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 150,
                      damping: 30,
                      delay: 0.6
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h5" sx={{ mb: 2, color: theme.palette.common.white }}>
                          Events
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Link
                          href="#"
                          underline="none"
                          target="_blank"
                          sx={linkSX}
                        >
                          - &nbsp; Discount
                        </Link>
                      </Grid>
                      <Grid item xs={12}>
                        <Link
                          href="#"
                          underline="none"
                          target="_blank"
                          sx={linkSX}
                        >
                          - &nbsp; Coupon
                        </Link>
                      </Grid>
                      <Grid item xs={12}>
                        <Link
                          href="#"
                          underline="none"
                          target="_blank"
                          sx={linkSX}
                        >
                          - &nbsp; Free Gift
                        </Link>
                      </Grid>
                    </Grid>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          py: 1.5,
          bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.primary[100]
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Typography variant="subtitle2" color="secondary.800">
                © Made with love by Fruity
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2} alignItems="center" sx={{ justifyContent: 'flex-end' }}>
                <Grid item>
                  <Link href="#" underline="none" sx={cardMediaSX}>
                    <CardMedia component="div" children={<InstagramOutlined />} />
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" underline="none" sx={cardMediaSX}>
                    <CardMedia component="div" children={<TwitterOutlined />} />
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" underline="none" sx={cardMediaSX}>
                    <CardMedia component="div" children={<FacebookOutlined />} />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FooterBlock;
