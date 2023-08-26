import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { BiTargetLock } from 'react-icons/bi';
import { IoMdBody, IoMdFitness } from 'react-icons/io';
import { Link } from 'react-router-dom';

function ExercisesGrid(props: ExerciseGridProps) {
  return (
    <Grid
      container
      columnSpacing={3}
      rowSpacing={3}
      justifyContent='center'
      alignItems='stretch'
    >
      {props.exercises.map((exercise) => (
        <Grid
          key={exercise.id}
          item
          sm={6}
          md={4}
          component={Link}
          to={`/exercises/${exercise.id}`}
          sx={{ textDecoration: 'none', color: 'black' }}
        >
          <Card variant='elevation' sx={{ height: '100%' }}>
            <CardMedia
              sx={{ height: 200 }}
              image={exercise.gifUrl}
              title={exercise.name}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                textTransform='capitalize'
                textAlign='center'
              >
                {exercise.name}
              </Typography>
              <Stack direction='column' alignItems='flex-start' mt={2}>
                {!props?.hide?.includes('equipment') && (
                  <Button
                    variant='text'
                    sx={{ textTransform: 'capitalize' }}
                    color='success'
                    size='small'
                    startIcon={<IoMdFitness />}
                    component={Link}
                    to={`/equipment/${exercise.equipment}`}
                  >
                    {exercise.equipment}
                  </Button>
                )}

                {!props?.hide?.includes('bodyPart') && (
                  <Button
                    variant='text'
                    sx={{ textTransform: 'capitalize' }}
                    color='error'
                    size='small'
                    startIcon={<IoMdBody />}
                    component={Link}
                    to={`/body-part/${exercise.bodyPart}`}
                  >
                    {exercise.bodyPart}
                  </Button>
                )}

                {!props?.hide?.includes('target') && (
                  <Button
                    variant='text'
                    sx={{ textTransform: 'capitalize' }}
                    color='info'
                    size='small'
                    startIcon={<BiTargetLock />}
                  >
                    {exercise.target}
                  </Button>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ExercisesGrid;
