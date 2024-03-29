import { infographicsData } from '../model';
import styles from './infographics.module.css';

export const Infographics = () => {
  return (
    <section className={styles.ifographics}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {infographicsData.map(item => (
            <li key={item.id} className={styles.list_item}>
              <strong className={styles.title}>{item.title}</strong>
              <p className={styles.subtitle}>{item.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
