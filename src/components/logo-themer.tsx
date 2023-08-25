'use client';
import { useTheme } from 'next-themes';
import { Asyncasadlogo } from '../../public/svgs/icons/iconcomponents';
const LogoThemer = () => {
  const { theme, setTheme } = useTheme();
  const toggleMultipleThemes = () => {
    if (theme === 'rock') {
      setTheme('disco');
    } else if (theme === 'disco') {
      setTheme('monochrome');
    } else if (theme === 'monochrome') {
      setTheme('light');
    } else {
      setTheme('rock');
    }
  };
  return (
    <button
      onClick={() => {
        toggleMultipleThemes();
      }}
    >
      <Asyncasadlogo className="h-[80px] w-[80px]" />
    </button>
  );
};

export default LogoThemer;
