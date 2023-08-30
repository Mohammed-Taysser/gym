import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Banner from '../../components/Banner';
import BodyPartsGrid from '../../components/grids/BodyParts.grid';
import usePageTitle from '../../hooks/usePageTitle';
import { RootStoreState } from '../../redux/store';

function BodyParts() {
  usePageTitle(`Body Parts`);
  const bodyParts = useSelector((state: RootStoreState) => state.api.bodyParts);

  return (
    <>
      <Banner>
        <Typography fontWeight={700} variant='h3' textAlign='center'>
          All Body Part
        </Typography>
      </Banner>

      <Container maxWidth='md' sx={{ my: 15 }}>
        <BodyPartsGrid bodyParts={bodyParts} />
      </Container>
    </>
  );
}

export default BodyParts;
