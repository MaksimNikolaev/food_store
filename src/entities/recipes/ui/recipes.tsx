import { SpanColor } from '../../../shared/ui/span-color/span-color';
import styles from './recipes.module.css';
import { Recipe } from './recipe';
import { useGetRecipesQuery } from '../model/rtkq';

export const Recipes = () => {
  const { data } = useGetRecipesQuery();
  console.log(data);
  return (
    <section id='recipe' className={styles.recipes}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Our Top <SpanColor>Lunch</SpanColor>
        </h2>
        <ul className={styles.list}>
          {data?.map(recipe => (
            //P.S.Паттерн Фабрика применяется для создания однотипных объектов (в данном случае, объектов рецептов)
            <Recipe key={recipe.id} recipe={recipe}/>
          ))}
        </ul>
      </div>
    </section>
  );
};
