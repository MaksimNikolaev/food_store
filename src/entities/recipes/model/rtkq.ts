import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_BASE } from '../../../shared/utils/constants/constants';
import { TRecipe, TRecipeData } from './types';
import { getRecipesDTO } from '../api/adapter';

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_BASE,    
  }),
  endpoints: (build) => ({
    getRecipes: build.query<TRecipe[], void>({
      query: () => ({
        url: `/recipes/meal-type/lunch?limit=0`,
      }),
      transformResponse: (res: TRecipeData) => {
        return getRecipesDTO(res);
      },
    }),    
  }),
});

export const { useGetRecipesQuery } = recipesApi;
