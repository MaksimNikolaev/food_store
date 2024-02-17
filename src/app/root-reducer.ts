import { combineReducers } from 'redux';
import { recipesApi } from '../entities/recipes/model';
import { reviewApi } from '../entities/reviews/model';

export const rootReducer = combineReducers({  
  [recipesApi.reducerPath]: recipesApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer, 
});
