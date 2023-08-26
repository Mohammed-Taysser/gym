import { Avatar, Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import equipmentsIcon from '../../assets/images/icons/equipments.png';
import AsyncWrapper from '../../containers/AsyncWrapper';
import { getEquipments } from '../../core/API';

function Equipments() {
  const [equipments, setEquipments] = useState<string[]>([]);

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

      <AsyncWrapper<Equipments>
        apiCall={getEquipments}
        variant='category'
        setData={setEquipments}
      >
        <Grid
          container
          columnSpacing={3}
          rowSpacing={3}
          justifyContent='center'
        >
          {equipments.slice(0, 8).map((equipment) => (
            <Grid
              key={equipment}
              item
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
      </AsyncWrapper>
    </Box>
  );
}

export default Equipments;
