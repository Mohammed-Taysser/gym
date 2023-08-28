import { Box, CircularProgress, CssBaseline } from '@mui/material';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import AsyncWrapper from '../containers/AsyncWrapper';
import { getExercises } from '../core/API';
import { initApiCall } from '../redux/exercises.slice';
import Footer from './Footer';
import Navbar from './Navbar';

function BaseLayout() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  const onExercisesFetch = (exercises: Exercise[]) => {
    dispatch(initApiCall(exercises));
  };

  return (
    <Box sx={{ pt: 7 }}>
      <CssBaseline />

      <Navbar />

      <AsyncWrapper<Exercise[]>
        apiCall={getExercises}
        setData={onExercisesFetch}
      >
        <Suspense fallback={<CircularProgress />}>
          <Outlet />
        </Suspense>
      </AsyncWrapper>

      <Footer />
    </Box>
  );
}

export default BaseLayout;
