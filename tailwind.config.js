import { colors, keepTheme } from 'keep-react/keepTheme';

const colorsPalette = {
  ...colors,
  primary: {
    25: '#edeef1',
    50: '#e8eaee',
    100: '#b8bdcb',
    200: '#959db1',
    300: '#65708e',
    400: '#475578',
    500: '#192a56',
    600: '#17264e',
    700: '#121e3d',
    800: '#0e172f',
    900: '#0b1224',
  },
  metal: {
    25: '#edeef1',
    50: '#e8eaee',
    100: '#b8bdcb',
    200: '#959db1',
    300: '#65708e',
    400: '#475578',
    500: '#192a56',
    600: '#17264e',
    700: '#121e3d',
    800: '#0e172f',
    900: '#0b1224',
  },
  // primary: {
  //   50: '#eeece8',
  //   100: '#cbc5b8',
  //   200: '#b1a995',
  //   300: '#8e8265',
  //   400: '#786a47',
  //   500: '#564519',
  //   600: '#4e3f17',
  //   700: '#3d3112',
  //   800: '#2f260e',
  //   900: '#241d0b',
  // },
};

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
      },
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};

export default keepTheme(config, colorsPalette);
