export type TComment = {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
};

export type TReview ={
  comment: TComment;
}

export type TReviewData = {
  comments: TComment[];
  total: number;
  skip: number;
  limit: number;
};
