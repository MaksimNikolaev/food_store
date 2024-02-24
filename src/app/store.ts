import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from 'react-redux';
import { recipesApi } from '../entities/recipes/model';
import { rootReducer } from './root-reducer';
import { reviewApi } from '../entities/reviews/model';
import { userApi } from '../entities/posts/model';
import { postApi } from '../features/full-post/model';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      recipesApi.middleware,
      reviewApi.middleware,
      postApi.middleware,
      userApi.middleware,
    ),
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
