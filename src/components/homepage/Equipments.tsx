import { Avatar, Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEquipments } from '../../core/API';
import ErrorMessage from '../ErrorMessage';
import MUISkeleton from '../Skeleton';
import equipmentsIcon from '../../assets/images/icons/equipments.png';

function Equipments() {
  const [isLoading, setIsLoading] = useState(true);
  const [equipments, setEquipments] = useState<string[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    fetchEquipments();
  }, []);

  const fetchEquipments = async () => {
    setError(undefined);
    await getEquipments()
      .then((response) => {
        setEquipments(response.data.slice(0, 8));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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

      <ErrorMessage error={error} />
      {isLoading ? (
        <MUISkeleton variant='category' />
      ) : (
        <Grid
          container
          columnSpacing={3}
          rowSpacing={3}
          justifyContent='center'
        >
          {equipments.map((equipment) => (
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
      )}
    </Box>
  );
}

export default Equipments;
