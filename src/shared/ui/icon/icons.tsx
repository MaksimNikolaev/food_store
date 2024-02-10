import { FC, SVGProps, useState } from 'react';
import IconsSVG from '../../assets/icons/icons.svg';
import style from './icons.module.css';

type IconName = 'logo';

type TIcons = {
  name: IconName;
  handleClick?: (e: React.SyntheticEvent) => void;
  colorHover?: string;
} & SVGProps<SVGSVGElement>;

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
const Icons: FC<TIcons> = ({
  name,
  colorHover,
  handleClick,
  className,
  ...props
}) => {
  const [isHoverIcon, setHoverIcon] = useState(false);
  const colorHoverIcon = isHoverIcon ? colorHover : 'transparent';

  return (
    <svg
      style={{
        color: colorHoverIcon,
        fill: colorHoverIcon,
        stroke: colorHoverIcon,
        transition: 'all 0.3s linear',
      }}
      className={`${handleClick ? style.icon : ''} ${className}`}
      onClick={handleClick}
      {...props}
      onMouseOver={() => setHoverIcon(true)}
      onMouseOut={() => setHoverIcon(false)}
    >
      <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  );
};

export default Icons;
