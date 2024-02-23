export type TPosts<T> = {
  posts: T[];
  total: number;
  skip: number;
  limit: number;
};

export type TPost = {
  id: number;
  title: string;
  tags: string[];
  reactions: number;
  body: string;
};

export type TPostFormatted = {
  id: number;
  title: string;
  tags: string;
  reactions: number;
  body: string;
};

export type TPostsSlice = {
  posts: TPosts<TPostFormatted> | null,
  postsSuccess: boolean,
  postsloading: boolean,
  postsError: unknown,
}