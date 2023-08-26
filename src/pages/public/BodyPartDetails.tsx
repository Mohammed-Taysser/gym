import {
  Alert,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import AsyncWrapper from '../../containers/AsyncWrapper';
import { getExercisesByBodyPart } from '../../core/API';

function BodyPartDetails() {
  const COUNT = 9;
  const { title = '' } = useParams();
  const [allExercises, setAllExercises] = useState<Exercise[]>([]);
  const [exercise, setExercise] = useState<Exercise[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState({
    limit: 1,
    page: parseInt(searchParams.get('page') ?? '1'),
  });

  if (!title) {
    return <Alert severity='error'>No Body Part Provide</Alert>;
  }

  const onExercisesFetch = (exercise: Exercise[]) => {
    setAllExercises(exercise);
    if (exercise.length > COUNT) {
      setExercise(
        exercise.slice(pagination.page * COUNT, pagination.page * COUNT + COUNT)
      );
      setPagination((prev) => ({
        ...prev,
        limit: Math.floor(exercise.length / COUNT),
      }));
    } else {
      setExercise(exercise);
    }
  };

  const onPageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setExercise(allExercises.slice(value * COUNT, value * COUNT + COUNT));
    setPagination((prev) => ({ ...prev, page: value }));
    setSearchParams({ page: value.toString() });
  };

  return (
    <>
      <Banner>
        <Typography fontWeight={700} variant='h3' textAlign='center'>
          <Link className='reset-link' to='/exercises'>
            Exercises
          </Link>{' '}
          /{' '}
          <Typography
            display='inline-block'
            fontSize='inherit'
            fontWeight='inherit'
            textTransform='capitalize'
            color='primary'
          >
            {title}
          </Typography>
        </Typography>
      </Banner>

      <Container maxWidth='md' sx={{ my: 15 }}>
        <AsyncWrapper<Exercise[]>
          apiCall={() => getExercisesByBodyPart(title)}
          variant='exercise'
          setData={onExercisesFetch}
        >
          <Grid
            container
            columnSpacing={3}
            rowSpacing={3}
            justifyContent='center'
            alignItems='stretch'
          >
            {exercise.map((exercise) => (
              <Grid
                key={exercise.id}
                item
                sm={6}
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
                    <Stack
                      direction='row'
                      justifyContent='center'
                      alignItems='center'
                      spacing={2}
                      mt={2}
                    >
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

          {allExercises.length > COUNT && (
            <Pagination
              count={pagination.limit}
              page={pagination.page}
              onChange={onPageChange}
              sx={{ mt: 5 }}
              variant='outlined'
            />
          )}
        </AsyncWrapper>
      </Container>
    </>
  );
}

export default BodyPartDetails;
