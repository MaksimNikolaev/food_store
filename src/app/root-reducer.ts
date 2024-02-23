import { combineReducers } from 'redux';
import { recipesApi } from '../entities/recipes/model';
import { reviewApi } from '../entities/reviews/model';
import { postsReducer } from '../features/navigation-posts/model';
import { postApi } from '../entities/full-post/model';
import { commentsApi } from '../entities/comments/model';

export const rootReducer = combineReducers({  
  [recipesApi.reducerPath]: recipesApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
  posts: postsReducer,
  [postApi.reducerPath]: postApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
});
