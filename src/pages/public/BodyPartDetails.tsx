import {
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
import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import ErrorMessage from '../../components/ErrorMessage';
import MUISkeleton from '../../components/Skeleton';
import { getExercisesByBodyPart } from '../../core/API';

function BodyPartDetails() {
  const COUNT = 9;
  const { title = '' } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [allExercises, setAllExercises] = useState<Exercise[]>([]);
  const [exercise, setExercise] = useState<Exercise[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState({
    limit: 1,
    page: parseInt(searchParams.get('page') ?? '1'),
  });

  useEffect(() => {
    if (title) {
      fetchExercises();
    }
  }, [title]);

  const fetchExercises = async () => {
    setError(undefined);
    await getExercisesByBodyPart(title)
      .then((response) => {
        setAllExercises(response.data);
        if (response.data.length > COUNT) {
          setExercise(
            response.data.slice(
              pagination.page * COUNT,
              pagination.page * COUNT + COUNT
            )
          );
          setPagination((prev) => ({
            ...prev,
            limit: Math.floor(response.data.length / COUNT),
          }));
        } else {
          setExercise(response.data);
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
        <ErrorMessage error={error} />
        {isLoading ? (
          <MUISkeleton variant='exercise' />
        ) : (
          <>
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
          </>
        )}
      </Container>
    </>
  );
}

export default BodyPartDetails;
