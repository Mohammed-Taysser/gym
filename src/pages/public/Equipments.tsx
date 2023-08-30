import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Banner from '../../components/Banner';
import EquipmentsGrid from '../../components/grids/Equipments.grid';
import usePageTitle from '../../hooks/usePageTitle';
import { RootStoreState } from '../../redux/store';

function Equipments() {
  usePageTitle(`Equipments`);
  const equipments = useSelector(
    (state: RootStoreState) => state.api.equipments
  );

  return (
    <>
      <Banner>
        <Typography fontWeight={700} variant='h3' textAlign='center'>
          All Equipments
        </Typography>
      </Banner>

      <Container maxWidth='md' sx={{ my: 15 }}>
        <EquipmentsGrid equipments={equipments} />
      </Container>
    </>
  );
}

export default Equipments;
