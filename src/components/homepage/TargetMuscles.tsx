import { Avatar, Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTargetMuscles } from '../../core/API';
import ErrorMessage from '../ErrorMessage';
import MUISkeleton from '../Skeleton';
import targetMusclesIcon from '../../assets/images/icons/target-muscles.png';

function TargetMuscles() {
  const [isLoading, setIsLoading] = useState(true);
  const [targetMuscles, setTargetMuscles] = useState<string[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    fetchTargetMuscles();
  }, []);

  const fetchTargetMuscles = async () => {
    setError(undefined);
    await getTargetMuscles()
      .then((response) => {
        setTargetMuscles(response.data.slice(0, 9));
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
          {targetMuscles.map((muscle) => (
            <Grid
              key={muscle}
              item
              md={2}
              component={Link}
              to={`/target-muscles/${muscle}`}
              sx={{ textDecoration: 'none', color: 'black' }}
            >
              <Avatar
                src={targetMusclesIcon}
                alt='target-muscles-icon'
                variant='rounded'
                sx={{ mx: 'auto', mb: 1 }}
              />

              <Typography
                variant='subtitle1'
                textAlign='center'
                fontWeight={500}
                textTransform='capitalize'
              >
                {muscle}
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default TargetMuscles;
