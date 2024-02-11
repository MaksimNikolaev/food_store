import { Link } from 'react-router-dom';
import { Icon } from '../../../shared/ui/icon/icon';
import { SpanColor } from '../../../shared/ui/span-color/span-color';
import { recipesData } from '../model';
import styles from './recipes.module.css';

export const Recipes = () => {
  return (
    <section className={styles.recipes}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Our Top <SpanColor>Recipes</SpanColor>
        </h2>
        <ul className={styles.list}>
          {recipesData.map(recipe => (
            <li className={styles.list_item} key={recipe.id}>
              <div className={styles.img_container}>
                <img
                  loading='lazy'
                  decoding='async'
                  className={styles.img}
                  src={recipe.image}
                  alt={recipe.title}
                />
              </div>
              <div className={styles.recipes_info}>
                <span className={styles.category}>{recipe.category}</span>
                <h3 className={styles.recipes_title}>{recipe.title}</h3>
                <div className={styles.info}>
                  <time className={styles.time}>{recipe.time}</time>
                  <Icon name='star' width={18} height={18} />
                  <span className={styles.raiting}>{recipe.raiting}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Link to={'/#'} className={styles.link}>
          View All
          <Icon
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
