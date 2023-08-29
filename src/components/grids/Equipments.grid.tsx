import { Alert, Avatar, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import equipmentsIcon from '../../assets/images/icons/equipments.png';
import Skeleton from '../Skeleton';

function EquipmentsGrid(props: EquipmentsGridProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  if (isLoading) {
    return <Skeleton variant='category' />;
  }

  if (Object.keys(props.equipments).length > 0) {
    return (
      <Grid
        container
        columnSpacing={3}
        rowSpacing={3}
        justifyContent='center'
        alignItems='stretch'
      >
        {Object.keys(props.equipments)
          .slice(0, props.count)
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
                className='effect-scale'
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
    );
  } else {
    return <Alert severity='error'>No Equipments found</Alert>;
  }
}

export default EquipmentsGrid;
