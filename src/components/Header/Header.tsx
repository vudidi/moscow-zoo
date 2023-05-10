import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '../Menu/Menu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchInput from '../SearchInput/SearchInput';
import SelectInput from '../SelectInput/SelectInput';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <AppBar position="static" className={styles.header} color="primary">
      <Toolbar className={styles.header__toolbar}>
        <div className={styles.header__backgroundImg}></div>
        <Typography
          className={styles.header__title}
          variant="h3"
          color="primary.light"
        >
          В мире животных
        </Typography>
      </Toolbar>
      <div className={styles.header__wrapper}>
        <Toolbar className={styles.header__navbar}>
          <Menu />
          <SearchInput />
          <BurgerMenu />
          <SelectInput />
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Header;
