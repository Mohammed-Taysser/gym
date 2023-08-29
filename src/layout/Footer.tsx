import { Box, Stack, Typography } from '@mui/material';
import logo from '../assets/images/icons/logo-full.png';

function Footer() {
  return (
    <Box mt='80px' bgcolor='#fff' pt={3}>
      <Stack alignItems='center'>
        <img src={logo} alt='favicon full' className='favicon-full' />
      </Stack>
      <Typography variant='body1' mt={4} textAlign='center' pb='40px'>
        © 2023 All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Footer;
