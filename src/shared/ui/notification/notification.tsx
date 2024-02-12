import { FC } from 'react';
import styles from './notification.module.css';
import { TNotification } from './types';

/**
 * Компонент уведомления.
 * @param {object} props - Свойства компонента.
 * @param {TCard} props.card - Информация о карте уведомления.
 * @param {'xs' | 'sm'} [props.size='xs'] - Размер уведомления.
 * @param {string} [props.extraClass] - Дополнительный класс для стилизации.
 * @returns {JSX.Element} React компонент.
 */

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
          <h3 className={styles.title}>{card.name}</h3>
          <p
            className={`${styles.status} ${
              card.status.toLowerCase() === 'cancelled' ? styles.status_cancel : ''
            }`}
          >
            {card.status}
          </p>
        </div>
      </div>
      <time className={styles.time}>{card.time}</time>
    </div>
  );
};
