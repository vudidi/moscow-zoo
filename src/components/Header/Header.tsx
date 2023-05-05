import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <AppBar
      position="static"
      className={styles.header}
      sx={{
        backgroundColor: '#2CAF9B',
      }}
    >
      <Toolbar className={styles.header__toolbar}>
        <div className={styles.header__backgroundImg}></div>
        <Typography
          className={styles.header__title}
          variant="h3"
          color="primary.contrastText"
        >
          В мире животных
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
