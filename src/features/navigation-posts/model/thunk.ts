import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SERVER_BASE } from '../../../shared/utils/constants/constants';
import checkResponse, {
  formatTags,
} from '../../../shared/utils/function/functions';
import { TPost, TPosts, TPostsSlice } from './types';

const postsInitialState: TPostsSlice = {
  posts: null,
  postsSuccess: false,
  postsLoading: false,
  postsError: null,
};

// запрос получения доступа страницы товара
export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (skip: number, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${SERVER_BASE}/posts?limit=12&skip=${skip}&select=title,tags,reactions,body,userId`,
        {}
      );
      const responseData: TPosts<TPost> = await checkResponse(response);
      // Преобразование тегов каждого поста
      const formattedPosts = responseData.posts.map(post => ({
        ...post,
        tags: formatTags(post.tags),
      }));

      // Возвращаем объект с отформатированными постами и другими данными
      return {
        ...responseData,
        posts: formattedPosts,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    resetState: () => postsInitialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, state => {
        state.postsLoading = true;
        state.postsError = null;
        state.postsSuccess = false;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.postsLoading = false;
        state.postsSuccess = true;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.postsLoading = false;
        state.postsError = action.payload;
      });
  },
});

export const { resetState } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
