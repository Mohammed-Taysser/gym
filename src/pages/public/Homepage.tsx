import { Box, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import BodyPartsGrid from '../../components/grids/BodyParts.grid';
import EquipmentsGrid from '../../components/grids/Equipments.grid';
import ExercisesGrid from '../../components/grids/Exercises.grid';
import TargetMusclesGrid from '../../components/grids/TargetMuscles.grid';
import HeroBanner from '../../components/homepage/HeroBanner';
import { RootStoreState } from '../../redux/store';

function Homepage() {
  const bodyParts = useSelector((state: RootStoreState) => state.api.bodyParts);
  const exercises = useSelector((state: RootStoreState) => state.api.exercises);
  const equipments = useSelector(
    (state: RootStoreState) => state.api.equipments
  );
  const targetMuscles = useSelector(
    (state: RootStoreState) => state.api.targets
  );

  return (
    <div className='homepage'>
      <Container maxWidth='md'>
        <HeroBanner />

        <Box sx={{ my: 15 }}>
          <Typography fontWeight={700} variant='h3' mb={8} textAlign='center'>
            Awesome{' '}
            <Typography
              display='inline-block'
              fontSize='inherit'
              fontWeight='inherit'
              color='primary'
            >
              Body Part
            </Typography>{' '}
            Training You <br /> Should Know
          </Typography>

          <BodyPartsGrid count={8} bodyParts={bodyParts} />
        </Box>

        <Box sx={{ my: 15 }}>
          <Typography fontWeight={700} variant='h3' mb={8} textAlign='center'>
            Advanced{' '}
            <Typography
              display='inline-block'
              fontSize='inherit'
              fontWeight='inherit'
              color='primary'
            >
              Equipments
            </Typography>{' '}
            You <br /> Should Try
          </Typography>

          <EquipmentsGrid count={8} equipments={equipments} />
        </Box>

        <Box sx={{ my: 15 }}>
          <Typography fontWeight={700} variant='h3' mb={8} textAlign='center'>
            List Of{' '}
            <Typography
              display='inline-block'
              fontSize='inherit'
              fontWeight='inherit'
              color='primary'
            >
              Muscles
            </Typography>{' '}
            We <br /> Target
          </Typography>

          <TargetMusclesGrid count={9} targetMuscles={targetMuscles} />
        </Box>

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
      </Container>
    </div>
  );
}

export default Homepage;
