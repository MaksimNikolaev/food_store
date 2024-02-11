import { FC } from 'react';
import styles from './notification.module.css';
import { TNotification } from './types';

export const Notification: FC<TNotification> = ({
  card,
  size = 'xs',
  extraClass,
}) => {
  return (
    <div
      className={`${styles.container} ${
        styles[`container_${size}`]
      } ${extraClass}`}
    >
      <div className={styles.group}>
        <img className={styles.img} src={card.photo} alt='food'></img>
        <div>
          <h2 className={styles.title}>{card.name}</h2>
          <p className={styles.status}>{card.status}</p>
        </div>        
      </div>
      <time className={styles.time}>{card.time}</time>
    </div>
  );
};
