// project import
import Routes from '@fruity/routes';
import ThemeCustomization from '@fruity/themes';
import Locales from '@fruity/components/Locales';
import ScrollTop from '@fruity/components/ScrollTop';
import Snackbar from '@fruity/components/@extended/Snackbar';

// auth provider
import { JWTProvider as AuthProvider } from '@fruity/contexts/JWTContext';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
      <Locales>
        <ScrollTop>
          <AuthProvider>
            <>
              <Routes />
              <Snackbar />
            </>
          </AuthProvider>
        </ScrollTop>
      </Locales>
  </ThemeCustomization>
);

export default App;
