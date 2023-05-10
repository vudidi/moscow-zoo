import React, { FC } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import styles from './BurgerMenu.module.scss';

const BurgerMenu: FC = () => {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Навигация
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
              {' '}
              <Link href="/">Картотека</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              {' '}
              <Link href="#">Контакты</Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link href="#">О сайте</Link>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default BurgerMenu;
