import { Alert, Avatar, Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import targetMusclesIcon from '../../assets/images/icons/target-muscles.png';
import { RootStoreState } from '../../redux/store';

function TargetMuscles() {
  const targetMuscles =
    useSelector((state: RootStoreState) => state.api.targets) ?? {};

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

      {!Object.keys(targetMuscles)?.length && (
        <Alert severity='error'>No Target Muscles found</Alert>
      )}

      {Object.keys(targetMuscles).length > 0 && (
        <>
          <Grid
            container
            columnSpacing={3}
            rowSpacing={3}
            justifyContent='center'
          >
            {Object.keys(targetMuscles)
              .slice(0, 8)
              .map((muscle) => (
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
        </>
      )}
    </Box>
  );
}

export default TargetMuscles;
