import { infographicsData } from '../model';
import styles from './infographics.module.css';

export const Infographics = () => {
  return (
    <section className={styles.ifographics}>
      <ul className={styles.list}>
        {
          infographicsData.map(item => (
            <li className={styles.list_item}>
              <strong className={styles.title}>{item.title}</strong>
              <p className={styles.subtitle}>{item.subtitle}</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
