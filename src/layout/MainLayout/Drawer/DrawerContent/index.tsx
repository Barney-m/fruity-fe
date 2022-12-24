import { useSelector } from 'react-redux';

// material-ui
import { useMediaQuery, useTheme } from '@mui/material';

// project import
import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from '@fruity/components/third-party/SimpleBar';

// types
import { MenuProps } from '@fruity/types/menu';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const menu: MenuProps = useSelector((state: any) => state.menu);
  const { drawerOpen } = menu;

  return (
    <SimpleBar
      sx={{
        '& .simplebar-content': {
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <Navigation />
      {drawerOpen && !matchDownMD && <NavCard />}
    </SimpleBar>
  );
};

export default DrawerContent;
