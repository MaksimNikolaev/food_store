import { Logo } from '../../../../shared/ui/logo/logo'
import { Navigation } from '../../../../features/navigation'
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation/>
    </header>
  )
}
