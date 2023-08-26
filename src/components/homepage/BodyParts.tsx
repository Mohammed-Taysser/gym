import { Avatar, Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBodyPart } from '../../core/API';
import ErrorMessage from '../ErrorMessage';
import MUISkeleton from '../Skeleton';
import bodyPartsIcon from '../../assets/images/icons/body-parts.png';

function BodyParts() {
  const [isLoading, setIsLoading] = useState(true);
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    fetchBodyParts();
  }, []);

  const fetchBodyParts = async () => {
    setError(undefined);
    await getBodyPart()
      .then((response) => {
        setBodyParts(response.data);
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
          {bodyParts.map((part) => (
            <Grid
              key={part}
              item
              md={2}
              component={Link}
              to={`/body-part/${part}`}
              sx={{ textDecoration: 'none', color: 'black' }}
            >
              <Avatar
                src={bodyPartsIcon}
                alt='body-part-icon'
                variant='rounded'
                sx={{ mx: 'auto', mb: 1 }}
              />

              <Typography
                variant='subtitle1'
                textAlign='center'
                fontWeight={500}
                textTransform='capitalize'
              >
                {part}
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default BodyParts;
