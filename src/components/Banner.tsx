import { Box, Stack } from '@mui/material';
import image from '../assets/images/background/banner.jpg';
import React from 'react';

function Banner(props: { children: React.ReactElement }) {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)), url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        mb: 8,
      }}
    >
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{ height: '250px' }}
      >
        {props.children}
      </Stack>
    </Box>
  );
}

export default Banner;
