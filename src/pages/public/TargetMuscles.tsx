import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Banner from '../../components/Banner';
import TargetMusclesGrid from '../../components/grids/TargetMuscles.grid';
import { RootStoreState } from '../../redux/store';

function Equipments() {
  const targetMuscles = useSelector(
    (state: RootStoreState) => state.api.targets
  );

  return (
    <>
      <Banner>
        <Typography fontWeight={700} variant='h3' textAlign='center'>
          All Target Muscle
        </Typography>
      </Banner>

      <Container maxWidth='md' sx={{ my: 15 }}>
        <TargetMusclesGrid targetMuscles={targetMuscles} />
      </Container>
    </>
  );
}

export default Equipments;
