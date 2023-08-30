import { RouterProvider } from 'react-router-dom';
import MUISkeleton from '../components/Skeleton';
import routes from '../core/Routes';

function Router() {
  return <RouterProvider router={routes} fallbackElement={<MUISkeleton />} />;
}

export default Router;
