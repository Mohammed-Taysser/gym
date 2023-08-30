import { Alert, Avatar, Box, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import bodyPartsIcon from '../../assets/images/icons/body-parts.png';
import equipmentsIcon from '../../assets/images/icons/equipments.png';
import targetIcon from '../../assets/images/icons/target.png';
import MUISkeleton from '../../components/Skeleton';
import ExercisesGrid from '../../components/grids/Exercises.grid';
import {
  getExerciseById,
  getSimilarExercises,
} from '../../redux/exercises.slice';
import { RootStoreState } from '../../redux/store';

function ExerciseDetail() {
  const { id = '' } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const exercise = useSelector(
    (state: RootStoreState) => state.api.exerciseBy.id
  );

  const similar = useSelector((state: RootStoreState) => state.api.similar);

  useEffect(() => {
    dispatch(getExerciseById(id));

    setIsLoading(true);

    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timerId);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (exercise) {
      dispatch(getSimilarExercises(exercise));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exercise]);

  return (
    <Container maxWidth='md' sx={{ my: 15 }}>
      {isLoading ? (
        <MUISkeleton />
      ) : (
        <>
          {!id && <Alert severity='error'>No id Provide</Alert>}

          {!exercise ? (
            <Alert severity='error'>No Exercise found</Alert>
          ) : (
            <Grid container columnSpacing={2} rowSpacing={2}>
              <Grid item md={6}>
                <img
                  src={exercise?.gifUrl}
                  alt={exercise?.name}
                  className='img-fluid'
                />
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
                  bup is one of the best exercises to target your{' '}
                  {exercise?.target}. It will help you improve your mood and
                  gain energy.
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

          <Box mt={10}>
            {similar.bodyPart.length > 0 ? (
              <>
                <Typography
                  fontWeight={700}
                  variant='h3'
                  mb={8}
                  textAlign='center'
                >
                  Similar{' '}
                  <Typography
                    display='inline-block'
                    fontSize='inherit'
                    fontWeight='inherit'
                    color='primary'
                  >
                    Exercises
                  </Typography>{' '}
                  You <br /> May Like
                </Typography>

                <ExercisesGrid
                  exercises={similar.bodyPart.slice(0, 6)}
                  hide={['bodyPart']}
                />
              </>
            ) : (
              <Alert severity='error'>No Exercises found</Alert>
            )}
          </Box>

          <Box mt={10}>
            {similar.equipment.length > 0 ? (
              <>
                <Typography
                  fontWeight={700}
                  variant='h3'
                  mb={8}
                  textAlign='center'
                >
                  Similar{' '}
                  <Typography
                    display='inline-block'
                    fontSize='inherit'
                    fontWeight='inherit'
                    color='primary'
                  >
                    Equipment
                  </Typography>{' '}
                  You <br /> Should Try
                </Typography>

                <ExercisesGrid
                  exercises={similar.equipment.slice(0, 6)}
                  hide={['equipment']}
                />
              </>
            ) : (
              <Alert severity='error'>No Exercises found</Alert>
            )}
          </Box>
        </>
      )}
    </Container>
  );
}

export default ExerciseDetail;
