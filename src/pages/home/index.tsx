// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, useMediaQuery } from '@mui/material';

import FeatureBlock from './FeatureBlock';
import HeroBlock from './HeroBlock';
import TrendingBlock from './TrendingBlock';
import DividerCardBlock from './DividerCardBlock';
import SubscribeBlock from './SubscribeBlock';

// ==============================|| HOME PAGE ||============================== //

const Landing = () => {

  return (
    <>
      <HeroBlock />
      <FeatureBlock />
      <Container>
        <TrendingBlock />
      </Container>
      <SubscribeBlock />
      <DividerCardBlock />
    </>
  );
};

export default Landing;
