import { Alert, Avatar, Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import bodyPartsIcon from '../../assets/images/icons/body-parts.png';
import { RootStoreState } from '../../redux/store';

function BodyParts() {
  const bodyParts =
    useSelector((state: RootStoreState) => state.api.bodyParts) ?? {};

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

      {!Object.keys(bodyParts)?.length && (
        <Alert severity='error'>No Body Part found</Alert>
      )}

      {Object.keys(bodyParts).length > 0 && (
        <>
          <Grid
            container
            columnSpacing={3}
            rowSpacing={3}
            justifyContent='center'
          >
            {Object.keys(bodyParts)
              .slice(0, 9)
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
        </>
      )}
    </Box>
  );
}

export default BodyParts;
