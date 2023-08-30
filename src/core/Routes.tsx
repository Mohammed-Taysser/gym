import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Base';

const Homepage = lazy(() => import('../pages/public/Homepage'));
const NotFound = lazy(() => import('../pages/public/404'));
const Equipments = lazy(() => import('../pages/public/Equipments'));
const BodyParts = lazy(() => import('../pages/public/BodyParts'));
const TargetMuscles = lazy(() => import('../pages/public/TargetMuscles'));
const ExerciseDetail = lazy(() => import('../pages/public/ExerciseDetail'));
const BodyPartDetails = lazy(() => import('../pages/public/BodyPartDetails'));
const EquipmentDetails = lazy(() => import('../pages/public/EquipmentDetails'));
const TargetMuscleDetails = lazy(
  () => import('../pages/public/TargetMuscleDetails')
);
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
        path: '/body-parts',
        element: <BodyParts />,
      },
      {
        path: '/body-parts/:title',
        element: <BodyPartDetails />,
      },
      {
        path: '/target-muscles/:title',
        element: <TargetMuscleDetails />,
      },
      {
        path: '/target-muscles/',
        element: <TargetMuscles />,
      },
      {
        path: '/equipments/',
        element: <Equipments />,
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
