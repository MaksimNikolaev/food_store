import { combineReducers } from 'redux';
import { recipesApi } from '../entities/recipes/model';

export const rootReducer = combineReducers({  
  [recipesApi.reducerPath]: recipesApi.reducer, 
});
