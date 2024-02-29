import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SERVER_BASE } from '../../../shared/utils/constants/constants';
import { TCommentArg, TCommentSlice } from './types';
import { TComment } from '../../../shared/ui/comment/types';
import { checkResponse } from '../../../shared/utils/function/functions';

const commentsInitialState: TCommentSlice = {
  comments: null,
  commentsSuccess: false,
  commentsLoading: false,
  commentsError: null,

  addComment: null,
  addCommentSuccess: false,
  addCommentLoading: false,
  addCommentError: null,
};

// запрос получения всех комментариев
export const getComments = createAsyncThunk(
  'comments/getComments',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`${SERVER_BASE}/comments/post/${id}`);
      return await checkResponse(response);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// запрос добавления комментария
export const addComment = createAsyncThunk<TComment, TCommentArg>(
  'comments/addComment',
  async (data: TCommentArg, { rejectWithValue }) => {
    try {
      const response = await fetch(`${SERVER_BASE}/comments/add`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return await checkResponse(response);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsInitialState,
  reducers: {
    resetCommentsState: () => commentsInitialState,
    clearCommentsMessage: state => {
      state.addCommentSuccess = false;
      state.addCommentError = null;
      state.commentsError = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getComments.pending, state => {
        state.commentsLoading = true;
        state.commentsError = null;
        state.commentsSuccess = false;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.commentsLoading = false;
        state.commentsSuccess = true;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.commentsLoading = false;
        state.commentsError = action.payload;
      })
      .addCase(addComment.pending, state => {
        state.addCommentLoading = true;
        state.addCommentError = null;
        state.addCommentSuccess = false;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.addComment = action.payload;
        state.addCommentLoading = false;
        state.addCommentSuccess = true;
        if (state.comments) {
          state.comments.comments.push(action.payload);
        }
      })
      .addCase(addComment.rejected, (state, action) => {
        state.addCommentLoading = false;
        state.addCommentError = action.payload;
      });
  },
});

export const { resetCommentsState, clearCommentsMessage } =
  commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;
