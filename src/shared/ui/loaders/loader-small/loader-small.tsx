import style from './loader-small.module.css';
import { FC } from 'react';
import { TLoaderSmall } from './types';

/**
 * @param color - Цвет лоадера. По умолчанию синий. Прописать нужный класс в стилях, при добавлении нового цвета
 * white - белый
 * green - зеленый
 * blue - синий (по умолчанию)
 */

const LoaderSmall: FC<TLoaderSmall> = ({ color = 'blue' }) => {
  const numDivs = 8;
  const divs = Array.from({ length: numDivs }, (_, index) => <div key={index} className={style[color]}></div>);

  return <div className={style.loading}>{divs}</div>;
};

export default LoaderSmall;
