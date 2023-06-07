import { useLayoutEffect, useState } from 'react';
export const useTheme = () => {
  let userTheme;
  if (window.matchMedia) {
    userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme') || `${userTheme}`
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);
  return { theme, setTheme };
};
