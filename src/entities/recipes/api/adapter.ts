import { formateDate } from '../../../shared/utils/function/date';
import { TRecipe, TRecipeData } from '../model';

/* P.S.Паттерн Адаптер В данном случае, функция адаптирует данные под нужный формат*/
/* Хотя можно рассматривать эту функцию как Фасад, предоставляющий интерфейс для получения
  рецептов, скрывая внутренние детали сортировки и форматирования. */
export const getRecipesDTO = (recipesData: TRecipeData): TRecipe[] => {  
  // Сначала сортируем рецепты по убыванию рейтинга
  const sortedRecipes = recipesData.recipes.sort((a, b) => b.rating - a.rating);

  // Затем выбираем три самых популярных рецепта
  const topThreeRecipes = sortedRecipes.slice(0, 3);

  // Маппим рецепты в нужный формат
  return topThreeRecipes.map(item => ({
    id: item.id,
    image: item.image,
    category: 'Lunch',
    title: item.name,
    time: formateDate(item.cookTimeMinutes),
    raiting: item.rating,
  }));
};
