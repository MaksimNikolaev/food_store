import { Link, useLocation } from 'react-router-dom';
import styles from './link-nav.module.css';
import { FC, useEffect } from 'react';
import { TLinkNav } from './types';

/**
 * Компонент ссылки в навигационном меню.
 * @param {object} props - Свойства компонента.
 * @param {string} props.item - Текст ссылки.
 * @param {string} props.path - Путь, куда ведет ссылка.
 * @returns {JSX.Element} React компонент.
 */

export const LinkNav: FC<TLinkNav> = ({ item, path }) => {
  const location = useLocation();

  useEffect(() => {
    // Проверяем, содержит ли текущий маршрут якорную ссылку
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);

      // Проверяем, найден ли элемент с указанным якорем
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Link
      to={path}
      className={styles.link}
    >
      {item}
    </Link>
  );
};
