import { FC } from 'react';
import { TSpanColor } from './types';

/**
 * Компонент span с цветом текста.
 * @param {object} props - Свойства компонента.
 * @param {string} [props.color='var(--blue-color)'] - Цвет текста.
 * @param {ReactNode} props.children - Дочерние элементы.
 * @returns {JSX.Element} React компонент.
 */

export const SpanColor: FC<TSpanColor> = ({ color = 'var(--blue-color)', children }) => {
  return <span style={{ color }}>{children}</span>;
};
