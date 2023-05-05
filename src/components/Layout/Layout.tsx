import React, { FC } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ILayout from '../../interfaces/ILayout';
import Header from '../Header/Header';
import Container from '@mui/material/Container';
import theme from '../../theme/theme';

const Layout: FC<ILayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name="keywords" content="moscow zoo, next.js, react" />
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container
          maxWidth="lg"
          sx={{
            mt: '30px',
            mb: '30px',
          }}
        >
          <div>{children}</div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
