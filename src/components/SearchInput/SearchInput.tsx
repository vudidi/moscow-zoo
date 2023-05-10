import React, { FC } from 'react';
import styles from '../Header/Header.module.scss';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput: FC = () => {
  return (
    <div className={styles.header__search}>
      <input
        placeholder="Поиск"
        type="search"
        className={styles.header__searchInput}
      />

      <IconButton type="button" className={styles.header__searchButton}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchInput;
