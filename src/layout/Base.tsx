import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AsyncWrapper from '../containers/AsyncWrapper';
import { getExercises } from '../core/API';
import { initApiCall } from '../redux/exercises.slice';

function BaseLayout() {
  const dispatch = useDispatch();

  const onExercisesFetch = (exercises: Exercise[]) => {
    dispatch(initApiCall(exercises));
  };

  return (
    <AsyncWrapper<Exercise[]> apiCall={getExercises} setData={onExercisesFetch}>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </AsyncWrapper>
  );
}

export default BaseLayout;
