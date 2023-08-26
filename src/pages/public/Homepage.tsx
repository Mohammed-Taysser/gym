import { Container } from '@mui/material';
import BodyParts from '../../components/homepage/BodyParts';
import Equipments from '../../components/homepage/Equipments';
import HeroBanner from '../../components/homepage/HeroBanner';
import TargetMuscles from '../../components/homepage/TargetMuscles';
import TopExercises from '../../components/homepage/TopExercises';

function Homepage() {
  return (
    <div className='homepage'>
      <Container maxWidth='md'>
        <HeroBanner />
        <BodyParts />
        <Equipments />
        <TargetMuscles />
        <TopExercises />
      </Container>
    </div>
  );
}

export default Homepage;
