import { TComment } from "../../../shared/ui/comment/types";

export type TReviewData = {
  comments: TComment[];
  total: number;
  skip: number;
  limit: number;
};
