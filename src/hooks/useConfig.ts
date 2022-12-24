import { useContext } from 'react';
import { ConfigContext } from '@fruity/contexts/ConfigContext';

// ==============================|| CONFIG - HOOKS  ||============================== //

const useConfig = () => useContext(ConfigContext);

export default useConfig;