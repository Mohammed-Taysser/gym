import { Box, CircularProgress, Grid, Skeleton, Stack } from '@mui/material';
import { nanoid } from 'nanoid';

function MUISkeleton(props: { repeat?: number; variant?: SkeletonVariant }) {
  const repeat = props.repeat ?? 8;
  let Skt = Default;

  if (!props.variant) {
    return <Default />;
  }

  switch (props.variant) {
    case 'category':
      Skt = Category;
      break;
    case 'exercise':
      Skt = Exercise;
      break;
  }

  return (
    <Grid container columnSpacing={2} rowSpacing={2}>
      {Array.from({ length: repeat }).map(() => (
        <Grid key={nanoid()} item md={3}>
          <Skt />
        </Grid>
      ))}
    </Grid>
  );
}

const Default = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

const Category = () => {
  return (
    <Box textAlign='center'>
      <Skeleton
        variant='circular'
        width={40}
        height={40}
        sx={{ mx: 'auto', mb: 1 }}
      />
      <Skeleton variant='rectangular' width='100%' height={20} />
    </Box>
  );
};

const Exercise = () => {
  return (
    <Box textAlign='center'>
      <Skeleton variant='rectangular' width='100%' height={200} />
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        sx={{ mt: 3 }}
      >
        <Skeleton variant='rectangular' width='100%' height={20} />
        <Skeleton variant='rectangular' width='100%' height={20} />
        <Skeleton variant='rectangular' width='100%' height={20} />
      </Stack>
    </Box>
  );
};

export default MUISkeleton;
