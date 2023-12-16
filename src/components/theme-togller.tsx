'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from '../../public/svgs/icons/iconcomponents';
const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setIsDark(theme === "dark");
  }, [theme]);
  if (!mounted) {
    return null;
  }
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggler;
