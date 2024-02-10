
import { LinkNav } from '../../../../shared/ui/link-nav/link-nav';
import styles from './navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <LinkNav item='Recipes' path='/recipes' />
        </li>
        <li className={styles.list_item}>
          <LinkNav item='Blog' path='/blog' />
        </li>
      </ul>
    </nav>
  );
};
