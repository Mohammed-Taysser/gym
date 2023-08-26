import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <div>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default BaseLayout;
