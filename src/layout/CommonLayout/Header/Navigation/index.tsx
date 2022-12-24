import { useSelector } from 'react-redux';

// material-ui
import { Box, Typography } from '@mui/material';

// types

// project import
import NavGroup from './NavGroup';
import menuItem from '@fruity/menu-items/common';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  const navGroups = menuItem.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <>{navGroups}</>;
};

export default Navigation;
