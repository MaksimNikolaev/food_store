export type TComment = {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
};

export type TCommentComponent ={
  comment: TComment;
  extraClass?: string;
}
