import { FC } from 'react';
import styles from './button.module.css';
import { TButton } from './types';

/**
 * Компонент кнопки.
 * @param {object} props - Свойства компонента.
 * @param {TButtonVariant} props.variant - Вариант кнопки 'primary'(с заливкой фона) | 'secondary'(без заливки фона).
 * @param {...ButtonHTMLAttributes<HTMLButtonElement>} props - Атрибуты HTML кнопки.
 * @returns {JSX.Element} React компонент.
 */

export const Button: FC<TButton> = ({ variant, ...props }) => {
  return <button className={`${styles.btn} ${styles[variant]}`} {...props} />;
};
