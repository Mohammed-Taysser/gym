import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import AsyncWrapper from '../../containers/AsyncWrapper';
import { getExercises } from '../../core/API';
import ExercisesGrid from '../grids/Exercises.grid';

function TopExercises() {
  const [topExercises, setTopExercises] = useState<Exercise[]>([]);

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

      <AsyncWrapper<Exercise[]>
        apiCall={getExercises}
        variant='exercise'
        setData={setTopExercises}
      >
        <ExercisesGrid exercises={topExercises.slice(0, 9)} />
      </AsyncWrapper>
    </Box>
  );
}

export default TopExercises;
