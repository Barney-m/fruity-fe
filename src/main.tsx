import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

// project imports
import App from './App'
import { store, persister } from '@fruity/store';
import { ConfigProvider } from '@fruity/contexts/ConfigContext';

// third-party
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// scroll bar
import '@fruity/index.css'
import 'simplebar/src/simplebar.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <ConfigProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </PersistGate>
  </ReduxProvider>,
)
