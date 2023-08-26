import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Base';

const ExerciseDetail = lazy(() => import('../pages/public/ExerciseDetail'));
const NotFound = lazy(() => import('../pages/public/404'));
const BodyPartDetails = lazy(() => import('../pages/public/BodyPartDetails'));
const Homepage = lazy(() => import('../pages/public/Homepage'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/exercise/:id',
        element: <ExerciseDetail />,
      },
      {
        path: '/body-part/:title',
        element: <BodyPartDetails />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
