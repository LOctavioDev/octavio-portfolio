import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#4c95d1',
        darkBg: '#131425',
      },
      backgroundImage: {
        'gradient-cover':
          'linear-gradient(90.21deg, rgba(40, 54, 124, 0.5) 0%, rgba(53, 27, 89, 0.5) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
