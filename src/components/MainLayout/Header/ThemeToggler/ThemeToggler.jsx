import { useTheme } from 'hooks/useTheme';
import Icons from 'images/sprite.svg';
import { Button, Moon, Sun } from './ThemeToggler.styled';
import { useLocation } from 'react-router-dom';

export const ThemeToggler = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const handleTheme = evt => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    location.pathname !== '/' && (
      <Button type="button" onClick={handleTheme}>
        {theme === 'light' ? (
          <Moon>
            <use href={`${Icons}#profile-moon-f`}></use>
          </Moon>
        ) : (
          <Sun>
            <use href={`${Icons}#profile-sun-f`}></use>
          </Sun>
        )}
      </Button>
    )
  );
};
