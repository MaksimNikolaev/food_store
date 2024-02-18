import { Logo } from '../../../shared/ui/logo/logo';
import styles from './header.module.css';
import { FC } from 'react';
import { THeader } from '../model/types';
import { Navigation } from '../../../shared/ui/navigation/navigation';

export const Header:FC<THeader> = ({menuNavigationList}) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <Logo />
        <Navigation menu={menuNavigationList} place='header' />
      </div>
    </header>
  );
};
