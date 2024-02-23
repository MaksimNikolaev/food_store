type TPostBase = {
  id: number;
  title: string;
  tags: string[];
  reactions: number;
  body: string;
  userId: number;
};

export type TPost = TPostBase;

export type TPostFormatted = Omit<TPostBase, 'tags'> & { tags: string };

export type TPosts<T> = {
  posts: T[];
  total: number;
  skip: number;
  limit: number;
};

export type TPostsSlice = {
  posts: TPosts<TPostFormatted> | null;
  postsSuccess: boolean;
  postsLoading: boolean;
  postsError: unknown;
};