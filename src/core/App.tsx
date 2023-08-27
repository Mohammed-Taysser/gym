import { ThemeProvider } from '@mui/material';
import RouterProvider from '../providers/RouterProvider';
import themeOptions from './theme';
import store from '../redux/store';
import { Provider } from 'react-redux';

import '../assets/css/app.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeOptions}>
        <RouterProvider />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
