import { Avatar, Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import bodyPartsIcon from '../../assets/images/icons/body-parts.png';
import AsyncWrapper from '../../containers/AsyncWrapper';
import { getBodyPart } from '../../core/API';

function BodyParts() {
  const [bodyParts, setBodyParts] = useState<string[]>([]);

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

      <AsyncWrapper<BodyParts>
        apiCall={getBodyPart}
        variant='category'
        setData={setBodyParts}
      >
        <Grid
          container
          columnSpacing={3}
          rowSpacing={3}
          justifyContent='center'
        >
          {bodyParts.slice(0, 9).map((part) => (
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
      </AsyncWrapper>
    </Box>
  );
}

export default BodyParts;
