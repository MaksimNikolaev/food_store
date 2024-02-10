import { ButtonHTMLAttributes, FC } from 'react';
import styles from './button.module.css';

type TButtonVariant = 'primary' | 'secondary';

type TButton = {
  variant: TButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<TButton> = ({ variant, ...props }) => {
  return <button className={`${styles.btn} ${styles[variant]}`} {...props} />;
};
