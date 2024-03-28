import { SpanColor } from '../../../shared/ui/span-color/span-color';
import styles from './recipes.module.css';
import { Recipe } from './recipe';
import { useGetRecipesQuery } from '../model/rtkq';
import { useEffect } from 'react';
import { getErrorText } from '../../../shared/utils/function/functions';
import { toast } from 'react-toastify';
import Loader from '../../../shared/ui/loaders/loader';

export const Recipes = () => {
  const { data, isError, isFetching, error } = useGetRecipesQuery();

  //Обработка ошибок
  useEffect(() => {
    if (isError && error) {
      const textError = getErrorText(error);
      toast.error(textError);
    }
  }, [isError, error]);

  return (
    <section id='recipe' className={styles.recipes}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Our Top <SpanColor>Lunch</SpanColor>
        </h2>
        <ul className={styles.list}>
          {isFetching ? (
            <Loader />
          ) : data?.length ? (
            data?.map(recipe => (
              //P.S.Паттерн Фабрика применяется для создания однотипных объектов (в данном случае, объектов рецептов)
              <Recipe key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p className={styles.no_comment}>Recipes not available</p>
          )}
        </ul>
      </div>
    </section>
  );
};
