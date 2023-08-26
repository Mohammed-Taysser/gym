import { Alert } from '@mui/material';
import axios from 'axios';

const ErrorMessage = (props: { error?: Error }) => {
  const errorMessage = getErrorMessage(props.error);

  if (!errorMessage) {
    return <></>;
  }

  return (
    <Alert severity='error' sx={{ my: 1 }}>
      {errorMessage}
    </Alert>
  );
};

const getErrorMessage = (error?: Error) => {
  if (!error) {
    return '';
  }

  if (axios.isAxiosError(error)) {
    // Access to config, request, and response
    if (error?.response?.data.message) {
      return error?.response?.data.message;
    }

    if (error?.response?.data.error) {
      return error?.response?.data.error;
    }

    if (error?.message === 'Network Error') {
      return `Please check your internet connection and try again.`;
    }

    if (error?.message === 'Request aborted') {
      return `Request had been canceled`;
    }
  }

  return JSON.stringify(error);
};

export default ErrorMessage;
