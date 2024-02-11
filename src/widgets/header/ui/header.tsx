import { Logo } from '../../../shared/ui/logo/logo';
import { Navigation } from '../../../features/navigation';
import styles from './header.module.css';
import { menuHeaderList } from '../model/constants';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <Logo />
        <Navigation menu={menuHeaderList} place='header' />
      </div>
    </header>
  );
};
