import { Alert, Avatar, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import targetMusclesIcon from '../../assets/images/icons/target.png';
import Skeleton from '../Skeleton';

function TargetMusclesGrid(props: TargetMusclesGridProps) {
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

  if (Object.keys(props.targetMuscles).length > 0) {
    return (
      <Grid
        container
        columnSpacing={3}
        rowSpacing={3}
        justifyContent='center'
        alignItems='stretch'
      >
        {Object.keys(props.targetMuscles)
          .slice(0, props.count)
          .map((muscle) => (
            <Grid
              key={muscle}
              item
              xs={3}
              md={2}
              component={Link}
              to={`/target-muscles/${muscle}`}
              sx={{ textDecoration: 'none', color: 'black' }}
            >
              <Avatar
                src={targetMusclesIcon}
                alt='target-muscles-icon'
                className='effect-rotate'
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
    );
  } else {
    return <Alert severity='error'>No Target Muscles found</Alert>;
  }
}

export default TargetMusclesGrid;
