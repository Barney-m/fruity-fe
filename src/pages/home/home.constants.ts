import { SxProps } from "@mui/system";

// Feature Card Content Style
export const featureContentSx: SxProps = {
    position: 'absolute',
    top: 0,
    bottom: 'auto',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: { sm: '60%', md: '50%' },
    height: '100%',
    left: '1rem',
};
  
// Feature Card Hover Image Zoom Style
export const hoverScaleSx: SxProps = {
    overflow: 'hidden',
    '&:hover>img': {
        transform: 'scale(1.2)'
    }
};