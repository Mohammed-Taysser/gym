import { useEffect } from 'react';

function usePageTitle(title: string = 'title 🎉') {
  useEffect(() => {
    const oldTitle = document.title;

    setPageTitle(title);

    return () => {
      setPageTitle(oldTitle);
    };
  }, [title]);

  const setPageTitle = (newPageTitle: string) => {
    document.title = `Golds GYM | ${newPageTitle}`;
  };

  return { title, setPageTitle };
}
export default usePageTitle;
