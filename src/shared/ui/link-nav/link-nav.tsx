import { NavLink } from 'react-router-dom';
import styles from './link-nav.module.css';
import { FC } from 'react';
import { TLinkNav } from './types';

/**
 * Компонент ссылки в навигационном меню.
 * @param {object} props - Свойства компонента.
 * @param {string} props.item - Текст ссылки.
 * @param {string} props.path - Путь, куда ведет ссылка.
 * @returns {JSX.Element} React компонент.
 */

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
