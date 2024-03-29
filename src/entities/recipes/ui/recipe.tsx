import { FC } from 'react';
import { Icon } from '../../../shared/ui/icon/icon';
import styles from './recipes.module.css';
import { TRecipeComponent } from '../model';
import { Raiting } from '../../../shared/ui/raiting/raiting';

export const Recipe: FC<TRecipeComponent> = ({ recipe }) => {
  return (
    <li className={styles.list_item}>
      <div className={styles.img_container}>
        <img
          loading='lazy'
          decoding='async'
          className={styles.img}
          src={recipe.image}
          alt={`Dish with ${recipe.title}`}
        />
      </div>
      <div className={styles.recipes_info}>
        <span className={styles.category}>{recipe.category}</span>
        <div className={styles.group}>
          <h3 className={styles.recipes_title}>{recipe.title}</h3>
          <Icon
            className={styles.bookmark}
            name='bookmark'
            width={40.09}
            height={40.09}
          />
        </div>
        <div className={styles.info}>
          <time className={styles.time}>{recipe.time} •</time>
          <Raiting raiting={recipe.raiting}/>
        </div>
      </div>
    </li>
  );
};
