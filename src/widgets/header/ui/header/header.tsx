import { Logo } from '../../../../shared/ui/logo/logo';
import { Navigation } from '../../../../features/navigation';
import styles from './header.module.css';

export const Header = () => {
  const menu = [
    {id: 1, title: 'Recipes', path: '/recipes'},
    {id: 2, title: 'Blog', path: '/blog'},
  ]

  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <Logo />
        <Navigation menu={menu} place='header'/>
      </div>
    </header>
  );
};
