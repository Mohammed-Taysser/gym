import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

function ExercisesGrid(props: { exercises: Exercise[] }) {
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
              <Stack
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={2}
                mt={2}
              >
                <Chip
                  variant='outlined'
                  sx={{ textTransform: 'capitalize' }}
                  label={exercise.equipment}
                  color='success'
                  size='small'
                  component={Link}
                  to={`/equipment/${exercise.equipment}`}
                />
                <Chip
                  variant='outlined'
                  sx={{ textTransform: 'capitalize' }}
                  label={exercise.target}
                  size='small'
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ExercisesGrid;
