import { Logo } from '../../../shared/ui/logo/logo';
import { Navigation } from '../../../features/navigation';
import styles from './footer.module.css';
import { Social } from '../../../features/social';
import { menuNavigationList } from '../../../shared/utils/constants/constants';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      <div className={styles.footer_wrapper}>
        <Logo size='sm' />
        <Navigation menu={menuNavigationList} place='footer' />
      </div>
      <div className={styles.group}>
        <p className={styles.copyright}>© 2023 EATLY All Rights Reserved.</p>
        <Social />
      </div>
      </div>      
    </footer>
  );
};
