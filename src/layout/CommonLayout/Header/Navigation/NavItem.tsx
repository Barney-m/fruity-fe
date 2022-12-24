import { forwardRef, useEffect, ForwardRefExoticComponent, RefAttributes } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Link } from '@mui/material';

// project import
import { activeItem } from '@fruity/store/reducers/menu';

// types
import { LinkTarget, MenuProps, NavItemType } from '@fruity/types/menu';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

interface Props {
  item: NavItemType;
  level: number;
}

const NavItem = ({ item, level }: Props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const menu: MenuProps = useSelector((state: any) => state.menu);
  const { drawerOpen, openItem } = menu;

  let itemTarget: LinkTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps: {
    component: ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>> | string;
    href?: string;
    target?: LinkTarget;
  } = { component: forwardRef((props, ref) => <RouterLink {...props} to={item.url!} target={itemTarget} />) };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const isSelected = openItem.findIndex((id) => id === item.id) > -1;

  const { pathname } = useLocation();

  // active menu item on page load
  useEffect(() => {
    if (pathname && pathname.includes('product-details')) {
      if (item.url && item.url.includes('product-details')) {
        dispatch(activeItem({ openItem: [item.id] }));
      }
    }

    if (pathname && pathname.includes('kanban')) {
      if (item.url && item.url.includes('kanban')) {
        dispatch(activeItem({ openItem: [item.id] }));
      }
    }

    if (pathname === item.url) {
      dispatch(activeItem({ openItem: [item.id] }));
    }
    // eslint-disable-next-line
  }, [pathname]);

  const textColor = theme.palette.mode === 'dark' ? 'grey.400' : 'text.primary';
  const iconSelectedColor = theme.palette.mode === 'dark' && drawerOpen ? 'text.primary' : 'primary.main';

  return (
    <>
      <Link {...listItemProps} className="header-link" sx={{ color: isSelected ? iconSelectedColor : textColor }}>
        {item.title}
      </Link>
    </>
  );
};

export default NavItem;
