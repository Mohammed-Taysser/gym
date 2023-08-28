import { Alert, Avatar, Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import equipmentsIcon from '../../assets/images/icons/equipments.png';
import { RootStoreState } from '../../redux/store';

function Equipments() {
  const equipments =
    useSelector((state: RootStoreState) => state.api.equipments) ?? {};

  return (
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

      {!Object.keys(equipments)?.length && (
        <Alert severity='error'>No Equipments found</Alert>
      )}

      {Object.keys(equipments).length > 0 && (
        <>
          <Grid
            container
            columnSpacing={3}
            rowSpacing={3}
            justifyContent='center'
          >
            {Object.keys(equipments)
              .slice(0, 8)
              .map((equipment) => (
                <Grid
                  key={equipment}
                  item
                  xs={3}
                  md={2}
                  component={Link}
                  to={`/equipments/${equipment}`}
                  sx={{ textDecoration: 'none', color: 'black' }}
                >
                  <Avatar
                    src={equipmentsIcon}
                    alt='equipments-icon'
                    variant='rounded'
                    sx={{ mx: 'auto', mb: 1 }}
                  />

                  <Typography
                    variant='subtitle1'
                    textAlign='center'
                    fontWeight={500}
                    textTransform='capitalize'
                  >
                    {equipment}
                  </Typography>
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </Box>
  );
}

export default Equipments;
