export type TRecipe = {
  id: number;
  image: string;
  category: string;
  title: string;
  time: string;
  raiting: number;
};

export type TRecipeComponent = {
  recipe: TRecipe;
};

export type TRecipeData = {
  recipes: [
    {
      id: number;
      name: string;
      ingredients: string[];
      instructions: string[];
      prepTimeMinutes: number;
      cookTimeMinutes: number;
      servings: number;
      difficulty: string;
      cuisine: string;
      caloriesPerServing: number;
      tags: string[];
      userId: number;
      image: string;
      rating: number;
      reviewCount: number;
      mealType: string[];
    }
  ];
  total: number;
  skip: number;
  limit: number;
};
