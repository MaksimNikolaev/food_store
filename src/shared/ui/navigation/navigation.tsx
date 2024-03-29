import { FC } from 'react';
import { LinkNav } from '../../../shared/ui/link-nav/link-nav';
import styles from './navigation.module.css';
import { TNavigation } from './types';

export const Navigation: FC<TNavigation> = ({ menu, place }) => {
  return (
    <nav>
      <ul className={`${styles.list} ${styles[`list_${place}`]}`}>
        {menu.map((item) => (
          <li key={item.id} className={styles.list_item}>
            <LinkNav item={item.title} path={item.path} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
