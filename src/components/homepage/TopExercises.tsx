import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootStoreState } from '../../redux/store';
import ExercisesGrid from '../grids/Exercises.grid';

function TopExercises() {
  const exercises =
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

      <ExercisesGrid exercises={exercises} count={9} hidePagination />
    </Box>
  );
}

export default TopExercises;
