import { Logo } from '../../../../shared/ui/logo/logo';
import { Navigation } from '../../../../features/navigation';
import styles from './footer.module.css';
import { Social } from '../../../../features/social';
import { menuFooterList } from './constants';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <Logo size='sm' />
        <Navigation menu={menuFooterList} place='footer' />
      </div>
      <div className={styles.group}>
        <p className={styles.copyright}>© 2023 EATLY All Rights Reserved.</p>
        <Social />
      </div>
    </footer>
  );
};
