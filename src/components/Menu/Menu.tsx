import React, { FC } from 'react';
import Link from 'next/link';
import styles from '../Header/Header.module.scss';

const Menu: FC = () => {
  return (
    <ul className={styles.header__links}>
      <li>
        <Link href="/" className={styles.header__link}>
          Картотека
        </Link>
      </li>
      <li>
        <Link href="#" className={styles.header__link}>
          Контакты
        </Link>
      </li>
      <li>
        <Link href="#" className={styles.header__link}>
          О сайте
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
