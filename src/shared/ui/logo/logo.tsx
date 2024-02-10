import { FC } from 'react';
import { Icon } from '../icon/icon';
import styles from './logo.module.css';
import { TLogo } from './types';

export const Logo: FC<Partial<TLogo>> = ({ name = 'eatly', size = 'xs' }) => {
  const sizes = {
    xs: {
      widthLogo: 45.94,
      heightLogo: 42.31,
      fontSize: '21px',
      gap: '11px',
    },
    sm: {
      widthLogo: 61.88,
      heightLogo: 57,
      fontSize: '28px',
      gap: '18.82px',
    },
  };

  return (
    <div style={{ gap: sizes[size].gap }} className={styles.logo}>
      <Icon
        width={sizes[size].widthLogo}
        height={sizes[size].heightLogo}
        name={'logo'}
      />
      <span style={{ fontSize: sizes[size].fontSize }} className={styles.title}>
        {name}
      </span>
    </div>
  );
};
