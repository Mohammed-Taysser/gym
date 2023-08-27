import { Alert, Container, Pagination, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import ExercisesGrid from '../../components/grids/Exercises.grid';
import { getExercisesByEquipment } from '../../redux/exercises.slice';
import { RootStoreState } from '../../redux/store';

function EquipmentDetails() {
  const COUNT = 12;
  const dispatch = useDispatch();
  const { title = '' } = useParams();
  const allExercises =
    useSelector((state: RootStoreState) => state.api.exerciseBy.equipment) ??
    [];
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState({
    limit: 1,
    page: parseInt(searchParams.get('page') ?? '1'),
  });

  useEffect(() => {
    dispatch(getExercisesByEquipment(title));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  useEffect(() => {
    if (allExercises.length > COUNT) {
      setExercises(
        allExercises.slice(
          pagination.page * COUNT,
          pagination.page * COUNT + COUNT
        )
      );
      setPagination((prev) => ({
        ...prev,
        limit: Math.floor(allExercises.length / COUNT),
      }));
    } else {
      setExercises(allExercises);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [allExercises]);

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
        {!title && <Alert severity='error'>No title Provide</Alert>}
        {!allExercises?.length && (
          <Alert severity='error'>No Exercises found</Alert>
        )}

        {allExercises.length > 0 && (
          <>
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
          </>
        )}
      </Container>
    </>
  );
}

export default EquipmentDetails;
