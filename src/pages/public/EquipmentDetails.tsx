import { Alert, Container, Pagination, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import ExercisesGrid from '../../components/grids/Exercises.grid';
import AsyncWrapper from '../../containers/AsyncWrapper';
import { getExercisesByEquipment } from '../../core/API';

function EquipmentDetails() {
  const COUNT = 12;
  const { title = '' } = useParams();
  const [allExercises, setAllExercises] = useState<Exercise[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState({
    limit: 1,
    page: parseInt(searchParams.get('page') ?? '1'),
  });

  if (!title) {
    return <Alert severity='error'>No Equipment Provide</Alert>;
  }

  const onExercisesFetch = (exercise: Exercise[]) => {
    setAllExercises(exercise);
    if (exercise.length > COUNT) {
      setExercises(
        exercise.slice(pagination.page * COUNT, pagination.page * COUNT + COUNT)
      );
      setPagination((prev) => ({
        ...prev,
        limit: Math.floor(exercise.length / COUNT),
      }));
    } else {
      setExercises(exercise);
    }
  };

  const onPageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setExercises(allExercises.slice(value * COUNT, value * COUNT + COUNT));
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
          apiCall={() => getExercisesByEquipment(title)}
          variant='exercise'
          setData={onExercisesFetch}
        >
          <ExercisesGrid exercises={exercises} hide={['equipment']} />

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

export default EquipmentDetails;
