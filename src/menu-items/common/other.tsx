// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  BorderOutlined,
  BoxPlotOutlined,
  ChromeOutlined,
  DeploymentUnitOutlined,
  GatewayOutlined,
  MenuUnfoldOutlined,
  QuestionOutlined,
  SmileOutlined,
  StopOutlined
} from '@ant-design/icons';

// type
import { NavItemType } from '@fruity/types/menu';

// icons
const icons = {
  BorderOutlined,
  BoxPlotOutlined,
  ChromeOutlined,
  DeploymentUnitOutlined,
  GatewayOutlined,
  MenuUnfoldOutlined,
  QuestionOutlined,
  StopOutlined,
  SmileOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const other: NavItemType = {
  id: 'other',
  title: <FormattedMessage id="others" />,
  type: 'group',
  children: [
    {
      id: 'homepage',
      title: <FormattedMessage id="home" />,
      type: 'item',
      url: '/',
      icon: icons.ChromeOutlined
    },
    {
      id: 'about-us',
      title: <FormattedMessage id="about-us" />,
      type: 'item',
      url: '/about-us',
      icon: icons.DeploymentUnitOutlined,
    }
  ]
};

export default other;
