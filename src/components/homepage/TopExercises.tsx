import { Alert, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootStoreState } from '../../redux/store';
import ExercisesGrid from '../grids/Exercises.grid';

function TopExercises() {
  const topExercises =
    useSelector((state: RootStoreState) => state.api.exercises) ?? [];

  return (
    <Box sx={{ my: 15 }}>
      <Typography fontWeight={700} variant='h3' mb={8} textAlign='center'>
        Our Top{' '}
        <Typography
          display='inline-block'
          fontSize='inherit'
          fontWeight='inherit'
          color='primary'
        >
          Exercises
        </Typography>{' '}
        We <br /> Focus On
      </Typography>

      {topExercises.length <= 0 && (
        <Alert severity='error'>No Exercises found</Alert>
      )}

      {topExercises.length > 0 && (
        <ExercisesGrid exercises={topExercises.slice(0, 9)} />
      )}
    </Box>
  );
}

export default TopExercises;
