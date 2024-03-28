export type TPost<T> = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: T;
  reactions: number;
};
