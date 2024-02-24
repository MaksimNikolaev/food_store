import { FC, useState } from 'react';
import IconsSVG from '../../assets/icons/icons.svg';
import style from './icon.module.css';
import { TIcon } from './types';

/**
 * Компонент Icons отображает SVG-иконку с возможными эффектами при наведении и обработкой кликов.
 * Он позволяет настраивать цвет иконки при наведении.
 *
 * @компонент
 * @param {Object} props - Свойства компонента Icons.
 * @param {IconName} props.name - Название иконки для отображения.
 * @param {Function} [props.handleClick] - Функция, вызываемая при клике на иконку.
 * @param {string} [props.colorHover] - Цвет иконки при наведении. По умолчанию 'transparent'.
 * @param {string} [props.className] - Дополнительные CSS-классы для стилизации.
 * @param {...SVGProps<SVGSVGElement>} props - Дополнительные свойства SVG, передаваемые в элемент SVG.
 * @returns {JSX.Element} - Возвращает элемент JSX, представляющий иконку.
 */
export const Icon: FC<TIcon> = ({
  name,
  color,
  colorHover,
  handleClick,
  className,
  ...props
}) => {
  const [isHoverIcon, setHoverIcon] = useState(false);
  const colorHoverIcon = isHoverIcon ? colorHover : color;

  return (
    <svg
      style={{
        color: colorHoverIcon,
        fill: colorHoverIcon,
        stroke: colorHoverIcon,
        transition: 'all 0.2s linear',
      }}
      className={`${handleClick ? style.icon : ''} ${className ?? ''}`}
      onClick={handleClick}
      {...props}
      onMouseOver={() => setHoverIcon(true)}
      onMouseOut={() => setHoverIcon(false)}
    >
      <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  );
};
