import { Alert, Avatar, Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import bodyPartsIcon from '../../assets/images/icons/body-parts.png';
import equipmentsIcon from '../../assets/images/icons/equipments.png';
import targetIcon from '../../assets/images/icons/target.png';
import { getExerciseById } from '../../redux/exercises.slice';
import { RootStoreState } from '../../redux/store';

function ExerciseDetail() {
  const { id = '' } = useParams();
  const dispatch = useDispatch();
  const exercise = useSelector(
    (state: RootStoreState) => state.api.exerciseBy.id
  );

  useEffect(() => {
    dispatch(getExerciseById(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Container maxWidth='md' sx={{ my: 15 }}>
      {!id && <Alert severity='error'>No id Provide</Alert>}
      {!exercise && <Alert severity='error'>No Exercise found</Alert>}
      {exercise && (
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item md={6}>
            <img src={exercise?.gifUrl} alt={exercise?.name} className='img-fluid' />
          </Grid>

          <Grid item md={6}>
            <Typography
              variant='h3'
              fontWeight={700}
              mb={3}
              textTransform='capitalize'
            >
              {exercise?.name}
            </Typography>

            <Typography variant='h6' fontWeight={400} color='gray'>
              Exercises keep you strong.{' '}
              <Typography
                display='inline-block'
                fontSize='inherit'
                fontWeight='inherit'
                textTransform='capitalize'
              >
                {exercise?.name}
              </Typography>{' '}
              bup is one of the best exercises to target your {exercise?.target}
              . It will help you improve your mood and gain energy.
            </Typography>

            <Grid
              container
              columnSpacing={3}
              rowSpacing={3}
              mt={6}
              justifyContent='center'
            >
              <Grid item xs={4}>
                <Avatar
                  src={equipmentsIcon}
                  alt='equipments-icon'
                  variant='rounded'
                  sx={{ mx: 'auto', mb: 1 }}
                />

                <Typography
                  variant='subtitle1'
                  textAlign='center'
                  fontWeight={500}
                  textTransform='capitalize'
                >
                  {exercise?.equipment}
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Avatar
                  src={bodyPartsIcon}
                  alt='equipments-icon'
                  variant='rounded'
                  sx={{ mx: 'auto', mb: 1 }}
                />

                <Typography
                  variant='subtitle1'
                  textAlign='center'
                  fontWeight={500}
                  textTransform='capitalize'
                >
                  {exercise?.bodyPart}
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Avatar
                  src={targetIcon}
                  alt='equipments-icon'
                  variant='rounded'
                  sx={{ mx: 'auto', mb: 1 }}
                />

                <Typography
                  variant='subtitle1'
                  textAlign='center'
                  fontWeight={500}
                  textTransform='capitalize'
                >
                  {exercise?.target}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default ExerciseDetail;
