import { TComment } from '../../../shared/ui/comment/types';

export type TComments = {
  comments: TComment[];
  total: number;
  skip: number;
  limit: number;
};

export type TCommentArg = {
  body: string;
  postId: number;
  userId: number;
};

export type TCommentSlice = {
  comments: TComments | null,
  commentsSuccess: boolean,
  commentsLoading: boolean,
  commentsError: unknown,

  addComment: TComment | null,
  addCommentSuccess: boolean,
  addCommentLoading: boolean,
  addCommentError: unknown,
} 