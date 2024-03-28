import styles from './raiting.module.css';
import { Icon } from '../icon/icon';
import { FC } from 'react';

export const Raiting: FC<Partial<{ raiting: number; isRevert: boolean; extraClass: string }>> = ({
  raiting,
  isRevert = false,
  extraClass
}) => {
  return (
    <div
      className={`${styles.wrapper} ${isRevert ? styles.wrapper_revert : ''} ${extraClass ? extraClass : ''}`}
    >
      <Icon aria-label='raiting' name='star' width={18} height={18} />
      <span className={styles.raiting}>{raiting}</span>
    </div>
  );
};
