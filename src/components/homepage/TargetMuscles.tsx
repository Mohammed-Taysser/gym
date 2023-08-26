import { Avatar, Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import targetMusclesIcon from '../../assets/images/icons/target-muscles.png';
import AsyncWrapper from '../../containers/AsyncWrapper';
import { getTargetMuscles } from '../../core/API';

function TargetMuscles() {
  const [targetMuscles, setTargetMuscles] = useState<TargetMuscles>([]);

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

      <AsyncWrapper<TargetMuscles>
        apiCall={getTargetMuscles}
        variant='category'
        setData={setTargetMuscles}
      >
        <Grid
          container
          columnSpacing={3}
          rowSpacing={3}
          justifyContent='center'
        >
          {targetMuscles.slice(0, 9).map((muscle) => (
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
      </AsyncWrapper>
    </Box>
  );
}

export default TargetMuscles;
