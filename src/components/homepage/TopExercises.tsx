import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getExercises } from '../../core/API';
import ErrorMessage from '../ErrorMessage';
import MUISkeleton from '../Skeleton';

function TopExercises() {
  const [isLoading, setIsLoading] = useState(true);
  const [topExercises, setTopExercises] = useState<Exercise[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    setError(undefined);
    await getExercises()
      .then((response) => {
        setTopExercises(response.data.slice(0, 9));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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

      <ErrorMessage error={error} />
      {isLoading ? (
        <MUISkeleton variant='exercise' />
      ) : (
        <Grid
          container
          columnSpacing={3}
          rowSpacing={3}
          justifyContent='center'
          alignItems='stretch'
        >
          {topExercises.map((exercise) => (
            <Grid
              key={exercise.id}
              item
              sm={6}
              md={4}
              component={Link}
              to={`/exercises/${exercise.id}`}
              sx={{ textDecoration: 'none', color: 'black' }}
            >
              <Card variant='elevation'>
                <CardMedia
                  sx={{ height: 200 }}
                  image={exercise.gifUrl}
                  title={exercise.name}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    textTransform='capitalize'
                    textAlign='center'
                  >
                    {exercise.name}
                  </Typography>
                  <Stack
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={2}
                    mt={2}
                  >
                    <Chip
                      label={exercise.bodyPart}
                      size='small'
                      variant='outlined'
                      color='info'
                      sx={{ textTransform: 'capitalize' }}
                      component={Link}
                      to={`/body-part/${exercise.bodyPart}`}
                    />
                    <Chip
                      variant='outlined'
                      sx={{ textTransform: 'capitalize' }}
                      label={exercise.equipment}
                      color='success'
                      size='small'
                      component={Link}
                      to={`/equipment/${exercise.equipment}`}
                    />
                    <Chip
                      variant='outlined'
                      sx={{ textTransform: 'capitalize' }}
                      label={exercise.target}
                      size='small'
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default TopExercises;
