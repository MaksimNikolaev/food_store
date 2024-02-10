import { FC } from 'react';
import styles from './button.module.css';
import { TButton } from './types';

export const Button: FC<TButton> = ({ variant, ...props }) => {
  return <button className={`${styles.btn} ${styles[variant]}`} {...props} />;
};
