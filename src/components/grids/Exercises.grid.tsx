import {
  Alert,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { BiTargetLock } from 'react-icons/bi';
import { IoMdBody, IoMdFitness } from 'react-icons/io';
import { Link, useSearchParams } from 'react-router-dom';
import Skeleton from '../Skeleton';

function ExercisesGrid(props: ExerciseGridProps) {
  const COUNT = props.count ?? 12;
  const [searchParams, setSearchParams] = useSearchParams();
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 1,
    page: parseInt(searchParams.get('page') ?? '1'),
  });

  useEffect(() => {
    setIsLoading(true);
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    if (props.exercises.length > COUNT) {
      const pageNumber = pagination.page - 1;
      setExercises(
        props.exercises.slice(pageNumber * COUNT, pageNumber * COUNT + COUNT)
      );
      setPagination((prev) => ({
        ...prev,
        limit: Math.ceil(props.exercises.length / COUNT),
      }));
    } else {
      setExercises(props.exercises);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.exercises]);

  const onPageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setExercises(
      props.exercises.slice((value - 1) * COUNT, (value - 1) * COUNT + COUNT)
    );

    setPagination((prev) => ({ ...prev, page: value }));
    setSearchParams({ page: value.toString() });
  };

  if (isLoading) {
    return <Skeleton variant='exercise' />;
  }

  if (props.exercises.length > 0) {
    return (
      <>
        <Grid
          container
          columnSpacing={3}
          rowSpacing={3}
          justifyContent='center'
          alignItems='stretch'
        >
          {exercises.map((exercise) => (
            <Grid
              key={exercise.id}
              item
              md={4}
              component={Link}
              to={`/exercises/${exercise.id}`}
              sx={{ textDecoration: 'none', color: 'black' }}
            >
              <Card variant='elevation' sx={{ height: '100%' }}>
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
                  <Stack direction='column' alignItems='flex-start' mt={2}>
                    {!props?.hide?.includes('equipment') && (
                      <Button
                        variant='text'
                        sx={{ textTransform: 'capitalize' }}
                        color='success'
                        size='small'
                        startIcon={<IoMdFitness />}
                        component={Link}
                        to={`/equipments/${exercise.equipment}`}
                      >
                        {exercise.equipment}
                      </Button>
                    )}

                    {!props?.hide?.includes('bodyPart') && (
                      <Button
                        variant='text'
                        sx={{ textTransform: 'capitalize' }}
                        color='error'
                        size='small'
                        startIcon={<IoMdBody />}
                        component={Link}
                        to={`/body-parts/${exercise.bodyPart}`}
                      >
                        {exercise.bodyPart}
                      </Button>
                    )}

                    {!props?.hide?.includes('target') && (
                      <Button
                        variant='text'
                        sx={{ textTransform: 'capitalize' }}
                        color='info'
                        size='small'
                        startIcon={<BiTargetLock />}
                        component={Link}
                        to={`/target-muscles/${exercise.target}`}
                      >
                        {exercise.target}
                      </Button>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {!props.hidePagination && props.exercises.length > COUNT && (
          <Pagination
            count={pagination.limit}
            page={pagination.page}
            onChange={onPageChange}
            sx={{ mt: 5 }}
            variant='outlined'
          />
        )}
      </>
    );
  } else {
    return <Alert severity='error'>No Exercises found</Alert>;
  }
}

export default ExercisesGrid;
