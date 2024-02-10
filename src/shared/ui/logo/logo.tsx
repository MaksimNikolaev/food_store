import { FC } from 'react';
import Icons from '../icon/icons';
import styles from './logo.module.css';

type TLogo = {
  name?: string;
};

export const Logo: FC<TLogo> = ({ name = 'eatly' }) => {
  return (
    <div className={styles.logo}>
      <Icons width={45.94} height={42.31} name={'logo'} />
      <span className={styles.title}>{name}</span>
    </div>
  );
};
