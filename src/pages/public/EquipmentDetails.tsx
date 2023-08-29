import { Alert, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import ExercisesGrid from '../../components/grids/Exercises.grid';
import { getExercisesByEquipment } from '../../redux/exercises.slice';
import { RootStoreState } from '../../redux/store';

function EquipmentDetails() {
  const dispatch = useDispatch();
  const { title = '' } = useParams();
  const exercises =
    useSelector((state: RootStoreState) => state.api.exerciseBy.equipment) ??
    [];

  useEffect(() => {
    dispatch(getExercisesByEquipment(title));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  return (
    <>
      <Banner>
        <Typography fontWeight={700} variant='h3' textAlign='center'>
          <Link className='reset-link' to='/equipments'>
            Equipments
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

        <ExercisesGrid exercises={exercises} hide={['equipment']} />
      </Container>
    </>
  );
}

export default EquipmentDetails;
