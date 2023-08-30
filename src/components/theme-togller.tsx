'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from '../../public/svgs/icons/iconcomponents';
const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <button onClick={handleChangeTheme}>
      {theme !== 'dark' ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggler;
