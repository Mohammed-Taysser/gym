import { Alert, Avatar, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bodyPartsIcon from '../../assets/images/icons/body-parts.png';
import Skeleton from '../Skeleton';

function BodyPartsGrid(props: BodyPartsGridProps) {
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

  if (Object.keys(props.bodyParts).length > 0) {
    return (
      <Grid
        container
        columnSpacing={3}
        rowSpacing={3}
        justifyContent='center'
        alignItems='stretch'
      >
        {Object.keys(props.bodyParts)
          .slice(0, props.count)
          .map((part) => (
            <Grid
              key={part}
              item
              md={2}
              xs={3}
              component={Link}
              to={`/body-parts/${part}`}
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
    );
  } else {
    return <Alert severity='error'>No Body Parts found</Alert>;
  }
}

export default BodyPartsGrid;
