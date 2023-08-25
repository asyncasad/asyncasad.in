import { type Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground)',
        background: 'var(--background)',
      },
      boxShadow: {
        card: '5px 5px var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;
