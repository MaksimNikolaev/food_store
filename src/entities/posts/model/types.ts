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
