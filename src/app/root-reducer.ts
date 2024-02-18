import { combineReducers } from 'redux';
import { recipesApi } from '../entities/recipes/model';
import { reviewApi } from '../entities/reviews/model';
import { postsReducer } from '../features/navigation-posts/model';

export const rootReducer = combineReducers({  
  [recipesApi.reducerPath]: recipesApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
  posts: postsReducer,
});
