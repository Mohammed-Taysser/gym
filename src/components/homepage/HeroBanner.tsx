import { Button, Grid, Typography } from '@mui/material';
import { IoMdFitness } from 'react-icons/io';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/images/background/hero-banner.svg';

function HeroBanner() {
  return (
    <Grid container my={10} className='banner' columnSpacing={2} rowSpacing={2}>
      <Grid item md={6}>
        <Typography color='primary' fontWeight='600' variant='h4'>
          Fitness Club
        </Typography>

        <Typography fontWeight={700} variant='h3' sx={{ my: 3 }}>
          Sweat, Smile <br />
          And Repeat
        </Typography>

        <Typography variant='h5' color='gray'>
          Check out the most effective exercises personalized to you
        </Typography>

        <Button
          variant='contained'
          size='large'
          sx={{ mt: 3 }}
          startIcon={<IoMdFitness />}
          component={Link}
          to='/exercises'
        >
          Explore Exercises
        </Button>
      </Grid>

      <Grid item md={6}>
        <img alt='hero-banner' src={bannerImage} className='banner-image' />
      </Grid>
    </Grid>
  );
}

export default HeroBanner;
