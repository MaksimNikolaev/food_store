import { FC } from 'react';
import styles from './button.module.css';
import { TButton } from './types';

/**
 * Компонент кнопки.
 * @param {object} props - Свойства компонента.
 * @param {TButtonVariant} props.variant - Вариант кнопки 'primary'(с заливкой фона) | 'secondary'(без заливки фона).
 * @param {string} prop.extraClass - Дополнительный класс для стилизации
 * @param {...ButtonHTMLAttributes<HTMLButtonElement>} props - Атрибуты HTML кнопки.
 * @returns {JSX.Element} React компонент.
 */

export const Button: FC<TButton> = ({ variant, extraClass, ...props }) => {
  return (
    <button
      className={`${styles.btn} ${extraClass ? extraClass : ''} ${
        styles[variant]
      }`}
      {...props}
    />
  );
};
