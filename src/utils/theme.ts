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
      light: '#5E8C7D', // светло-зелено-серый
      main: '#363A48', // серый
      contrastText: '#EFEFEA',
    },
    secondary: {
      light: '#2CAF9B', // светло-зеленый
      main: '#0E4446', // зеленый
    },
    custom: {
      main: '#F8763C', // оранжевый
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
