import { NavLink } from 'react-router-dom';
import styles from './link-nav.module.css';
import { FC } from 'react';
import { TLinkNav } from './types';

export const LinkNav: FC<TLinkNav> = ({ item, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.active : ''}`
      }
    >
      {item}
    </NavLink>
  );
};