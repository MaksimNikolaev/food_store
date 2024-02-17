import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//import { TCompetitors } from '../../types';
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
        url: `${SERVER_BASE}/recipes/meal-type/lunch`,
      }),
      transformResponse: (res: TRecipeData) => {
        return getRecipesDTO(res);
      },
    }),    
  }),
});

export const { useGetRecipesQuery } = recipesApi;
