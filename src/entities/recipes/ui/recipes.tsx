import { Link } from 'react-router-dom';
import { Icon } from '../../../shared/ui/icon/icon';
import { SpanColor } from '../../../shared/ui/span-color/span-color';
import { recipesData } from '../model';
import styles from './recipes.module.css';
import { Recipe } from './recipe';

export const Recipes = () => {
  return (
    <section id='recipe' className={styles.recipes}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Our Top <SpanColor>Recipes</SpanColor>
        </h2>
        <ul className={styles.list}>
          {recipesData.map(recipe => (
            //P.S.Паттерн Фабрика применяется для создания однотипных объектов (в данном случае, объектов рецептов)
            <Recipe key={recipe.id} recipe={recipe}/>
          ))}
        </ul>
        <Link to={'/#'} className={styles.link}>
          View All
          <Icon
            aria-hidden="true"
            className={styles.icon}
            name='arrow_grey'
            width={18}
            height={18}
          />
        </Link>
      </div>
    </section>
  );
};
