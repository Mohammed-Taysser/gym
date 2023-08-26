import { CircularProgress } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import routes from '../core/Routes';

function Router() {
  return (
    <RouterProvider router={routes} fallbackElement={<CircularProgress />} />
  );
}

export default Router;
