import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Banner from '../../components/Banner';
import ExercisesGrid from '../../components/grids/Exercises.grid';
import { RootStoreState } from '../../redux/store';

function Exercises() {
  const exercises = useSelector((state: RootStoreState) => state.api.exercises);

  return (
    <>
      <Banner>
        <Typography fontWeight={700} variant='h3' textAlign='center'>
          All Exercises
        </Typography>
      </Banner>

      <Container maxWidth='md' sx={{ my: 15 }}>
        <ExercisesGrid exercises={exercises} count={18} />
      </Container>
    </>
  );
}

export default Exercises;
