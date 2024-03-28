import { combineReducers } from 'redux';
import { recipesApi } from '../entities/recipes/model';
import { reviewApi } from '../entities/reviews/model';
import { postsReducer } from '../features/navigation-posts/model';
import { commentsReducer } from '../entities/comments/model';
import { userApi } from '../entities/posts/model';
import { postApi } from '../features/full-post/model';

export const rootReducer = combineReducers({  
  [recipesApi.reducerPath]: recipesApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
  posts: postsReducer,
  [postApi.reducerPath]: postApi.reducer,
  comments: commentsReducer,
  [userApi.reducerPath]: userApi.reducer,
});
