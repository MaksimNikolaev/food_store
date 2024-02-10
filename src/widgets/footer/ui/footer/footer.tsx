import { Logo } from '../../../../shared/ui/logo/logo'
import { Navigation } from '../../../../features/navigation'
import styles from './footer.module.css';
import { Social } from '../../../../features/social';

export const Footer = () => {
  const menu = [
    {id: 1, title: 'About Us', path: '/about'},
    {id: 2, title: 'Contact', path: '/contact'},
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <Logo size='sm'/>
        <Navigation menu={menu} place='footer'/>
      </div>
      <div className={styles.group}>
        <p className={styles.copyright}>© 2023 EATLY All Rights Reserved.</p>
        <Social/>
      </div>
    </footer>
  )
}
