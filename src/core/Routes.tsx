import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Base';

const ExerciseDetail = lazy(() => import('../pages/public/ExerciseDetail'));
const NotFound = lazy(() => import('../pages/public/404'));
const BodyPartDetails = lazy(() => import('../pages/public/BodyPartDetails'));
const Homepage = lazy(() => import('../pages/public/Homepage'));
const EquipmentDetails = lazy(() => import('../pages/public/EquipmentDetails'));
const Exercises = lazy(() => import('../pages/public/Exercises'));

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
        path: '/exercises/:id',
        element: <ExerciseDetail />,
      },
      {
        path: '/exercises',
        element: <Exercises />,
      },
      {
        path: '/body-part/:title',
        element: <BodyPartDetails />,
      },
      {
        path: '/equipments/:title',
        element: <EquipmentDetails />,
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
