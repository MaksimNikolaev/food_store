import { TComment } from "../../../shared/ui/comment/types";

export type TComments = {
  comments: TComment[];
  total: number;
  skip: number;
  limit: number;
};
