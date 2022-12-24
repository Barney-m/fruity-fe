import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Collapse,
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Typography
} from '@mui/material';

// project import
import NavItem from './NavItem';
import Transitions from '@fruity/components/@extended/Transitions';

// assets
import { BorderOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';

// types
import { MenuProps, NavItemType } from '@fruity/types/menu';

type VirtualElement = {
  getBoundingClientRect: () => ClientRect | DOMRect;
  contextElement?: Element;
};

// mini-menu - wrapper
const PopperStyled = styled(Popper)(({ theme }) => ({
  overflow: 'visible',
  zIndex: 1202,
  minWidth: 180,
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 38,
    left: -5,
    width: 10,
    height: 10,
    backgroundColor: theme.palette.background.paper,
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 120,
    borderLeft: `1px solid ${theme.palette.grey.A800}`,
    borderBottom: `1px solid ${theme.palette.grey.A800}`
  }
}));

// ==============================|| NAVIGATION - LIST COLLAPSE ||============================== //

interface Props {
  menu: NavItemType;
  level: number;
}

const NavCollapse = ({ menu, level }: Props) => {
  const theme = useTheme();

  const menuState: MenuProps = useSelector((state: any) => state.menu);
  const { drawerOpen } = menuState;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null | undefined>(null);

  const [anchorEl, setAnchorEl] = useState<VirtualElement | (() => VirtualElement) | null | undefined>(null);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLDivElement, MouseEvent> | undefined) => {
    setAnchorEl(null);
    if (drawerOpen) {
      setOpen(!open);
      setSelected(!selected ? menu.id : null);
    } else {
      setAnchorEl(event?.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    const childrens = menu.children ? menu.children : [];
    childrens.forEach((item) => {
      if (pathname && pathname.includes('product-details')) {
        if (item.url && item.url.includes('product-details')) {
          setOpen(true);
        }
      }

      if (item.url === pathname) {
        setOpen(true);
        setSelected(menu.id);
      }
    });
  }, [pathname, menu]);

  const openMini = Boolean(anchorEl);

  const navCollapse = menu.children?.map((item) => {
    switch (item.type) {
      case 'collapse':
        return <NavCollapse key={item.id} menu={item} level={level + 1} />;
      case 'item':
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Collapse or Item
          </Typography>
        );
    }
  });

  const borderIcon = level === 1 ? <BorderOutlined style={{ fontSize: '1rem' }} /> : false;
  const Icon = menu.icon!;
  const menuIcon = menu.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : borderIcon;
  const textColor = theme.palette.mode === 'dark' ? 'grey.400' : 'text.primary';
  const iconSelectedColor = theme.palette.mode === 'dark' && drawerOpen ? theme.palette.text.primary : theme.palette.primary.main;

  return (
    <><Collapse in={open} timeout="auto" unmountOnExit>
          <List sx={{ p: 0 }}>{navCollapse}</List>
        </Collapse></>
  );
};

export default NavCollapse;
