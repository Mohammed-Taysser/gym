import { useEffect, useState } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import MUISkeleton from '../components/Skeleton';

function AsyncWrapper<T>(props: AsyncProps<T>) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setError(undefined);
    await props
      .apiCall()
      .then((response) => {
        props.setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (isLoading) {
    return <MUISkeleton variant={props.variant} />;
  }

  return props.children;
}

export default AsyncWrapper;
