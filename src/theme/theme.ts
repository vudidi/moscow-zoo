import { createTheme } from '@mui/material/styles';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
});

const theme = createTheme({
  typography: {
    fontFamily: `${oswald.style.fontFamily},  Verdana, 'Geneva', Tahoma, sans-serif`,
  },
  palette: {
    primary: {
      main: '#1C4870', // синий
      light: '#F8F4E5', // бежевый
      dark: '#3C3B46', // серый
      contrastText: '#FFF',
    },
    secondary: {
      main: '#91BB12', // зеленый
    },
    custom: {
      main: '#D33F32', // красный
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
