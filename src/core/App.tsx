import { ThemeProvider } from '@mui/material';
import RouterProvider from '../providers/RouterProvider';
import themeOptions from './theme';

import '../assets/css/app.css';

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <RouterProvider />
    </ThemeProvider>
  );
}

export default App;
