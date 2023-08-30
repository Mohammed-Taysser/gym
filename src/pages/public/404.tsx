import usePageTitle from '../../hooks/usePageTitle';
import image from '../../assets/images/background/404.jpg'
import { Container, Grid } from '@mui/material';

function NotFound() {
  usePageTitle(`404 - Page Not Found`);

  return <Container>
    <Grid container justifyContent='center' >
      <Grid item md={6} >
        <img src={image} alt='404' className='img-fluid' />
      </Grid>
    </Grid>
  </Container>
}

export default NotFound;
