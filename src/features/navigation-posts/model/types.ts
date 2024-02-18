export type TPost = {
  id: number;
  title: string;
  tags: string[];
  reactions: number;
  body: string;
};

export type TPosts = {
  posts: TPost[];
  total: number;
  skip: number;
  limit: number;
};

export type TPostsSlice = {
  posts: TPosts | null,
  postsSuccess: boolean,
  postsloading: boolean,
  postsError: unknown,
}